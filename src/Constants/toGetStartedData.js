const jobTitleOptions = [
    { value: 'softwareEngineer', label: 'Software Engineer' },
    { value: 'webDeveloper', label: 'Web Developer' },
    { value: 'projectManager', label: 'Project Manager' },
    { value: 'graphicDesigner', label: 'Graphic Designer' },
    { value: 'dataAnalyst', label: 'Data Analyst' },
    { value: 'marketingSpecialist', label: 'Marketing Specialist' },
    { value: 'productManager', label: 'Product Manager' },
    { value: 'customerSupportAgent', label: 'Customer Support Agent' },
    { value: 'accountant', label: 'Accountant' },
    { value: 'humanResourcesManager', label: 'Human Resources Manager' },
    { value: 'other', label: 'Other' },
  ];

const timeZones =  [
  { label: "(GMT -12:00) Eniwetok, Kwajalein", value: "-12:00"},
  { label: "(GMT -11:00) Midway Island, Samoa", value: "-11:00"},
  { label: "(GMT -10:00) Hawaii", value: "-10:00"},
  { label: "(GMT -9:30) Taiohae", value: "-09:50"},
  { label: "(GMT -9:00) Alaska", value: "-09:00"},
  { label: "(GMT -8:00) Pacific Time (US &amp; Canada)", value: "-08:00"},
  { label: "(GMT -7:00) Mountain Time (US &amp; Canada)", value: "-07:00"},
  { label: "(GMT -6:00) Central Time (US &amp; Canada), Mexico City", value: "-06:00"},
  { label: "(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima", value: "-05:00"},
  { label: "(GMT -4:30) Caracas", value: "-04:50"},
  { label: "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz", value: "-04:00"},
  { label: "(GMT -3:30) Newfoundland", value: "-03:50"},
  { label: "(GMT -3:00) Brazil, Buenos Aires, Georgetown", value: "-03:00"},
  { label: "(GMT -2:00) Mid-Atlantic", value: "-02:00"},
  { label: "(GMT -1:00) Azores, Cape Verde Islands", value: "-01:00",},
  { label: "(GMT) Western Europe Time, London, Lisbon, Casablanca", value: "+00:00"},
  { label: "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris", value: "+01:00"},
  { label: "(GMT +2:00) Kaliningrad, South Africa", value: "+02:00"},
  { label: "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg", value: "+03:00"},
  { label: "(GMT +3:30) Tehran", value: "+03:50"},
  { label: "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi", value: "+04:00"},
  { label: "(GMT +4:30) Kabul", value: "+04:50"},
  { label: "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent", value: "+05:00"},
  { label: "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi", value: "+05:50"},
  { label: "(GMT +5:45) Kathmandu, Pokhara", value: "+05:75"},
  { label: "(GMT +6:00) Almaty, Dhaka, Colombo", value: "+06:00"},
  { label: "(GMT +6:30) Yangon, Mandalay", value: "+06:50"},
  { label: "(GMT +7:00) Bangkok, Hanoi, Jakarta", value: "+07:00"},
  { label: "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong", value: "+08:00"},
  { label: "(GMT +8:45) Eucla", value: "+08:75"},
  { label: "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk", value: "+09:00"},
  { label: "(GMT +9:30) Adelaide, Darwin", value: "+09:50"},
  { label: "(GMT +10:00) Eastern Australia, Guam, Vladivostok", value: "+10:00"},
  { label: "(GMT +10:30) Lord Howe Island", value: "+10:50"},
  { label: "(GMT +11:00) Magadan, Solomon Islands, New Caledonia", value: "+11:00"},
  { label: "(GMT +11:30) Norfolk Island", value: "+11:50"},
  { label: "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka", value: "+12:00"},
  { label: "(GMT +12:45) Chatham Islands", value: "+12:75"},
  { label: "(GMT +13:00) Apia, Nukualofa", value: "+13:00"},
  { label: "(GMT +14:00) Line Islands, Tokelau", value: "+14:00"}
]

