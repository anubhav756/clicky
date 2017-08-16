export const ALL_TEAMS = ['red', 'green', 'blue'];

const Teams = new Mongo.Collection('teams');

Teams.schema = new SimpleSchema({
  name: { type: String, allowedValues: ALL_TEAMS },
  clicks: { type: Number, defaultValue: 0 },
});

Teams.attachSchema(Teams.schema);

export default Teams;
