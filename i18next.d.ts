import 'i18next';
import en from './public/locales/en.json';
import uk from './public/locales/uk.json';

declare module 'i18next' {
  interface Resources {
    defaultNS: 'en';
    en: typeof en;
    uk: typeof uk;
  }
}
