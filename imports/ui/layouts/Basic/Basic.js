import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function Basic({ content }) {
  return (
    <MuiThemeProvider>
      {content}
    </MuiThemeProvider>
  );
}

Basic.propTypes = {
  content: PropTypes.element.isRequired,
};

export default Basic;
