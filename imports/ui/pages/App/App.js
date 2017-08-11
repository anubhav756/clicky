import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import ClickyButton from '../../components/ClickyButton';
import Colors from '../../../api/colors/colors';

function handleClick(color) {
  Meteor.call('colors.click', color);
}

function App({ colors }) {
  return (
    <div className="row">
      <div className="col s12 m8 l12 xl10 offset-m2 offset-xl1">
        <div className="row">
          {
            colors.map(({ name, clicks }) => (
              <ClickyButton
                key={name}
                className="col s12 l4"
                clicks={clicks}
                colorName={name}
                handleClick={handleClick}
              />
            ))
          }
        </div>
      </div>
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
