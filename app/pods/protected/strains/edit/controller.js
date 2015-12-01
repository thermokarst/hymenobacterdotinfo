import Ember from 'ember';
import SaveModel from '../../../../mixins/save-model';
import ajaxError from '../../../../utils/ajax-error';

const { Controller } = Ember;

export default Controller.extend(SaveModel, {
  // Required for SaveModel mixin
  fallbackRouteSave: 'protected.strains.show',
  fallbackRouteCancel: 'protected.strains.show',

  actions: {
    save: function(properties, deleteQueue) {
      deleteQueue.forEach((val) => {
        val.destroyRecord();
      });

      this._super(properties);
    },

    addCharacteristic: function() {
      return this.store.createRecord('measurement', {
        characteristic: this.store.createRecord('characteristic', { sortOrder: -999 }),
      });
    },

    saveMeasurement: function(measurement, properties) {
      measurement.setProperties(properties);
      return measurement.save().then(() => {
        this.get('flashMessages').clearMessages();
      }, () => {
        ajaxError(measurement.get('errors'), this.get('flashMessages'));
      });
    },

  },
});
