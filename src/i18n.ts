import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export const LANGUAGES = ['en'];
export const DEFAULT_LANGUAGE = 'en';

i18n
	.use(HttpBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		debug: false,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
