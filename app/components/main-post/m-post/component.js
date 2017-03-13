import Ember from 'ember';

export default Ember.Component.extend({
    post: null,
    showBody: false,
    onPostClick: null,


    click() {
        // let showBody = this.get('showBody');
        // this.set('showBody', !showBody);
        this.sendAction('onPostClick', this.get('post'));
    },
    actions:{
    onButtonClickInBody() {
        console.log('main-post/m-post onButtonClickInBody', this.get('post'));
        this.onBodyButtonClick(this.get('post'));
    }
    }
});
