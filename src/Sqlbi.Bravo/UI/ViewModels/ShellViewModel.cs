﻿using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Sqlbi.Bravo.Client.AnalysisServicesEventWatcher;
using Sqlbi.Bravo.Client.PowerBI.Desktop;
using Sqlbi.Bravo.Client.PowerBI.PowerBICloud;
using Sqlbi.Bravo.Client.VertiPaqAnalyzer;
using Sqlbi.Bravo.Core;
using Sqlbi.Bravo.Core.Logging;
using Sqlbi.Bravo.Core.Services.Interfaces;
using Sqlbi.Bravo.Core.Settings;
using Sqlbi.Bravo.Core.Settings.Interfaces;
using Sqlbi.Bravo.UI.Controls;
using Sqlbi.Bravo.UI.DataModel;
using Sqlbi.Bravo.UI.Framework.Commands;
using Sqlbi.Bravo.UI.Framework.ViewModels;
using Sqlbi.Bravo.UI.Views;
using System;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;

namespace Sqlbi.Bravo.UI.ViewModels
{
    internal class ShellViewModel : BaseViewModel
    {
        public readonly static string MenuItemFormatDaxName = "Format DAX";
        public readonly static string MenuItemAnalyzeModelName = "Analyze Model";
        public readonly static string MenuItemManageDatesName = "Manage dates";
        public readonly static string MenuItemExportDataName = "Export data";
        public readonly static string MenuItemBestPracticesName = "Best practices";
        public readonly static string MenuItemOptimizeModelName = "Optimize model";
        public readonly static string OptionMenuItemShowDebugInfoName = "Show debug info";
        public readonly static string OptionMenuItemSignInName = "Sign in";
        public readonly static string OptionMenuItemSettingsName = "Settings";

        public readonly static int MenuItemFormatDaxIndex = 0;
        public readonly static int MenuItemAnalyzeModelIndex = 1;

        private readonly IAnalysisServicesEventWatcherService _watcher;
        private readonly ILogger _logger;

        public ShellViewModel(IAnalysisServicesEventWatcherService watcher, ILogger<ShellViewModel> logger)
        {
            _watcher = watcher;
            _logger = logger;

            _logger.Trace();
            _watcher.OnWatcherEvent += OnWatcherEvent;
            _watcher.OnConnectionStateChanged += OnAnalysisServicesConnectionStateChanged;

            PrintDebug();

            Tabs = new ObservableCollection<TabItemViewModel>
            {
                App.ServiceProvider.GetRequiredService<TabItemViewModel>()
            };
            SelectedTab = Tabs[0];

            ItemSelectedCommand = new RelayCommand(async () => await ItemSelected());

            Tabs.CollectionChanged += (s, e) =>
            {
                // If all tabs closed ...
                if (!Tabs.Any())
                {
                    // ... open a new tab
                    // - via some threading gymnastics as it's not possible to modify the collection during the Changed event
                    var tempthread = new Thread(() =>
                    {
                        Application.Current.Dispatcher.Invoke(() =>
                        {
                            Tabs.Add(App.ServiceProvider.GetRequiredService<TabItemViewModel>());
                            // Ensure the new tab is selected so the contents load
                            SelectedTab = Tabs.First();
                        });
                    })
                    {
                        IsBackground = false,
                        Priority = ThreadPriority.BelowNormal,
                    };
                    tempthread.Start();
                }
            };
        }

        public double WindowMinWidth => 800D;

        public double WindowMinHeight => 600D;

        public string WindowTitle => AppConstants.ApplicationNameLabel;

        public ObservableCollection<string> OutputMessages { get; set; } = new ObservableCollection<string>();

