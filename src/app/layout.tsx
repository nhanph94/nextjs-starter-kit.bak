import { Metadata } from 'next';
import { ReactNode } from 'react';

import { ThemeRegistry } from 'src/components';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>{children}</body>
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
