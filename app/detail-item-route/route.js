import Ember from 'ember';

export default Ember.Route.extend({
     model({post_id}) {
    return $.getJSON(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
  }
});
