import { check, Match } from 'meteor/check';
import Colors, { ALL_COLORS } from './colors';

Meteor.methods({
  'colors.click'(name) {
    check(name, Match.OneOf(...ALL_COLORS));

    Colors.update({ name }, { $inc: { clicks: 1 } });
  },
});
