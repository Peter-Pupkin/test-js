import Ember from 'ember';

export default Ember.Component.extend({
     tagName:'',
     fff: false,
    actions: {
        setBodyView (bodyView) {
          //  debugger;
           
   this.set('fff', !bodyView);
        }

    }
});
