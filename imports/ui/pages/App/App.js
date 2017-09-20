import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ClickyButton from '../../components/ClickyButton';
import Teams from '../../../api/teams/teams';
import styles from './styles';

function handleClick(name) {
  Meteor.call('teams.click', name);
}

function App({ teams }) {
  return (
    <div className="row" style={styles.container}>
      {
        teams.map(({ name, clicks }) => (
          <ClickyButton
            key={name}
            className="col s12 l4 center-align"
            clicks={clicks}
            name={name}
            handleClick={handleClick}
          />
        ))
      }
    </div>
  );
}

App.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('allTeams');

  return {
    teams: Teams.find().fetch(),
  };
}, App);