        public ObservableCollection<NavigationItem> MenuItems
        {
            get
            {
                var analyzeModelIcon = new AnalyzeModelIcon();
                var daxFormatterIcon = new DaxFormatterIcon();
                daxFormatterIcon.SetResourceReference(DaxFormatterIcon.ForegroundBrushProperty, name: "MahApps.Brushes.ThemeForeground");

                var collection = new ObservableCollection<NavigationItem>()
                {
                    new NavigationItem { Name = MenuItemFormatDaxName, IconControl = daxFormatterIcon, SubPageInTab = SubPage.DaxFormatter },
                    new NavigationItem { Name = MenuItemAnalyzeModelName, IconControl = analyzeModelIcon, SubPageInTab = SubPage.AnalyzeModel },
                    new NavigationItem { Name = MenuItemManageDatesName, Glyph = "\uEC92", ShowComingSoon = true },
                    new NavigationItem { Name = MenuItemExportDataName, Glyph = "\uE1AD", ShowComingSoon = true },
                    new NavigationItem { Name = MenuItemBestPracticesName, Glyph = "\uE19F", ShowComingSoon = true },
                    new NavigationItem { Name = MenuItemOptimizeModelName, Glyph = "\uEC4A", ShowComingSoon = true },
                };

                return collection;
            }
        }

        public int LastGoodSelectedIndex { get; set; } = -1;

        public ObservableCollection<NavigationItem> OptionMenuItems { get; } = new ObservableCollection<NavigationItem>()
        {
#if DEBUG
            new NavigationItem{ Name = OptionMenuItemShowDebugInfoName, Glyph = "\uE7B3" },
#endif
            new NavigationItem{ Name = OptionMenuItemSignInName, Glyph = "\uE13D" },
            new NavigationItem{ Name = OptionMenuItemSettingsName, Glyph = "\uE713" },
        };

        public NavigationItem SelectedItem { get; set; }

        public NavigationItem SelectedOptionsItem { get; set; }

        public NavigationItem LastNavigation { get; private set; } = null;

        // Bind (and track) both SelectedItem and SelectedIndex
        // because just tracking the SelectedItem is unreliable
        // and can lead to selection highlighting getting out of sync.
        public int SelectedIndex { get; set; }

        public ObservableCollection<TabItemViewModel> Tabs { get; set; }

        public TabItemViewModel SelectedTab { get; set; }

        public ICommand ItemSelectedCommand { get; set; }

        private void OnWatcherEvent(object sender, WatcherEventArgs e)
        {
            _logger.Trace();

            var action = new Action<WatcherEventArgs>((e) =>
            {
                var item = $"OnAnalysisServicesEvent(event<{ e.Event }>)";
                OutputMessages.Add(item);
            });

            Application.Current.Dispatcher.BeginInvoke(action, e);
        }

        [PropertyChanged.SuppressPropertyChangedWarnings]
        private void OnAnalysisServicesConnectionStateChanged(object sender, ConnectionStateEventArgs e)
        {
            _logger.Trace();

            var action = new Action<ConnectionStateEventArgs>((e) =>
            {
                var item = $"OnAnalysisServicesConnectionStateChanged(current<{ e.Current }>|previous<{ e.Previous }>)";
                OutputMessages.Add(item);
            });

            Application.Current.Dispatcher.BeginInvoke(action, e);
        }

