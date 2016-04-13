import Ember from 'ember';

export default Ember.Component.extend({

  editPostForm: false,
  actions: {
    editPostForm() {
      this.set('editPostForm', true);
    },

    edit(post) {
      var params = {
        user: this.get('user'),
        userTime: this.get('userTime'),
        catPic: this.get('catPic'),
        title: this.get('title'),
        message: this.get('message'),
        awards: this.get('awards'),
        tldr: this.get('tldr'),
      };

      this.set('editPostForm', false);
      this.sendAction('edit', post, params);
    }
  }
});
