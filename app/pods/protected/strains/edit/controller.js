import Ember from 'ember';
import SaveModel from '../../../../mixins/save-model';
import ajaxError from '../../../../utils/ajax-error';

const { Controller } = Ember;

export default Controller.extend(SaveModel, {
  // Required for SaveModel mixin
  fallbackRouteSave: 'protected.strains.show',
  fallbackRouteCancel: 'protected.strains.show',

  actions: {
    addCharacteristic: function() {
      return this.store.createRecord('measurement', {
        characteristic: this.store.createRecord('characteristic', { sortOrder: -999 }),
      });
    },

    saveMeasurement: function(measurement) {
      measurement.save().then(() => {
        this.get('flashMessages').clearMessages();
      }, () => {
        ajaxError(measurement.get('errors'), this.get('flashMessages'));
      });
    },

    deleteMeasurement: function(measurement) {
      const characteristic = measurement.get('characteristic');
      if (characteristic.get('isNew')) {
        characteristic.destroyRecord();
      }
      measurement.destroyRecord();
    },

  },
});