        private void PrintDebug()
        {
            _logger.Trace();

            var settings = App.ServiceProvider.GetService<IGlobalSettingsProviderService>();

            OutputMessages.Add("--- PROCESS INFO ---");
            OutputMessages.Add($"CurrentProcess.Id -> { Environment.ProcessId }");
            OutputMessages.Add($"CurrentProcess.StartTime -> { System.Diagnostics.Process.GetCurrentProcess().StartTime }");
            OutputMessages.Add($"ParentProcess.Id -> { settings.Runtime.ParentProcessId }");
            OutputMessages.Add($"ParentProcess.ProcessName -> { settings.Runtime.ParentProcessName }");
            OutputMessages.Add($"ParentProcess.MainWindowTitle -> { settings.Runtime.ParentProcessMainWindowTitle }");
            OutputMessages.Add($"ParentProcess.MainWindowHandle -> { settings.Runtime.ParentProcessMainWindowHandle }");
            OutputMessages.Add("--- APPLICATION SETTINGS ---");
            OutputMessages.Add($"{ nameof(settings.Application.TelemetryEnabled) } -> { settings.Application.TelemetryEnabled }");
            OutputMessages.Add($"{ nameof(settings.Application.ShellBringToForegroundOnParentProcessMainWindowScreen) } -> { settings.Application.ShellBringToForegroundOnParentProcessMainWindowScreen }");
            OutputMessages.Add("--- RUNTIME SETTINGS ---");
            OutputMessages.Add($"{ nameof(settings.Runtime.ServerName) } -> { settings.Runtime.ServerName }");
            OutputMessages.Add($"{ nameof(settings.Runtime.DatabaseName) } -> { settings.Runtime.DatabaseName }");
            OutputMessages.Add($"{ nameof(settings.Runtime.IsExecutedAsExternalTool) } -> { settings.Runtime.IsExecutedAsExternalTool }");
            OutputMessages.Add($"{ nameof(settings.Runtime.IsExecutedAsExternalToolForPowerBIDesktop) } -> { settings.Runtime.IsExecutedAsExternalToolForPowerBIDesktop }");
            OutputMessages.Add($"{ nameof(settings.Runtime.HasCommandLineParseErrors) } -> { settings.Runtime.HasCommandLineParseErrors }");

            foreach (var error in settings.Runtime.CommandLineParseErrors)
                OutputMessages.Add($"\t{ error }");

            OutputMessages.Add("--- DEBUG ---");
        }

        public async Task AddNewTabAsync(PowerBIDesktopInstance instance)
        {
            var connectionSettings = await Task.Run(() => ConnectionSettings.CreateFrom(instance));

            var newTab = App.ServiceProvider.GetRequiredService<TabItemViewModel>();
            newTab.ConnectionType = BiConnectionType.ActivePowerBiWindow;
            newTab.ConnectionName = connectionSettings.ConnectionName;
            newTab.ConnectionSettings = connectionSettings;
            newTab.ShowSubPage(SubPage.DaxFormatter);

            Tabs.Add(newTab);
            SelectedTab = newTab;
        }

        public async Task AddNewTabAsync(PowerBICloudSharedDataset dataset)
        {
            var service = App.ServiceProvider.GetRequiredService<IPowerBICloudService>();
            var connectionSettings = await Task.Run(() => ConnectionSettings.CreateFrom(dataset, service));

            var newTab = App.ServiceProvider.GetRequiredService<TabItemViewModel>();
            newTab.ConnectionType = BiConnectionType.ConnectedPowerBiDataset;
            newTab.ConnectionName = connectionSettings.ConnectionName;
            newTab.ConnectionSettings = connectionSettings;
            newTab.ShowSubPage(SubPage.AnalyzeModel);

            Tabs.Add(newTab);
            SelectedTab = newTab;
        }

        public async Task AddNewTabAsync(VertiPaqAnalyzerFile file)
        {
            var connectionSettings = await Task.Run(() => ConnectionSettings.CreateFrom(file));

            var newTab = App.ServiceProvider.GetRequiredService<TabItemViewModel>();
            newTab.ConnectionType = BiConnectionType.VertipaqAnalyzerFile;
            newTab.ConnectionName = connectionSettings.ConnectionName;
            newTab.ConnectionSettings = connectionSettings;
            newTab.ShowSubPage(SubPage.AnalyzeModel);

            Tabs.Add(newTab);
            SelectedTab = newTab;
        }

