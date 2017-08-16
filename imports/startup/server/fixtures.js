import Teams, { ALL_TEAMS } from '../../api/teams/teams';

if (!Teams.find().count()) {
  ALL_TEAMS.forEach(name => Teams.insert({ name }));
}
