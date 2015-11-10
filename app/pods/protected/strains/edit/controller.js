import Ember from 'ember';
import SaveModel from '../../../../mixins/save-model';

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
  },
});
