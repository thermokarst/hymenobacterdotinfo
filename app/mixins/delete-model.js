import Ember from 'ember';

const { Mixin } = Ember;

export default Mixin.create({
  transitionRoute: null,

  actions: {
    delete: function() {
      this.get('model').destroyRecord().then(() => {
        // Instead of unloading the entire store, we keep the loaded user models
        ['species', 'strain', 'characteristic', 'measurement'].map((model) => {
          this.get('store').unloadAll(model);
        });
        this.transitionToRoute(this.get('transitionRoute'));
      });
    },
  },
});
