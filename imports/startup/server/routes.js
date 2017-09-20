import { FastRender } from 'meteor/staringatlights:fast-render';

FastRender.route('/', function() {
  this.subscribe('allTeams');
});
