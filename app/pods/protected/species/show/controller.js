import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    delete: function() {
      this.get('model').destroyRecord().then(() => {
        this.transitionToRoute('protected.species.index');
      });
    },
  },

});
