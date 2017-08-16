import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import ClickyButton from '../../components/ClickyButton';
import Colors from '../../../api/colors/colors';
import styles from './styles';

function handleClick(color) {
  Meteor.call('colors.click', color);
}

function App({ colors }) {
  return (
    <div className="row" style={styles.container}>
      {
        colors.map(({ name, clicks }) => (
          <ClickyButton
            key={name}
            className="col s12 l4 center-align"
            clicks={clicks}
            colorName={name}
            handleClick={handleClick}
          />
        ))
      }
    </div>
  );
}

App.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('allColors');

  return {
    colors: Colors.find().fetch(),
  };
}, App);
