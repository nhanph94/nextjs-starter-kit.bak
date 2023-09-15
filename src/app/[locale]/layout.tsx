import { Box, Container } from '@mui/material';
import { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import { LangSwitcher, ThemeRegistry } from 'src/libs/components';

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

const RootLayout = ({ children, params }: RootLayoutProps) => {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <ThemeRegistry>
        <body>
          <Box component="main" paddingY={4}>
            <Container maxWidth="xl" style={{ margin: '0 auto' }}>
              <LangSwitcher />
            </Container>

            <Box paddingY={2}>{children}</Box>
          </Box>
        </body>
      </ThemeRegistry>
    </html>
  );
};

/**
 * Layout metadata template
 * @returns {Promise<Metadata>}
 */
export const generateMetadata = async (): Promise<Metadata> => {
  const metadata: Metadata = {
    title: {
      template: '%s | HKPA POSTCOVID',
      default: 'HKPA POSTCOVID',
    },
  };

  return metadata;
};

export default RootLayout;
