import Ember from 'ember';

export default Ember.Component.extend({

  addComment: false,
  actions: {
    newCommentFormShow() {
      this.set('addComment', true);
    },

    add() {
      var params = {
        commentUser: this.get('user'),
        commentMessage: this.get('message'),
      };

      this.set('addComment', false);
      this.sendAction('add', params);
    }
  }
});
