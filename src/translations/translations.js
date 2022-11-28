import de from './dictionaries/de';
import en from './dictionaries/en';
import es from './dictionaries/es';

export const SupportedLocalesEnum = {
    en: 'en',
    de: 'de',
    es: 'es',
};

export const dictionaries = {
    de,
    en,
    es,
};

export default function getTranslation(locale, translationKey) {
    if (!SupportedLocalesEnum[locale]) {
        console.error(`Grover Widget: Unsupported locale: ${locale}`);
        return translationKey;
    }

    const translation = dictionaries[locale][translationKey];

    if (!translation) {
        console.error(
            `Grover Widget: Unknown translation key: ${translationKey}`
        );

        return translationKey;
    }

    return translation;
}
