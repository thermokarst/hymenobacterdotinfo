import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function() {
      this.get('model').destroyRecord();
      this.transitionToRoute('protected.species.index');
    },
  },

});
