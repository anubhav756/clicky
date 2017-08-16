export const ALL_COLORS = ['red', 'green', 'blue'];

const Colors = new Mongo.Collection('colors');

Colors.schema = new SimpleSchema({
  name: { type: String, allowedValues: ALL_COLORS },
  clicks: { type: Number, defaultValue: 0 },
});

Colors.attachSchema(Colors.schema);

export default Colors;
