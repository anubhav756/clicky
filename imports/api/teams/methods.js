import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import Teams, { ALL_TEAMS } from './teams';

Meteor.methods({
  'teams.click'(name) {
    check(name, Match.OneOf(...ALL_TEAMS));

    Teams.update({ name }, { $inc: { clicks: 1 } });
  },
});
