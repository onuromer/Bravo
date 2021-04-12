﻿using Dax.Formatter.Models;
using Microsoft.Extensions.Logging;
using Sqlbi.Bravo.Core;
using Sqlbi.Bravo.Core.Logging;
using Sqlbi.Bravo.Core.Security;
using Sqlbi.Bravo.Core.Settings.Interfaces;
using Sqlbi.Bravo.UI.Framework.Commands;
using Sqlbi.Bravo.UI.Framework.Interfaces;
using Sqlbi.Bravo.UI.Framework.ViewModels;
using Sqlbi.Bravo.UI.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Windows.Input;

namespace Sqlbi.Bravo.UI.ViewModels
{
    internal class SettingsViewModel : BaseViewModel
    {
        private readonly IGlobalSettingsProviderService _settings;
        private readonly ILogger<SettingsViewModel> _logger;
        private readonly IThemeSelectorService _themeSelector;

        public SettingsViewModel(IGlobalSettingsProviderService settings, ILogger<SettingsViewModel> logger, IThemeSelectorService themeSelector)
        {
            _settings = settings;
            _logger = logger;
            _themeSelector = themeSelector;

            _logger.Trace();
            SaveCommand = new RelayCommand<object>(execute: async (parameter) => await SaveAsync(parameter));

            SetThemeCommand = new RelayCommand<string>(themeName =>
            {
                Mouse.OverrideCursor = Cursors.Wait;
                try
                {
                    _themeSelector.SetTheme(themeName);
                }
                finally
                {
                    Mouse.OverrideCursor = null;
                }
            });

            VersionDescription = $"{ AppConstants.ApplicationNameLabel } - { AppConstants.ApplicationProductVersion }";
        }

        public string VersionDescription { get; private set; }

        public string Theme
        {
            get => _settings.Application.ThemeName;
            set
            {
                System.Diagnostics.Debug.WriteLine($"Setting Theme to '{value}'");
                _settings.Application.ThemeName = value;
                OnPropertyChanged(nameof(Theme));
            }
        }

        public bool TelemetryEnabled
        {
            get => _settings.Application.TelemetryEnabled;
            set => _settings.Application.TelemetryEnabled = value;
        }

        public bool ProxyUseSystem
        {
            get => _settings.Application.ProxyUseSystem;
            set => _settings.Application.ProxyUseSystem = value;
        }

        public string ProxyAddress
        {
            get => _settings.Application.ProxyAddress;
            set => _settings.Application.ProxyAddress = value;
        }

        public string ProxyUser
        {
            get => _settings.Application.ProxyUser;
            set => _settings.Application.ProxyUser = value;
        }

        public bool ProxyIsEnabled => !ProxyUseSystem;

        public bool ShellBringToForegroundOnParentProcessMainWindowScreen
        {
            get => _settings.Application.ShellBringToForegroundOnParentProcessMainWindowScreen;
            set => _settings.Application.ShellBringToForegroundOnParentProcessMainWindowScreen = value;
        }

        public IEnumerable<string> DaxFormatterLineStyleItemsSource => Enum.GetNames(typeof(DaxFormatterLineStyle));

        public string DaxFormatterLineStyle
        {
            get => Enum.GetName(_settings.Application.DaxFormatterLineStyle);
            set => _settings.Application.DaxFormatterLineStyle = (DaxFormatterLineStyle)Enum.Parse(typeof(DaxFormatterLineStyle), value);
        }

        public ICommand SaveCommand { get; set; }

        public bool SaveCommandIsRunning { get; set; }

        public ICommand SetThemeCommand { get; set; }

        private async Task SaveAsync(object parameter)
        {
            _logger.Trace();

            _settings.Application.ProxyPassword = ProxyUseSystem ? default : (parameter as ISecurePassword).SecurePassword.ToProtectedString();

            await ExecuteCommandAsync(() => SaveCommandIsRunning, _settings.SaveAsync);
        }
    }
}