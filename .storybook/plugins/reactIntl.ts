const locales = ['en', 'sv'];

const messages = locales.reduce((acc, lang) => ({
  ...acc,
  [lang]: require(`../../locale/compiled/${lang}.json`),
}), {});

export const reactIntl = {
  defaultLocale: 'en',
  locales,
  messages
};
