import { createTheme } from '@mui/material/styles';

import { LinkBehaviour } from 'src/libs/components';

export const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
        underline: 'none',
      },
    },
  },
});
