import Ember from 'ember';
import ajaxError from '../../../../utils/ajax-error';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let characteristic = this.get('model');

      if (characteristic.get('hasDirtyAttributes')) {
        characteristic.save().then((characteristic) => {
          this.transitionToRoute('protected.characteristics.show', characteristic);
        }, () => {
          ajaxError(characteristic.get('errors'), this.get('flashMessages'));
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
