import Ember from 'ember';

export default Ember.Component.extend({
    posts: null,
    activePost1: null,
    activePost2: null,
    actions: {
        setBodyView(p) {

            let a1 = this.get('activePost1');
            let a2 = this.get('activePost2');
            if (!a1 && !a2) {
                this.set('activePost1', p);
            } else if (a1 && !a2) {

                if (a1 == p) {
                    this.set('activePost1', null);
                }
                else {
                    this.set('activePost2', p);
                }
            }
            else if (a1 && a2) {
                if (a1 == p) {
                    this.set('activePost1', null);
                } else {
                    this.set('activePost1', p);
                }
                if (a2 == p) {
                    this.set('activePost2', null);
                } else {
                    this.set('activePost2', post);
                }




            }
            else if (!a1 && a2) {
                if (a2 == p) {
                    this.set('activePost2', null);
                } else {
                    this.set('activePost1', post);
                }
            }

            else if (a1 && !a2) {
                if (a1 == p) {
                    this.set('activePost1', null);
                } else {
                    this.set('activePost2', post);
                }
            }

        }
    }


    // if (activePost1 !== post && activePost2 !== post) {
    //     this.set('activePost1', post);
    // }

    // if (activePost1 === post) {
    //     this.set('activePost1', null);
    // } else {
    //     this.set('activePost2', post);
    // }



    // if (activePost1 === post && activePost2 === post) {
    //     if (activePost1 === post) {
    //         this.set('activePost1', null);
    //     } else {
    //         if (activePost2 === post) {
    //             this.set('activePost2', null);
    //         }
    //     }
    //     if (activePost2 === post) {
    //         this.set('activePost2', null);
    //     } else {
    //         this.set('activePost1', post);
    //     }

    // }
});
