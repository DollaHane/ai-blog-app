'use client';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { theme } from './theme';


type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
      <ThemeProvider theme={theme as Theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
  );
}

