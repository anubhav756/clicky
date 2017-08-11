import React from 'react';
import PropTypes from 'prop-types';
import { ALL_COLORS } from '../../../api/colors/colors';
import styles from './styles';

function ClickyButton({ colorName, clicks, handleClick, ...otherProps }) {
  return (
    <div {...otherProps}>
      <button
        onClick={() => handleClick(colorName)}
        className={`waves-effect waves-light btn z-depth-4 valign-wrapper ${colorName}`}
        style={styles.button}
      >
        {clicks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </button>
    </div>
  );
}

ClickyButton.propTypes = {
  colorName: PropTypes.oneOf(ALL_COLORS).isRequired,
  clicks: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ClickyButton;
