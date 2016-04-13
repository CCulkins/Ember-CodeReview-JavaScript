import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
    });
  },

  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },

    add(params) {
      var addComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(addComment);
      addComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('index');
    },

    edit(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },

    deletePost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },

    deleteComment(comment) {
      comment.destroyRecord();
      this.transitionTo('index');
    },
  }
});
