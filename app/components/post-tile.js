import Ember from 'ember';

export default Ember.Component.extend({

  fullPostDisplaying: false,
  seeComments: false,
  editPostForm: false,

  actions: {
    fullPostDisplays: function() {
      this.set('fullPostDisplaying', true);
    },

    fullPostNoDisplay: function() {
      this.set('fullPostDisplaying', false);
    },

    edit(post, params) {
      this.sendAction('edit', post, params);
    },

    delete(post) {
      if (confirm('Are you sure you would like to delete this post permanently?')) {
        this.sendAction('deletePost', post);
      }
    },

    add(comment, params) {
      this.sendAction('add', comment, params);
    }
  }
});
