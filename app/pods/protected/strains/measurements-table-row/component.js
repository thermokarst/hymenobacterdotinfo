import Ember from 'ember';
import ajaxError from '../../../../utils/ajax-error';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'tr',
  isEditing: false,
  allCharacteristics: null,
  measurement: null,

  oldCharacteristicId: function() {
    let json = this.get('measurement').toJSON();
    return json.characteristic;
  }.property(),

  rowChanged: computed('measurement.notes', 'measurement.value', 'measurement.characteristic.id', function() {
    return this.get('measurement.hasDirtyAttributes') ||
      this.get('oldCharacteristicId') !== this.get('measurement.characteristic.id');
  }),

  actions: {
    edit: function() {
      this.toggleProperty('isEditing');
    },

    save: function() {
      if (this.get('rowChanged')) {
        this.get('measurement').save().then(() => {
          this.get('flashMessages').clearMessages();
          this.toggleProperty('isEditing');
        }, () => {
          ajaxError(this.get('measurement.errors'), this.get('flashMessages'));
        });
      } else {
        this.toggleProperty('isEditing');
      }
    },

    delete: function() {
      let char = this.get('measurement.characteristic');
      if (char.get('isNew')) {
        char.destroyRecord();
      }
      this.get('measurement').destroyRecord();
    }

  },
});
