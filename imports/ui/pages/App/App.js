import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import ClickyButton from '../../components/ClickyButton';
import Colors from '../../../api/colors/colors';

function handleTouchTap(color) {
  Meteor.call('colors.click', color);
}

function App({ colors }) {
  return (
    <div>
      {
        colors.map(({ name, clicks }) => (
          <ClickyButton
            key={name}
            clicks={clicks}
            name={name}
            handleTouchTap={handleTouchTap}
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
