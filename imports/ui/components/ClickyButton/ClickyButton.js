import React from 'react';
import PropTypes from 'prop-types';
import { ALL_TEAMS } from '../../../api/teams/teams';
import styles from './styles';

function ClickyButton({ name, clicks, handleClick, ...otherProps }) {
  return (
    <div {...otherProps}>
      <button
        className={`waves-effect btn-large z-depth-5 ${name}`}
        onClick={() => handleClick(name)}
        style={styles.button}
      >
        <div>{clicks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
      </button>
    </div>
  );
}

ClickyButton.propTypes = {
  name: PropTypes.oneOf(ALL_TEAMS).isRequired,
  clicks: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ClickyButton;
