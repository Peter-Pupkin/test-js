import Ember from 'ember';

export default Ember.Component.extend({
     posts:null,
     activePost: null,
     actions: {
        setBodyView (post) {

            let activePost = this.get ('activePost');
            if (activePost===post){

                this.set('activePost', null);
            }else{
                     
             this.set('activePost', post);
            }
        }

    }
});