const languages = [
    { value: 'af', label: 'Afrikaans' },
    { value: 'sq', label: 'Albanian - shqip' },
    { value: 'am', label: 'Amharic - አማርኛ' },
    { value: 'ar', label: 'Arabic - العربية' },
    { value: 'an', label: 'Aragonese - aragonés' },
    { value: 'hy', label: 'Armenian - հայերեն' },
    { value: 'ast', label: 'Asturian - asturianu' },
    { value: 'az', label: 'Azerbaijani - azərbaycan dili' },
    { value: 'eu', label: 'Basque - euskara' },
    { value: 'be', label: 'Belarusian - беларуская' },
    { value: 'bn', label: 'Bengali - বাংলা' },
    { value: 'bs', label: 'Bosnian - bosanski' },
    { value: 'br', label: 'Breton - brezhoneg' },
    { value: 'bg', label: 'Bulgarian - български' },
    { value: 'ca', label: 'Catalan - català' },
    { value: 'ckb', label: 'Central Kurdish - کوردی (دەستنوسی عەرەبی)' },
    { value: 'zh', label: 'Chinese - 中文' },
    { value: 'zh-HK', label: 'Chinese (Hong Kong) - 中文（香港）' },
    { value: 'zh-CN', label: 'Chinese (Simplified) - 中文（简体）' },
    { value: 'zh-TW', label: 'Chinese (Traditional) - 中文（繁體）' },
    { value: 'co', label: 'Corsican' },
    { value: 'hr', label: 'Croatian - hrvatski' },
    { value: 'cs', label: 'Czech - čeština' },
    { value: 'da', label: 'Danish - dansk' },
    { value: 'nl', label: 'Dutch - Nederlands' },
    { value: 'en', label: 'English' },
    { value: 'en-AU', label: 'English (Australia)' },
    { value: 'en-CA', label: 'English (Canada)' },
    { value: 'en-IN', label: 'English (India)' },
    { value: 'en-NZ', label: 'English (New Zealand)' },
    { value: 'en-ZA', label: 'English (South Africa)' },
    { value: 'en-GB', label: 'English (United Kingdom)' },
    { value: 'en-US', label: 'English (United States)' },
    { value: 'eo', label: 'Esperanto - esperanto' },
    { value: 'et', label: 'Estonian - eesti' },
    { value: 'fo', label: 'Faroese - føroyskt' },
    { value: 'fil', label: 'Filipino' },
    { value: 'fi', label: 'Finnish - suomi' },
    { value: 'fr', label: 'French - français' },
    { value: 'fr-CA', label: 'French (Canada) - français (Canada)' },
    { value: 'fr-FR', label: 'French (France) - français (France)' },
    { value: 'fr-CH', label: 'French (Switzerland) - français (Suisse)' },
    { value: 'gl', label: 'Galician - galego' },
    { value: 'ka', label: 'Georgian - ქართული' },
    { value: 'de', label: 'German - Deutsch' },
    { value: 'de-AT', label: 'German (Austria) - Deutsch (Österreich)' },
    { value: 'de-DE', label: 'German (Germany) - Deutsch (Deutschland)' },
    { value: 'de-LI', label: 'German (Liechtenstein) - Deutsch (Liechtenstein)' },
    { value: 'de-CH', label: 'German (Switzerland) - Deutsch (Schweiz)' },
    { value: 'el', label: 'Greek - Ελληνικά' },
    { value: 'gn', label: 'Guarani' },
    { value: 'gu', label: 'Gujarati - ગુજરાતી'},
]

const notificationFrequencies = [
  { value: 'realTime', label: 'Real-time' },
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'custom', label: 'Custom' },
]

const securityQuestions = []

const termsAndConditions = [
  {
    id: '1',
    sectionName: "1. Acceptance of Terms",
    description:
      "By accessing or using TaskifyZen, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not use the service."
  },
  {
    id: '2',
    sectionName: "2. User Accounts",
    description:
      "You may be required to create an account to use TaskifyZen. You are responsible for maintaining the confidentiality of your account information."
  },
  {
    id: '3',
    sectionName: "3. Use of the Service",
    description:
      "You may use TaskifyZen for personal or business purposes, subject to compliance with these terms. You are responsible for all content and data you upload or create using the service."
  },
  {
    id: '4',
    sectionName: "4. Privacy and Data Protection",
    description:
      "Our Privacy Policy governs the collection, use, and sharing of your personal information. By using the service, you consent to our Privacy Policy."
  },
  {
    id: '5',
    sectionName: "5. Intellectual Property",
    description:
      "TaskifyZen and its content are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or modify any part of the service without our prior written consent."
  },
  {
    id: '6',
    sectionName: "6. Termination",
    description:
      "We reserve the right to terminate or suspend your account and access to the service at our discretion, without notice, if you violate these terms."
  },
  {
    id: '7',
    sectionName: "7. Limitation of Liability",
    description:
      "We are not liable for any damages, losses, or claims arising out of your use of TaskifyZen. We do not guarantee the accuracy, completeness, or reliability of the information provided through the service."
  },
  {
    id: '8',
    sectionName: "8. Changes to Terms",
    description:
      "We may modify these Terms and Conditions at any time. It is your responsibility to review these terms periodically for changes."
  },
  {
    id: '9',
    sectionName: "9. Governing Law",
    description:
      "These Terms and Conditions are governed by the laws of the Jurisdiction, and any disputes will be resolved in accordance with those laws."
  },
  {
    id: '10',
    sectionName: "10. Contact Information",
    description:
      "If you have any questions or concerns about these terms, please contact us at taskifyzen_helpcenter@gmail.com"
  }
];

  export {
    jobTitleOptions,
    timeZones,
    notificationFrequencies,
    languages,
    termsAndConditions,
    securityQuestions,
  };
  