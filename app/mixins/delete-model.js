import Ember from 'ember';

const { Mixin } = Ember;

export default Mixin.create({
  transitionRoute: null,

  actions: {
    delete: function() {
      this.get('model').destroyRecord().then(() => {
        this.transitionToRoute(this.get('transitionRoute'));
      });
    },
  },
});