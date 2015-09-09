import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let characteristic = this.get('model');

      if (characteristic.get('hasDirtyAttributes')) {
        characteristic.save().then((characteristic) => {
          this.transitionToRoute('protected.characteristics.show', characteristic);
        }, (err) => {
          this.get('flashMessages').error(err.responseJSON.error);
        });
      } else {
        this.transitionToRoute('protected.characteristics.index');
      }
    },

    cancel: function() {
      this.transitionToRoute('protected.characteristics.index');
    },

  },
});
