import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  FlatButton,
} from 'material-ui';
import colors from './colors';
import styles from './styles';

function ClickyButton({ clicks, color, handleTouchTap }) {
  return (
    <Paper zDepth={3} style={styles.buttonContainer}>
      <FlatButton
        {...colors[color]}
        onTouchTap={handleTouchTap}
        style={styles.button}
      >
        <div style={styles.buttonContent}>{clicks}</div>
      </FlatButton>
    </Paper>
  );
}

ClickyButton.propTypes = {
  clicks: PropTypes.number.isRequired,
  color: PropTypes.oneOf(['red', 'yellow', 'blue']).isRequired,
  handleTouchTap: PropTypes.func.isRequired,
};

export default ClickyButton;
