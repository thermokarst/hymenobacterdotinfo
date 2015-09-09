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
        characteristic.deleteRecord();
        this.transitionToRoute('protected.characteristics.show', characteristic);
      }
    },

    cancel: function() {
      let characteristic = this.get('model');

      characteristic.get('errors').clear();
      characteristic.rollbackAttributes();

      this.transitionToRoute('protected.characteristics.show', characteristic);
    },

  },
});
