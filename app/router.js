import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', {path: '/user'}, function() {
    this.route('uuser', { path: '/user/:uuser_id' });
  });
  // this.route('user', { path: '/user/:user_id' });
  this.route('posts');

  this.route('detail-item-route',  { path: '/dir/:post_id' });
});

export default Router;
