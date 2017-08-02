import React from 'react';
import PropTypes from 'prop-types';

function Basic({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

Basic.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Basic;
