import Teams from '../teams';

Meteor.publish('allTeams', function () {
  return Teams.find();
});
