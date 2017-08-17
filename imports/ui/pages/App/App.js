import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import ClickyButton from '../../components/ClickyButton';
import Teams from '../../../api/teams/teams';
import styles from './styles';

function handleClick(team) {
  Meteor.call('teams.click', team);
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

export default createContainer(() => ({ teams: Teams.find().fetch() }), App);
