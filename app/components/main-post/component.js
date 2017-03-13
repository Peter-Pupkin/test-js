import Ember from 'ember';

export default Ember.Component.extend({

  posts: [],
  post: null,
  onPostClick: null,

  // activePost: null,
  maxOpenedPosts: 3,
  activePosts: Ember.A(),


  actions: {
    onPostClick(post) {
      const activePosts = this.get('activePosts');
      const maxOpenedPosts = this.get('maxOpenedPosts');
      if (activePosts.contains(post)) {
        activePosts.removeObject(post);
      } else {
        activePosts.addObject(post);
      }

      if (activePosts.length > maxOpenedPosts) {
        activePosts.shiftObject();
      }
      this.notifyPropertyChange('activePosts');
      // this.set('activePosts', Ember.A(activePosts.toArray()));
    },
  onButtonClickInItemBody(post) {
    console.log('main-post component onButtonClickInItemBody', post);
    this.sendAction('onPostButtonClickHandler', post);
  }

  }

});
