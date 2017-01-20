import Ember from 'ember';

export default Ember.Component.extend({
    tagName:'',

    actions: {
        setBodyView (bodyView) {
          //  debugger;
           
   this.set('body', !bodyView);
        }

    }
});
