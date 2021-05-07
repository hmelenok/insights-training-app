import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import {datadogLogs} from '@datadog/browser-logs';

const resources = {};

const env = process.env.ENVIRONMENT;
const i18next = i18n.createInstance();
i18next.init({
  fallbackLng: 'en',
  lng: 'en',
  resources,
  parseMissingKeyHandler(key: string) {
    const message = `MISSING TRANSLATION for key: "${key}"`;
    datadogLogs.logger.warn(message, {key});

    return env !== 'prod' ? `⛔️ ${key}` : '';
  },
});

i18next.use(initReactI18next);

export default i18next;
