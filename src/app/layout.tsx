import { ReactNode } from 'react';

import { ThemeRegistry } from 'src/components';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'HKPA POSTCOVID',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>{children}</body>
      </ThemeRegistry>
    </html>
  );
};

export default RootLayout;
