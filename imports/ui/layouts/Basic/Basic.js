import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

function Basic({ content }) {
  return (
    <div className="container valign-wrapper" style={styles.container}>
      {content}
    </div>
  );
}

Basic.propTypes = {
  content: PropTypes.element.isRequired,
};

export default Basic;
