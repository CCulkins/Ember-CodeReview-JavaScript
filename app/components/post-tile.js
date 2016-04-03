import Ember from 'ember';

export default Ember.Component.extend({
  fullPostDisplaying: false,
  actions: {
    fullPostDisplays: function() {
      this.set('fullPostDisplaying', true);
    },
    fullPostNoDisplay: function() {
      this.set('fullPostDisplaying', false);
    }
  }
});
