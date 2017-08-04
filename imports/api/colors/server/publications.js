import Colors from '../colors';

Meteor.publish('allColors', function () {
  return Colors.find();
});
