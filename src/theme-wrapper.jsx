import React from 'react';
import { ThemeProvider } from 'styled-components';

export default ({ children }) => {
  const theme = {};
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
