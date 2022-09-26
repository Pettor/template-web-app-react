const locales = ['en'];

const messages = locales.reduce((acc, lang) => ({
  ...acc,
  [lang]: require(`../locale/${lang}.json`),
}), {});

const formats = {}; // optional, if you have any formats

export const reactIntl = {
  defaultLocale: 'en',
  locales,
  messages,
  formats,
};
