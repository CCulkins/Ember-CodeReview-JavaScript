import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  catPic: DS.attr(),
  title: DS.attr(),
  message: DS.attr(),
  tldr: DS.attr(),
  comments: DS.hasMany('comment', {async: true}),
});
