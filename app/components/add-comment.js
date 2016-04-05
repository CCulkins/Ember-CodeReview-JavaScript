import Ember from 'ember';

export default Ember.Component.extend({

  addComment: false,
  actions: {
    newCommentFormShow() {
      this.set('addComment', true);
    },

    add() {
      var params = {
        commentUser: this.get('commentUser'),
        commentMessage: this.get('commentMessage'),
      };

      this.set('addComment', false);
      this.sendAction('add', params);
    }
  }
});
