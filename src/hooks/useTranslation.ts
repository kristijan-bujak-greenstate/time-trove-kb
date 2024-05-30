import { useLanguageContext } from '../context/LanguageContext';
import deTranslations from '../internationalization/de.json';
import enTranslations from '../internationalization/en.json';

type NestedTranslationKeys<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedTranslationKeys<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

type Translations = typeof enTranslations & typeof deTranslations;

export type TranslationKey = NestedTranslationKeys<Translations>;

const translations: { [key: string]: Translations } = {
  en: enTranslations,
  de: deTranslations,
};

const getNestedTranslation = (obj: Translations, key: TranslationKey): string => {
  const result = key.split('.').reduce<string | Translations | undefined>((acc, part) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return acc && typeof acc === 'object' ? (acc as Record<string, any>)[part] : undefined;
  }, obj);

  return typeof result === 'string' ? result : obj['translationMissing'].toString();
};

export const useTranslation = () => {
  const { currentLanguage } = useLanguageContext();

  const languageCode = currentLanguage.value.toLowerCase();

  const t = (key: TranslationKey): string => getNestedTranslation(translations[languageCode], key);

  return { t };
};
