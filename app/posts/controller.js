import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        onPostButtonClick(post) {
            console.log('Posts controller. onPostButtonClick', post);
            const askMe = confirm('Open in this window?');

            if (askMe == true) {
                // alert('yes');
                this.transitionToRoute('detail-item-route', post.id);
            } else {
                return false
            }
        }
    },

});
