import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

const mapStateToProps = state => ({});

const ThemeWrapper = ({ children }) => {
  const theme = {};
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default connect(
  mapStateToProps,
  {}
)(ThemeWrapper);
