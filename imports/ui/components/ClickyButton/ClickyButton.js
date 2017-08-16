import React from 'react';
import PropTypes from 'prop-types';
import { ALL_COLORS } from '../../../api/colors/colors';
import styles from './styles';

function ClickyButton({ colorName, clicks, handleClick, ...otherProps }) {
  return (
    <div {...otherProps}>
      <button
        className={`waves-effect btn-large z-depth-5 ${colorName}`}
        onClick={() => handleClick(colorName)}
        style={styles.button}
      >
        <div>{clicks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
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
