import Ember from 'ember';

export default Ember.Route.extend({
     model({uuser_id}) {
        // const  user_id = param.user_id;
        return Ember.$.getJSON(`https://jsonplaceholder.typicode.com/users/${uuser_id}`);
    },
});
