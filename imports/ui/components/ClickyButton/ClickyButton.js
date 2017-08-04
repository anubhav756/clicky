import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  FlatButton,
} from 'material-ui';
import { ALL_COLORS } from '../../../api/colors/colors';
import colors from './colors';
import styles from './styles';

function ClickyButton({ name, clicks, handleTouchTap }) {
  return (
    <Paper zDepth={3} style={styles.buttonContainer}>
      <FlatButton
        {...colors[name]}
        onTouchTap={() => handleTouchTap(name)}
        style={styles.button}
      >
        <div style={styles.buttonContent}>{clicks}</div>
      </FlatButton>
    </Paper>
  );
}

ClickyButton.propTypes = {
  name: PropTypes.oneOf(ALL_COLORS).isRequired,
  clicks: PropTypes.number.isRequired,
  handleTouchTap: PropTypes.func.isRequired,
};

export default ClickyButton;
