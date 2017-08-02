import React from 'react';
import PropTypes from 'prop-types';

function Basic({ content }) {
  return (
    <div>
      {content}
    </div>
  );
}

Basic.propTypes = {
  content: PropTypes.element.isRequired,
};

export default Basic;
