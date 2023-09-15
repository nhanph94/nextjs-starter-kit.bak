import createMiddleware from 'next-intl/middleware';

import { i18nConfig } from 'src/config';

export default createMiddleware(i18nConfig);

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
