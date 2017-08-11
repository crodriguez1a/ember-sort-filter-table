import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  title: attr('string'),
  score: attr('string'),
  publisher: attr('string'),
  short_description: attr('string'),
  platforms: attr(),
  thumb: attr('string')
});
