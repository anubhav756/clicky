import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import styles from './styles';

// pages
import App from '../../pages/App';

function Basic({ match: { path } }) {
  return (
    <div className="container valign-wrapper" style={styles.container}>
      <Route exact path={`${path}`} component={App} />
    </div>
  );
}

Basic.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Basic;
