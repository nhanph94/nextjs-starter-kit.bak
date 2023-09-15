'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';

import EmotionCache from 'src/libs/components/ThemeRegistry/EmotionCache';

interface ThemeRegistryProps {
  children: ReactNode;
}

const ThemeRegistry = ({ children }: ThemeRegistryProps) => {
  return (
    <EmotionCache options={{ key: 'hkpa' }}>
      <ThemeProvider theme={{}}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </EmotionCache>
  );
};

export default ThemeRegistry;
