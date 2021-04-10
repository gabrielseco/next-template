import { i18nConfiguration } from '@rogal/react-translate';

const getLanguage = () => {
  if (process.browser) {
    return localStorage.getItem('language') || 'en';
  }

  return 'en';
};

export const i18nConfig = {
  languages: ['en', 'es'],
  translations: {
    en: {},
    es: {}
  },
  fallbackLng: 'en',
  language: getLanguage()
};

export const i18n = i18nConfiguration(i18nConfig);
