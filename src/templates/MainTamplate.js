import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const MainTamplate = ({ children }) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
);

MainTamplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTamplate;
