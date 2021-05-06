import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import {datadogLogs} from '@datadog/browser-logs';
import {defaultInterpolation} from '@shelf/i18n/lib/helpers';

/**
 * Uncomment this line with proper resource path
 * import {resources} from '@shelf/i18n/lib/bundles/xxx-resource';
 */

const resources = {}; // Remove after uncomment line above

const env = process.env.ENVIRONMENT;
const i18next = i18n.createInstance();
i18next.init({
  fallbackLng: 'en',
  lng: 'en',
  resources,
  interpolation: defaultInterpolation,
  parseMissingKeyHandler(key: string) {
    const message = `MISSING TRANSLATION for key: "${key}"`;
    datadogLogs.logger.warn(message, {key});

    return env !== 'prod' ? `⛔️ ${key}` : '';
  }
});

i18next.use(initReactI18next);

export default i18next;
