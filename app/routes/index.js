import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },

    add(params) {
      var addComment = this.store.createRecord('post', params);
      addComment.save();
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
      this.transitionto('index');
    }
  }
});
