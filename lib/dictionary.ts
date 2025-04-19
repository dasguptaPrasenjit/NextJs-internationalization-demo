import type { Locale } from './i18n-config';

const dictionaries = {
  'en-US': () => import('./dictionaries/en.json').then((module) => module.default),
  'de-DE': () => import('./dictionaries/de.json').then((module) => module.default),
  'fr-FR': () => import('./dictionaries/fr.json').then((module) => module.default),
  'it-IT': () => import('./dictionaries/it.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();