        public async Task AddNewTabAsync(string connectionName, string serverName, string databaseName)
        {            
            var connectionSettings = await Task.Run(() => ConnectionSettings.CreateFrom(connectionName, serverName, databaseName));

            var newTab = App.ServiceProvider.GetRequiredService<TabItemViewModel>();

            switch (connectionSettings.ConnectionType)
            {
                case ConnectionType.PowerBIDesktop:
                    {
                        newTab.ConnectionType = BiConnectionType.ActivePowerBiWindow;
                        newTab.ConnectionName = connectionSettings.ConnectionName;
                        newTab.ConnectionSettings = connectionSettings;
                    }
                    break;
                case ConnectionType.PowerBIDataset:
                    {
                        var powerbiCloudService = App.ServiceProvider.GetRequiredService<IPowerBICloudService>();
                        if (powerbiCloudService.IsAuthenticated == false)
                        {
                            var loggedIn = await powerbiCloudService.LoginAsync();
                            if (loggedIn == false)
                            {
                                return;
                            }
                        }

                        var powerbiSharedDatasets = await powerbiCloudService.GetDatasetsAsync();
                        var powerbiSharedDataset = powerbiSharedDatasets.SingleOrDefault((d) => d.Model.DBName.Equals(databaseName, StringComparison.InvariantCultureIgnoreCase));
                        if (powerbiSharedDataset == null)
                        {
                            throw new InvalidOperationException($"Power BI dataset '{ databaseName }' not found.");
                        }

                        connectionSettings = ConnectionSettings.CreateFrom(powerbiSharedDataset, powerbiCloudService);

                        newTab.ConnectionType = BiConnectionType.ConnectedPowerBiDataset;
                        newTab.ConnectionName = connectionSettings.ConnectionName;
                        newTab.ConnectionSettings = connectionSettings;
                    }
                    break;
                default:
                    throw new NotImplementedException($"Connection to '{ serverName }' is not supported.");
            }

            newTab.ShowSubPage(SubPage.AnalyzeModel);

            Tabs.Add(newTab);
            SelectedTab = newTab;            
        }

        public async Task AddNewTab()
        {
            var newTab = App.ServiceProvider.GetRequiredService<TabItemViewModel>();
            newTab.ShowSubPage(SubPage.SelectConnection);

            Tabs.Add(newTab);
            SelectedTab = newTab;

            await Task.CompletedTask;
        }

        private async Task ItemSelected()
        {
            if (SelectedOptionsItem != null)
            {
                if (SelectedOptionsItem.Name == OptionMenuItemSettingsName)
                {
                    await ShellView.Instance.ShowSettings();
                }
                else if (SelectedOptionsItem.Name == OptionMenuItemShowDebugInfoName)
                {
                    ShellView.Instance.ShowDebugInfo();
                }
                else
                {
                    // TODO REQUIREMENTS: need to know how to sign in
                    _ = MessageBox.Show(
                        "Need to sign-in (this is placeholder UI)",
                        "TODO",
                        MessageBoxButton.OK,
                        MessageBoxImage.Question);
                }

                // Put selection focus back where it was
                SelectedOptionsItem = null;
                SelectedItem = MenuItems.FirstOrDefault((i) => i.Name == LastNavigation?.Name);
            }
            else if (SelectedItem != null)
            {
                // LastNavigation is used to avoid navigating to where already are
                if (!SelectedItem.ShowComingSoon && SelectedItem.Name != (LastNavigation?.Name ?? string.Empty))
                {
                    if (SelectedItem.SubPageInTab != SubPage.AnalyzeModel && (SelectedTab.ConnectionSettings?.ConnectionType == ConnectionType.VertiPaqAnalyzerFile))
                    {
                        SelectedItem = MenuItems.FirstOrDefault((i) => i.SubPageInTab == SubPage.AnalyzeModel);
                        SelectedIndex = MenuItemAnalyzeModelIndex;
                    }
                    else
                    {
                        LastNavigation = SelectedItem;

                        switch (SelectedItem.SubPageInTab)
                        {
                            case SubPage.SelectConnection:
                                LastGoodSelectedIndex = -1;
                                break;
                            case SubPage.DaxFormatter:
                                LastGoodSelectedIndex = MenuItemFormatDaxIndex;
                                break;
                            case SubPage.AnalyzeModel:
                                LastGoodSelectedIndex = MenuItemAnalyzeModelIndex;
                                break;
                            default:
                                break;
                        }

                        if (SelectedTab.ConnectionType != BiConnectionType.UnSelected)
                        {
                            SelectedTab.ShowSubPage(SelectedItem.SubPageInTab);
                        }
                    }
                }
                else
                {
                    // If an item that isn't enabled is selected put the selection indicator back where it was
                    SelectedItem = MenuItems.FirstOrDefault((i) => i.Name == LastNavigation?.Name);
                    SelectedIndex = LastGoodSelectedIndex;
                }
            }
        }
    }
}