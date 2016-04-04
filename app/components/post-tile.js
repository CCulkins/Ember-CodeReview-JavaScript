import Ember from 'ember';

export default Ember.Component.extend({
  fullPostDisplaying: false,
  actions: {
    fullPostDisplays: function() {
      this.set('fullPostDisplaying', true);
    },
    fullPostNoDisplay: function() {
      this.set('fullPostDisplaying', false);
    },
    delete(post) {
      if (confirm('Are you sure you would like to delete this post permanently?')) {
        this.sendAction('deletePost', post);
      }
    }
  }
});
