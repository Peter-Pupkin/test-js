import Ember from 'ember';

export default Ember.Component.extend({
     posts:null,
     activePost1: null,
     activePost2: null,
     actions: {
        setBodyView (post) {

            let activePost1 = this.get ('activePost1');
            let activePost2 = this.get ('activePost2');
            if (activePost1  && activePost2 === post){
             this.set('activePost1', post);
             this.set('activePost2', post);
            }else{
             this.set('activePost1', null);        
             this.set('activePost2', null); }

             if (activePost1 === activePost2){
                    this.set('activePost1', null);
                    this.set('activePost2', post);
                    }else{
                        this.set('activePost2', null);
                        this.set('activePost1', post);
                    }
            
           
        }

    }
});
