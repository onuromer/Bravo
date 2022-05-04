/*!
 * Bravo for Power BI
 * Copyright (c) SQLBI corp. - All rights reserved.
 * https://www.sqlbi.com
 * 
 * Turkish translation by: onuromer
*/
import { Locale } from '../i18n';
import { strings as _ } from '../strings';

const locale: Locale = {

    locale: "tr", // DO NOT TRANSLATE
    enName: "Turkish", // DO NOT TRANSLATE
    name: "Türkçe",

    strings: {
        [_.addCtrlTitle]: "Aç",
        [_.aggregatedTableName]: "Birden fazla Tablo",
        [_.AnalyzeModel]: "Modeli analiz et",
        [_.analyzeModelSummary]: `Veri setiniz <strong>{size:bytes}</strong> büyüklüğünde ve <strong>{count}</strong> adet kolon{{s}} içeriyor.`,
        [_.analyzeModelSummary2]: `, bunlardan <span class="text-highlight"><strong>{count}</strong> tanesi Modelde ilişkilendirilmemiş.</span>`,
        [_.appName]: "Bravo for Power BI", // DO NOT TRANSLATE
        [_.appUpdateAvailable]: "Yeni versiyon var: {version}",
        [_.appUpdateChangelog]: "Değişiklik Logu",
        [_.appUpdateDownload]: "İndir",
        [_.appUpdateViewDetails]: "Detayları Görüntüle",
        [_.appUpToDate]: "Bravo güncel",
        [_.appVersion]: "Versiyon {version}",
        [_.backupReminder]: "İlerlemeden önce raporunuzun yedeğini almayı unutmayın - <b>Bazı değişiklikler geri alınamayabilir.</b>.",
        [_.BestPractices]: "En İyi Yöntemler",
        [_.canceled]: "İptal Edildi",
        [_.changeStatusAdded]: "E",
        [_.changeStatusAddedTitle]: "Eklendi",
        [_.changeStatusDeleted]: "S",
        [_.changeStatusDeletedTitle]: "Silindi",
        [_.changeStatusModified]: "D",
        [_.changeStatusModifiedTitle]: "Değiştirildi",
        [_.clearCtrlTitle]: "Temizle",
        [_.closeCtrlTitle]: "Kapat",
        [_.closeOtherTabs]: "Diğer Sekmeleri Kapat",
        [_.closeTab]: "Sekmeyi Kapat",
        [_.collapseAllCtrlTitle]: "Tümünü Daralt",
        [_.columnExportedCompleted]: "Tablo başarıyla dışa aktarılmıştır.",
        [_.columnExportedFailed]: "Bu tablo belirlenemeyen bir sebepten ötürü dışarı aktarılamamıştır.",
        [_.columnExportedTruncated]: "Bu tablo, satır sayısı izin verilen maksimum değeri aştığı için kesildi.",
        [_.columnMeasureFormatted]: "Bu ölçü zaten biçimlendirilmiş.",
        [_.columnMeasureNotFormattedTooltip]: "Bu ölçü biçimlendirilmemiş.",
        [_.columnMeasureWithError]: "Bu ölçü hatalar içermektedir.",
        [_.columnUnreferencedExplanation]: `Performansı optimize etmek için <span class="text-highlight">referanssız sütunlar</span> genellikle modelden kaldırılabilir. Bunları kaldırmadan önce, bu sütunların hiçbir raporda kullanmadığınızdan emin olun. Bravo bunları tespit edemez.`,
        [_.columnUnreferencedTooltip]: "Bu sütun, modelinizde refere edilmiyor.",
        [_.confirmTabCloseMessage]: "Bu belgedeki değişiklikleri kaydetmemişsiniz gibi görünüyor.<br>Kapatmak istediğinizden emin misiniz?",
        [_.connectBrowse]: "Gözat",
        [_.connectDatasetsTableEndorsementCol]: "Onay",
        [_.connectDatasetsTableNameCol]: "Ad",
        [_.connectDatasetsTableOwnerCol]: "Sahip",
        [_.connectDatasetsTableWorkspaceCol]: "Çalışma Alanı",
        [_.connectDialogAttachPBIMenu]: "powerbi.com üzerindeki Veri Setleri",
        [_.connectDialogConnectPBIMenu]: "Power BI Desktop üzerindeki Etkin Raporlar",
        [_.connectDialogOpenVPXMenu]: "VPAX Dosyaları",
        [_.connectDialogTitle]: "Aç",
        [_.connectDragFile]: "Bir VPAX dosyasını buraya sürükleyin<br>veya bilgisayarınıza göz atın",
        [_.connectNoReports]: "Etkin rapor bulunamadı.<br>Power BI Desktop ile bir rapor açın ve burada görünmesini bekleyin.",
        [_.copiedErrorDetails]: "Kopyalandı!",
        [_.copy]: "Kopyala",
        [_.copyErrorDetails]: "Kopyalama Hatası",
        [_.copyFormulaCtrlTitle]: "Biçimlendirilmiş Ölçüyü Kopyala",
        [_.copyMessage]: "Mesajı Kopyala",
        [_.copyright]: "Tüm hakları saklıdır.",
        [_.createIssue]: "Hata Bildir",
        [_.cut]: "Kes",
        [_.dataUsageLink]: "Veriniz nasıl kullanılıyor?", 
        [_.dataUsageMessage]: `Bravo, kodunuzu biçimlendirmek için bu veri setinin ölçüleri güvenli bir bağlantı üzerinden SQLBI tarafından yönetilen bir hizmet olan DAX Formatter'a gönderir.<p><strong>Hizmet, verilerinizi hiçbir yerde saklamaz.</strong></p> <p>En çok kullanılan DAX işlevleri, karmaşıklık endeksi ve ortalama sorgu uzunluğu gibi bazı bilgiler istatistiksel amaçlarla kaydedilebilir.</p>`,
        [_.dataUsageTitle]: "Veriniz nasıl kullanılıyor?",
        [_.DaxFormatter]: "DAX'ı Biçimlendir",
        [_.daxFormatterAgreement]: "DAX'ı biçimlendirmek için Bravo, ölçülerinizi DAX Formatter hizmetine gönderir.",
        [_.daxFormatterAnalyzeConfirm]: "Analizi gerçekleştirmek için Bravo'nun tüm ölçüerini DAX Formatter hizmetine göndermesi gerekir. Devam etmek istiyor musunuz?",
        [_.daxFormatterAutoPreviewOption]: "Otomatik Önizleme",
        [_.daxFormatterFormat]: "Seçili olanı Biçimlendir",
        [_.daxFormatterFormatDisabled]: "Biçimlendir (Desteklenmeyen)",
        [_.daxFormatterFormattedCode]: "Biçimlendirilmiş (Önizleme)",
        [_.daxFormatterOriginalCode]: "Orjinal",
        [_.daxFormatterPreviewAllButton]: "Tüm Ölçüleri Önizle",
        [_.daxFormatterPreviewButton]: "Önizleme",
        [_.daxFormatterPreviewDesc]: "Bir önizleme oluşturmak için Bravo'nun bu ölçüyü DAX Formatter hizmetine göndermesi gerekir.",
        [_.daxFormatterSuccessSceneMessage]: "Tebrikler, <strong>{count} ölçü{{s}}</strong> başarıyla biçimlendirildi.",
        [_.daxFormatterSummary]: `Veri setiniz {count} adet ölçüyü içeriyor: <span class="text-error"> <strong>{errors:number}</strong> adedi hatalı</strong>, </span>, <span class= "text-highlight"><strong>{formattable:number}</strong></span> adedinin biçimlendirilmesi, <strong>{analyzable:number}</strong> adedinin analiz edilmesi gerekli. (<span class="link manual-analyze" >Şimdi analiz edin</span>).`,
        [_.daxFormatterSummaryNoAnalysis]: `Veri setiniz <strong>{count}</strong> adet ölçüyü içeriyor: <span class="text-error"><strong>{errors:number}</strong> adedi hatalı</strong></span> ve <span class="text-highlight"><strong>{formattable:number}</strong> biçimlendirilmesi gereken.</span>`,
        [_.defaultTabName]: "İsimsiz",
        [_.dialogCancel]: "İptal",
        [_.dialogOK]: "Tamam",
        [_.dialogOpen]: "Aç",
        [_.docLimited]: "Kısıtlı",
        [_.docLimitedTooltip]: "Bu belge için tüm özellikler mevcut değildir.",
        [_.doneCtrlTitle]: "Tamamlandı",
        [_.emailAddress]: "E-Posta Adresi",
        [_.emailAddressPlaceholder]: "E-Posta adresinizi giriniz",
        [_.error]: "Hata",
        [_.errorAborted]: "İşlem iptal edildi.",
        [_.errorAnalysisServicesConnectionFailed]: "Sunucu ile Bravo arasında bir bağlantı sorunu ortaya çıktı.",
        [_.errorCheckForUpdates]: "Güncellemeler kontrol edilemiyor - uzak sunucuya erişilemiyor.",
        [_.errorConnectionUnsupported]: "İstenen veri kaynağına bağlantı desteklenmiyor.",
        [_.errorDatasetConnectionUnknown]: "Belirtilmemiş bağlantı.",
        [_.errorDatasetsEmptyListing]: "Kullanılabilir açık rapor yok.",
        [_.errorDatasetsListing]: "Power BI Hizmetinin veri setlerinin listesi alınamadı.",
        [_.errorExportDataFileError]: "Veriler dışa aktarılırken bir sorun oluştu. Lütfen tekrar deneyin.",
        [_.errorManageDateTemplateError]: "DAX şablonu yürütülürken bir istisna oluştu.",
        [_.errorNetworkError]: "İnternet'e bağlı değilsiniz.",
        [_.errorNone]: "Belirtilmemiş hata.",
        [_.errorNotAuthorized]: "Belirtilen kaynağı görüntüleme yetkiniz yok.",
        [_.errorNotConnected]: "Power BI'a bağlı değilsiniz - lütfen devam etmek için oturum açın.",
        [_.errorNotFound]: "Belirtilen kaynağa bağlanılamadı.",
        [_.errorReportConnectionUnknown]: "Geçersiz bağlantı.",
        [_.errorReportConnectionUnsupportedAnalysisServecesCompatibilityMode]: "Power BI Desktop Analysis Services'inin uyumluluk modu PowerBI değil.",
        [_.errorReportConnectionUnsupportedAnalysisServecesConnectionNotFound]: "Power BI Desktop Analysis Services TCP bağlantısı bulunamadı.",
        [_.errorReportConnectionUnsupportedAnalysisServecesProcessNotFound]: "Power BI Desktop Analysis Services işlemi bulunamadı.",
        [_.errorReportConnectionUnsupportedConnectionException]: "Power BI Desktop Analysis Services'e bağlanırken bir istisna oluştu.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionIsEmpty]: "Power BI Desktop Analysis Services herhangi bir veritabanı içermiyor. Power BI Desktop'un Yardımcı Araçları'ndaki Bravo simgesini kullanarak rapora bağlanmayı deneyin.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionUnexpectedCount]: "Power BI Desktop Analysis Services, sıfır veya bir beklerken beklenmeyen sayıda veritabanı (> 1) içeriyor.",
        [_.errorReportConnectionUnsupportedProcessNotYetReady]: "Power BI Desktop açılıyor veya Analysis Services henüz hazır değil.",
        [_.errorReportsEmptyListing]: "Açılmamış rapor yok.",
        [_.errorRetry]: "Yeniden Dene",
        [_.errorSignInMsalExceptionOccurred]: "Oturum açma isteğinde beklenmeyen hata.",
        [_.errorSignInMsalTimeoutExpired]: "İşlem tamamlanmadan önce zaman aşımı süresi sona erdiği için oturum açma isteği iptal edildi.",
        [_.errorTimeout]: "İstek zaman aşımı.",
        [_.errorTitle]: "Hata...",
        [_.errorTOMDatabaseDatabaseNotFound]: "Veritabanı koleksiyonda yok veya kullanıcının erişim için yönetici hakları yok.",
        [_.errorTOMDatabaseUpdateConflictMeasure]: "İstenen güncelleme, hedef kaynağın mevcut durumuyla çakışıyor.",
        [_.errorTOMDatabaseUpdateErrorMeasure]: "Bir veya daha fazla ölçüyü hata içerdiğinden istenen güncelleme başarısız oldu.",
        [_.errorTOMDatabaseUpdateFailed]: "Modelde yapılan yerel değişiklikler veritabanı sunucusuna kaydedilirken veritabanı güncellemesi başarısız oldu.",
        [_.errorTryingToUpdateMeasuresWithErrors]: `Aşağıdaki ölçüleri hata içerdiğinden istenen güncelleme başarısız oldu:<br><strong>{measures}</strong>`,
        [_.errorUnhandled]: "Beklenmeyen hata - lütfen bu hatayı bildirin ve varsa izleme kimliğini sağlayın.",
        [_.errorUnspecified]: "Belirtilmemiş hata.",
        [_.errorUserSettingsSaveError]: "Ayarlar kaydedilemedi.",
        [_.errorVpaxFileImportError]: "VPAX dosyası içe aktarılırken bir hata oluştu.",
        [_.errorVpaxFileExportError]: "VPAX dosyası dışa aktarılırken bir hata oluştu.",
        [_.expandAllCtrlTitle]: "Tümünü genişlet",
        [_.ExportData]: "Verileri Dışa Aktar",
        [_.exportDataCSVCustomDelimiter]: "Özel Alan Ayracı",
        [_.exportDataCSVDelimiter]: "Alan Ayracı",
        [_.exportDataCSVDelimiterComma]: "Virgül",
        [_.exportDataCSVDelimiterDesc]: `Her alanın ayracı olarak kullanılacak karakteri seçin. <em>Otomatik</em>, sistem Kültürünüzün varsayılan karakterini kullanır.`,
        [_.exportDataCSVDelimiterOther]: "Diğer...",
        [_.exportDataCSVDelimiterPlaceholder]: "Karakter",
        [_.exportDataCSVDelimiterSemicolon]: "Noktalı virgül",
        [_.exportDataCSVDelimiterSystem]: "Otomatik",
        [_.exportDataCSVDelimiterTab]: "Sekme",
        [_.exportDataCSVEncoding]: "Dil Kodlaması",
        [_.exportDataCSVEncodingDesc]: "",
        [_.exportDataCSVQuote]: "Dizeleri Çift Tırnak İçine Alın",
        [_.exportDataCSVQuoteDesc]: "Her dizenin çift tırnak içine alındığından emin olun.",
        [_.exportDataExcelCreateExportSummary]: "Dışa Aktarma Özeti",
        [_.exportDataExcelCreateExportSummaryDesc]: "Dışa aktarma dosyasına işlemin özetini içeren ek bir sayfa ekleyin.",
        [_.exportDataExport]: "Seçili Olanı Dışa Aktar",
        [_.exportDataExportAs]: "Farklı Dışa Aktar",
        [_.exportDataExportAsDesc]: "",
        [_.exportDataExporting]: "{table} dışa aktarılıyor...",
        [_.exportDataExportingDone]: "Bitti!",
        [_.exportDataNoColumns]: "Bu tablo, sütun içermediğinden dışa aktarılamaz.",
        [_.exportDataNotQueryable]: "Bu tablo, geçersiz bir ifadeye sahip bir veya daha fazla hesaplanmış sütun veya yeniden hesaplanması gereken sütunlar içerdiğinden dışa aktarılamıyor.",
        [_.exportDataOpenFile]: "Dışa Aktarma Dosyasını Aç",
        [_.exportDataOpenFolder]: "Dışa Aktarma Klasörünü Aç",
        [_.exportDataOptions]: "Dışa Aktarma Seçenekleri",
        [_.exportDataStartExporting]: "Başlatılıyor...",
        [_.exportDataSuccessSceneMessage]: "<strong>{count}/{total} adet tablo</strong> dışarı aktarıldı.",
        [_.exportDataSummary]: "Veri kümeniz dışa aktarılabilen <strong>{count} adet tablo</strong> içeriyor.",
        [_.exportDataTypeCSV]: "CSV (Virgülle ayrılmış değerler)",
        [_.exportDataTypeXLSX]: "Excel Elektronik Tablosu",
        [_.failed]: "Başarısız",
        [_.filterMeasuresWithErrorsCtrlTitle]: "Yalnızca hatalı biçimlendirilmemiş ölçüyü/ölçüleri göster",
        [_.filterUnrefCtrlTitle]: "Yalnızca referanssız sütunları göster",
        [_.formattingMeasures]: "Ölçüler Biçimlendiriliyor...",
        [_.goBackCtrlTitle]: "İptal edin ve geri dönün",
        [_.groupByTableCtrlTitle]: "Tabloya Göre Gruplandır",
        [_.helpConnectVideo]: "Nasıl Bağlanılır",
        [_.helpCtrlTitle]: "Yardım",
        [_.hideUnsupportedCtrlTitle]: "Yalnızca desteklenenler",
        [_.less]: "Daha az",
        [_.license]: "MIT lisansı altında yayınlandı.",
        [_.loading]: "Yükleniyor...",
        [_.ManageDates]: "Tarihleri Yönet",
        [_.manageDatesApplyCtrlTitle]: "Değişiklikleri Uygula",
        [_.manageDatesAuto]: "Otomatik",
        [_.manageDatesAutoScan]: "Otomatik Tarama",
        [_.manageDatesAutoScanActiveRelationships]: "Etkin İlişkiler",
        [_.manageDatesAutoScanDesc]: "Tarihleri içeren tüm sütunları taramak için <em>Tümünü</em> seçin. Kullanılacak sütunları seçmek için <em>Sütunları Seç...</em>'i ayarlayın. <em>Etkin İlişkileri Ayarlayın </em> ve <em>Etkin Olmayan İlişkiler</em> yalnızca ilişkiler içeren sütunları taramak için.",
        [_.manageDatesAutoScanDisabled]: "Devre Dışı",
        [_.manageDatesAutoScanFirstYear]: "İlk Yıl",
        [_.manageDatesAutoScanFirstYearDesc]: "",
        [_.manageDatesAutoScanFull]: "Dolu",
        [_.manageDatesAutoScanInactiveRelationships]: "Etkin Olmayan İlişkiler",
        [_.manageDatesAutoScanLastYear]: "Geçen Yıl",
        [_.manageDatesAutoScanLastYearDesc]: "",
        [_.manageDatesAutoScanSelectedTablesColumns]: "Sütunları Seç...",
        [_.manageDatesBrowserPlaceholder]: "Değiştirilecek öğe yok",
        [_.manageDatesCalendarDesc]: "Bu modele uygulamak için bir takvim şablonu seçin. Bravo gerekli tabloları oluşturacak veya mevcut ilişkileri sağlam tutarken bunları güncelleyecektir.",
        [_.manageDatesCalendarTemplateName]: "Takvim Şablonu",
        [_.manageDatesCalendarTemplateNameDesc]: "Farklı ay sayısına göre takvim için <em>Aylık</em>'ı seçin. 445-454-544-ISO takvimleri için <em>Haftalık</em>'ı ayarlayın. <em>Özel<'i kullanın /em> değişken uzunluktaki esnek takvimler için.",
        [_.manageDatesCreatingTables]: "Model güncelleniyor...",
        [_.manageDatesDatesDesc]: "Modelinizdeki tarihlerin biçimini ve konumunu yapılandırın.",
        [_.manageDatesDatesTableDesc]: "Bu, tarihler için raporlarda kullanılacak tablodur.",
        [_.manageDatesDatesTableName]: "Tarihler Tablosu",
        [_.manageDatesDatesTableReferenceDesc]: "Bu, tarih oluşturmak için kullanılan tüm DAX işlevlerini içeren gizli bir tablodur.",
        [_.manageDatesDatesTableReferenceName]: "Tarih Tanım Tablosu",
        [_.manageDatesHolidaysDesc]: "Modelinize tatiller ekleyin. Bravo gerekli tabloları oluşturacak veya mevcut ilişkileri sağlam tutarken bunları güncelleyecektir.",
        [_.manageDatesHolidaysEnabledDesc]: "Tatil tablosunu modelinize ekleyin.",
        [_.manageDatesHolidaysEnabledName]: "Tatiller",
        [_.manageDatesHolidaysTableDefinitionDesc]: "Bu, tatiller oluşturmak için kullanılan tüm DAX işlevlerini içeren gizli bir tablodur.",
        [_.manageDatesHolidaysTableDefinitionName]: "Tatil Tanım Tablosu",
        [_.manageDatesHolidaysTableDesc]: "Bu, tatiller için raporlarda kullanılacak tablodur.",
        [_.manageDatesHolidaysTableName]: "Tatil Tablosu",
        [_.manageDatesIntervalDesc]: "Modeliniz için bir tarih aralığı seçin.",
        [_.manageDatesISOCountryDesc]: "",
        [_.manageDatesISOCountryName]: "Tatil Günleri Ülkesi",
        [_.manageDatesISOCustomFormatDesc]: "IETF BCP 47 dil etiketini kullanarak bölgesel bir biçim girin. Ör. en-US",
        [_.manageDatesISOCustomFormatName]: "Özel Biçim",
        [_.manageDatesISOFormatDesc]: "Tarihler için bölgesel biçimi seçin.",
        [_.manageDatesISOFormatName]: "Bölgesel Biçim",
        [_.manageDatesISOFormatOther]: "Diğer...",
        [_.manageDatesISOFormatOtherPlaceholder]: "Bölge",
        [_.manageDatesMenuCalendar]: "Takvim",
        [_.manageDatesMenuDates]: "Tarihler",
        [_.manageDatesMenuHolidays]: "Tatiller",
        [_.manageDatesMenuInterval]: "Aralık",
        [_.manageDatesMenuPreviewCode]: "İfade",
        [_.manageDatesMenuPreviewModel]: "Model Değişiklikleri",
        [_.manageDatesMenuPreviewTable]: "Örnek Veri",
        [_.manageDatesMenuPreviewTreeDate]: "Tarihler",
        [_.manageDatesMenuPreviewTreeDateHolidays]: "Tarihler ve Tatiller",
        [_.manageDatesMenuPreviewTreeTimeIntelligence]: "Zaman Formülleri",
        [_.manageDatesMenuTimeIntelligence]: "Zaman Formülleri",
        [_.manageDatesModelCheck]: "Model Kontrolü",
        [_.manageDatesPreview]: "Önizleme",
        [_.manageDatesPreviewCtrlTitle]: "Değişiklikleri Önizleme",
        [_.manageDatesSampleData]: "Örnek Veri",
        [_.manageDatesSampleDataError]: "Örnek veri oluşturulamıyor.",
        [_.manageDatesStatusCompatible]: `<div class="hero">Bu model zaten Bravo ile uyumlu bazı <b>tarih tabloları</b> içeriyor.</div>Burada bir şeyi değiştirirseniz, bu tablolar güncellenir ve bunların özellikleri ilişkiler bozulmadan kalacaktır.`,
        [_.manageDatesStatusError]: `<div class="hero">Mevcut ayarlar uygulanamıyor.</div>{hata}`,
        [_.manageDatesStatusInCompatible]: `<div class="hero">Bu model, Bravo ile <b>uyumlu olmayan</b> bazı tarih tabloları içeriyor.</div>Burada herhangi bir değişiklik yapmak için, bir bu araç tarafından oluşturulacak bir veya daha fazla tablo için farklı bir ad seçmelisiniz.<br><br><b>Tarihleri</b> ve <b>Tatilleri</b> kontrol edin.`,
        [_.manageDatesStatusNotAvailable]: `<div class="hero">Bu model artık mevcut değil.</div> Uygulamayı yeniden başlatmayı deneyin.`,
        [_.manageDatesStatusOk]: `<div class="hero">Bu model <b>Tarihleri Yönet özelliğiyle</b> uyumludur.</div>Ölçüleri veya raporları bozma konusunda endişelenmeden yeni tarih tabloları oluşturabilirsiniz. `,
        [_.manageDatesSuccessSceneMessage]: "Tebrikler, modeliniz başarıyla güncellendi.",
        [_.manageDatesTemplateFirstDayOfWeek]: "Haftanın İlk Günü",
        [_.manageDatesTemplateFirstDayOfWeekDesc]: "Haftalık ISO için, değeri <em>Pazartesi</em> olarak belirleyin.",
        [_.manageDatesTemplateFirstFiscalMonth]: "Yılın İlk Ayı",
        [_.manageDatesTemplateFirstFiscalMonthDesc]: "Haftalık ISO için, değeri <em>Ocak</em> olarak belirleyin.",
        [_.manageDatesTemplateMonthsInYear]: "Yıl İçindeki Toplam Ay Sayısı",
        [_.manageDatesTemplateMonthsInYearDesc]: "",
        [_.manageDatesTemplateNameConfig01]: "Standart",
        [_.manageDatesTemplateNameConfig02]: "Aylık",
        [_.manageDatesTemplateNameConfig03]: "Özel",
        [_.manageDatesTemplateNameConfig04]: "Haftalık",
        [_.manageDatesTemplateQuarterWeekType]: "Haftalık Sistem",
        [_.manageDatesTemplateQuarterWeekTypeDesc]: "",
        [_.manageDatesTemplateTypeStartFiscalYear]: "Mali Yılın İlk Günü",
        [_.manageDatesTemplateTypeStartFiscalYearDesc]: "Haftalık ISO için, değeri <em>Yılın Sonu</em>'nu olarak belirleyin.",
        [_.manageDatesTemplateTypeStartFiscalYearFirst]: "Yılın Başı",
        [_.manageDatesTemplateTypeStartFiscalYearLast]: "Yılın Sonu",
        [_.manageDatesTemplateWeeklyType]: "Yılın Son Hafta İçi Günü",
        [_.manageDatesTemplateWeeklyTypeDesc]: "Haftanız Pazar gününden başlıyorsa, haftanın son günü Cumartesi olur. <em>Yılın Sonu</em>'nu seçerseniz mali yıl, geçen ayın son Cumartesi günü sona erer. Aksi takdirde, mali yıl, geçen ayın son gününe en yakın Cumartesi günü sona erer - bu gelecek yıl olabilir. Haftalık ISO için, değeri <em>Yıl Sonuna En Yakın</em>'ı olarak belirleyin.",
        [_.manageDatesTemplateWeeklyTypeLast]: "Yılın Sonu",
        [_.manageDatesTemplateWeeklyTypeNearest]: "Yıl Sonuna En Yakın",
        [_.manageDatesTimeIntelligenceDesc]: "Modelinizde bulunan standart Zaman Formüllerine ait (Time Intelligence) DAX işlevlerini oluşturun.",
        [_.manageDatesTimeIntelligenceEnabledDesc]: "",
        [_.manageDatesTimeIntelligenceEnabledName]: "Zaman Formülleri İşlevleri",
        [_.manageDatesTimeIntelligenceTargetMeasuresAll]: "Tüm Ölçüler",
        [_.manageDatesTimeIntelligenceTargetMeasuresChoose]: "Ölçüleri Seç...",
        [_.manageDatesTimeIntelligenceTargetMeasuresDesc]: "Zaman Formülleri işlevlerini oluşturmak için kullanılan ölçüyü seçin.",
        [_.manageDatesTimeIntelligenceTargetMeasuresName]: "Hedef Ölçüler",
        [_.manageDatesYearRange]: "Tarih Aralığı",
        [_.manageDatesYearRangeDesc]: "Modelin tarih aralığının nasıl belirleneceğini seçin. Otomatik taramayı kullanmak için <em>Yılın Başı</em> ve/veya <em>Yılın Sonu</em> öğesini boş bırakın.",
        [_.menuCtrlTitle]: "Menüyü Daralt/Genişlet",
        [_.minimizeCtrlTitle]: "Küçült",
        [_.modelLanguage]: "Model dili ({kültür})",
        [_.more]: "Daha Fazla",
        [_.notificationCtrlTitle]: "Bildirimler",
        [_.notificationsTitle]: "{count} adet bildirim",
        [_.openSourcePayoff]: "{appName}, SQLBI ve Github topluluğu tarafından geliştirilen ve yönetilen açık kaynaklı bir araçtır. Bize katılın",
        [_.openWithDaxFormatterCtrlTitle]: "DAX Formatter ile çevrimiçi biçimlendir",
        [_.optionAccount]: "Power BI Hesabı",
        [_.optionAccountDescription]: "Hesabı Power BI çevrimiçi veri setlerine erişmek için ayarlayın.",
        [_.optionDiagnostic]: "Loglama Düzeyi",
        [_.optionDiagnosticDescription]: "Bir tanılama bölmesinde hataları ve günlükleri göster. Yalnızca birkaç iletiyi günlüğe kaydetmek için <em>Temel</em>'i seçin. <em>Ayrıntılı</em> tüm iletileri günlüğe kaydeder.",
        [_.optionDiagnosticLevelBasic]: "Temel",
        [_.optionDiagnosticLevelNone]: "Yok",
        [_.optionDiagnosticLevelVerbose]: "Ayrıntılı",
        [_.optionDiagnosticMore]: "Bir uygulama sorununu bildirmek için lütfen bu işlevi kullanın",
        [_.optionFormattingBreaks]: "Satır Ayracı",
        [_.optionFormattingBreaksAuto]: "Otomatik",
        [_.optionFormattingBreaksDescription]: "Ölçü adının ve ifadenin nasıl ayrılacağını seçin. Modelde kullanılan stili otomatik olarak belirlemek için <em>Otomatik</em> öğesini ayarlayın.",
        [_.optionFormattingBreaksInitial]: "Satır Sonu",
        [_.optionFormattingBreaksNone]: "Aynı Satır",
        [_.optionFormattingLines]: "Satırlar",
        [_.optionFormattingLinesDescription]: "Satırları kısa veya uzun tutmayı seçin.",
        [_.optionFormattingLinesValueLong]: "Uzun satırlar",
        [_.optionFormattingLinesValueShort]: "Kısa satırlar",
        [_.optionFormattingPreview]: "Otomatik Önizleme",
        [_.optionFormattingPreviewDescription]: "Önizlemeyi oluşturmak için ölçüleri otomatik olarak DAX Formatter'a gönderin.",
        [_.optionFormattingSeparators]: "Ayırıcılar",
        [_.optionFormattingSeparatorsDescription]: "Sayılar ve listeler için ayırıcıları seçin.",
        [_.optionFormattingSeparatorsValueAuto]: "Otomatik",
        [_.optionFormattingSeparatorsValueEU]: "A; B; C; 1234,00",
        [_.optionFormattingSeparatorsValueUS]: "A, B, C, 1234.00",
        [_.optionFormattingSpaces]: "Boşluk",
        [_.optionFormattingSpacesDescription]: "İşlev adlarından sonraki boşlukları yönetin.",
        [_.optionFormattingSpacesValueBestPractice]: "En iyi yöntemler",
        [_.optionFormattingSpacesValueFalse]: "Boşluk yok - EĞER( ",
        [_.optionFormattingSpacesValueTrue]: "Boşluk - EĞER ( ",
        [_.optionLanguage]: "Dil",
        [_.optionLanguageDescription]: "Bravo dilini seçin. Yeniden başlatma gerekli.",
        [_.optionLanguageResetConfirm]: "Yeni dili uygulamak için Bravo'yu yeniden başlatmak istiyor musunuz?",
        [_.optionsDialogAboutMenu]: "Hakkında",
        [_.optionsDialogFormattingMenu]: "Biçimlendirme",
        [_.optionsDialogGeneralMenu]: "Genel",
        [_.optionsDialogTelemetryMenu]: "Telemetri",
        [_.optionsDialogTitle]: "Seçenekler",
        [_.optionTelemetry]: "Telemetri",
        [_.optionTelemetryDescription]: "Anonim kullanım verilerini SQLBI'ye gönder.",
        [_.optionTelemetryMore]: "Bravo'yu nasıl kullandığınızı ve nasıl iyileştireceğimizi anlamamıza yardımcı olun. Hiçbir kişisel bilgi toplanmaz. Bu seçenek devre dışı bırakılırsa geliştirme ekibinin işlenmemiş hataları toplayamayacağını, ek bilgi veya destek sağlayamacağını lütfen unutmayın.",
        [_.optionTheme]: "Tema",
        [_.optionThemeDescription]: "Bravo'nun temasını ayarlayın. İşletim sisteminin seçmesine izin vermek için <em>Sistem</em>'i seçin.",
        [_.optionThemeValueAuto]: "Sistem",
        [_.optionThemeValueDark]: "Koyu",
        [_.optionThemeValueLight]: "Açık",
        [_.otherColumnsRowName]: "Daha küçük sütunlar...",
        [_.paste]: "Yapıştır",
        [_.powerBiObserving]: "Power BI Desktop'ta dosya açılması bekleniyor...",
        [_.powerBiObservingCancel]: "İptal",
        [_.powerBiSigninDescription]: "Bravo'yu çevrimiçi veri setlerinize bağlamak için Power BI Hizmetinde oturum açın.",
        [_.powerBiSigninTitle]: "Power BI",
        [_.quickActionAttachPBITitle]: "Power BI Desktop'a Ekle",
        [_.quickActionConnectPBITitle]: "Power BI Hizmetine Bağlan",
        [_.quickActionOpenVPXTitle]: "Bir Vertipaq Analyzer dosyası açın",
        [_.refreshCtrlTitle]: "Yenile",
        [_.refreshPreviewCtrlTitle]: "Önizlemeyi yenile",
        [_.saveVpaxCtrlTile]: "VPAX olarak kaydet",
        [_.savingVpax]: "VPAX oluşturuluyor...",
        [_.sceneUnsupportedReason]: "Bu özellik, bu veri kaynağı için mevcut değil.",
        [_.sceneUnsupportedReasonManageDatesAutoDateTimeEnabled]: `Otomatik tarih/saat seçeneğinin etkin olduğu modeller desteklenmez.<br><span class="link" href="https://www.sqlbi.com/tv/disabling-auto-date- time-in-power-bi/">Power BI'da (video) otomatik tarih-saati devre dışı bırakma</span>`,
        [_.sceneUnsupportedReasonManageDatesEmptyTableCollection]: "Bu özellik yalnızca en az bir tablosu olan veritabanları tarafından desteklenir.",
        [_.sceneUnsupportedReasonManageDatesPBIDesktopModelOnly]: "Bu özellik yalnızca Power BI Desktop modundaki modeller tarafından desteklenir.",
        [_.sceneUnsupportedReasonMetadataOnly]: "Veritabanı, yalnızca meta verilerini içeren bir VPAX dosyasından oluşturulmuş.",
        [_.sceneUnsupportedReasonReadOnly]: "Bu veritabanına bağlantı salt okunur.",
        [_.sceneUnsupportedReasonXmlaEndpointNotSupported]: "XMLA uç noktası bu veri seti için desteklenmiyor.",
        [_.sceneUnsupportedTitle]: "Desteklenmiyor",
        [_.searchColumnPlaceholder]: "Arama Sütunu",
        [_.searchDatasetPlaceholder]: "Veri Seti Ara",
        [_.searchEntityPlaceholder]: "Tablo/Sütun Ara",
        [_.searchMeasurePlaceholder]: "Ölçü Ara",
        [_.searchPlaceholder]: "Ara",
        [_.searchTablePlaceholder]: "Tablo Ara",
        [_.settingsCtrlTitle]: "Seçenekler",
        [_.sheetOrphan]: "Mevcut değil",
        [_.sheetOrphanPBIXTooltip]: "Rapor Power BI Desktop'ta kapatıldı. Yazma işlemine izin verilmiyor.",
        [_.sheetOrphanTooltip]: "Bu model artık mevcut değil. Herhangi bir yazma işlemine izin verilmiyor.",
        [_.showDiagnosticPane]: "Ayrıntıları Göster",
        [_.sideCtrlTitle]: "Yan yana görünümü değiştir",
        [_.signedInCtrlTitle]: "{name} olarak oturum açıldı",
        [_.signIn]: "Oturum Aç",
        [_.signInCtrlTitle]: "Oturum Aç",
        [_.signOut]: "Oturumu Kapat",
        [_.sqlbiPayoff]: "Bravo bir SQLBI projesidir.",
        [_.syncCtrlTitle]: "Senkronize et",
        [_.tableColCardinality]: "Kardinalite",
        [_.tableColCardinalityTooltip]: "Benzersiz öğelerin sayısı",
        [_.tableColColumn]: "Sütun",
        [_.tableColColumns]: "Sütunlar",
        [_.tableColMeasure]: "Ölç",
        [_.tableColPath]: "Tablo \\ Sütun",
        [_.tableColRows]: "Satırlar",
        [_.tableColSize]: "Boyut",
        [_.tableColTable]: "Tablo",
        [_.tableColWeight]: "Ağırlık",
        [_.tableSelectedCount]: "{count} Seçildi",
        [_.tableValidationInvalid]: "Bu ad kullanılamaz.",
        [_.tableValidationValid]: "Bu ad geçerli.",
        [_.themeCtrlTitle]: "Temayı Değiştir",
        [_.toggleTree]: "Kırılımı Aç/Kapat",
        [_.traceId]: "İzleme Kimliği",
        [_.unknownMessage]: "Geçersiz Mesaj Alındı",
        [_.updateChannelBeta]: "Beta",
        [_.updateChannelCanary]: "Canary",
        [_.updateChannelDev]: "Dev",
        [_.updateChannelStable]: "Stabil",
        [_.updateMessage]: "Bravo'nun yeni bir sürümü mevcut: {version}",
        [_.validating]: "Doğrulanıyor...",
        [_.version]: "Sürüm",
        [_.welcomeHelpText]: "Bravo'yu nasıl kullanacağınızı öğrenmek için aşağıdaki videoları izleyin:",
        [_.welcomeHelpTitle]: "Bravo nasıl kullanılır?",
        [_.welcomeText]: "Bravo, modellerinizi analiz etmek, ölçüleri biçimlendirmek, tarih tabloları oluşturmak ve verileri dışa aktarmak için kullanabileceğiniz kullanışlı bir Power BI aracıdır.",
        [_.whitespacesTitle]: "Boşluklar",
        [_.wrappingTitle]: "Otomatik sözcük kaydırma",
    }
}
export default locale;
