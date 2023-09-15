'use client';

import { Box, Button } from '@mui/material';
import { usePathname, useRouter } from 'next-intl/client';
import { useTransition } from 'react';
import { i18nConfig } from 'src/config';

const LangSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const handleChange = (locale: string) => {
    startTransition(() => {
      router.push(pathname, { locale });
    });
  };

  return (
    <Box display="flex" gap={2}>
      {i18nConfig.locales.map((locale) => (
        <Button
          key={locale}
          variant="contained"
          color="primary"
          onClick={() => handleChange(locale)}
        >
          {locale}
        </Button>
      ))}
    </Box>
  );
};

export default LangSwitcher;
