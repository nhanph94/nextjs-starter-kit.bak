/* eslint-disable @typescript-eslint/no-var-requires */
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/libs/i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl({
  ...nextConfig,
});
