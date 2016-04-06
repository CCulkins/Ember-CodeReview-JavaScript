import DS from 'ember-data';

export default DS.Model.extend({
  commentUser: DS.attr(),
  commentMessage: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
