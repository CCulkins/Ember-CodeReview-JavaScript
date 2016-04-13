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
        post: this.get('post')
      };

      this.set('addComment', true);
      this.sendAction('add', params);
    },

    save(params) {
      var newPost = this.store.createRecord('post', params);
      var comment = params.addComment;
      comment.get('post').addObject(newPost);
      newPost.save().then(function() {
        return comment.save();
      });

      this.transitionTo('index', params.comment);
    }
  }
});
