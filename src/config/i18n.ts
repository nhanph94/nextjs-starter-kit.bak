const locales = process.env.LOCALES
  ? process.env.LOCALES.split(',')
  : ['en-US'];

const defaultLocale = locales.includes(process.env.DEFAULT_LOCALE + '')
  ? process.env.DEFAULT_LOCALE + ''
  : locales[0];

export const i18nConfig = {
  locales,
  defaultLocale,
};
