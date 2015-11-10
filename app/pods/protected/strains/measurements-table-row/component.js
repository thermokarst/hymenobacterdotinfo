import Ember from 'ember';
import ajaxError from '../../../../utils/ajax-error';

const { Component } = Ember;

export default Component.extend({
  tagName: 'tr',
  isEditing: false,
  allCharacteristics: null,

  oldCharacteristicId: function() {
    let json = this.get('row').toJSON();
    return json.characteristic;
  }.property(),

  rowChanged: Ember.computed('row.notes', 'row.value', 'row.characteristic.id', function() {
    return this.get('row.hasDirtyAttributes') ||
      this.get('oldCharacteristicId') !== this.get('row.characteristic.id');
  }),

  actions: {
    edit: function() {
      this.toggleProperty('isEditing');
    },

    save: function() {
      if (this.get('rowChanged')) {
        this.get('row').save().then(() => {
          this.get('flashMessages').clearMessages();
          this.toggleProperty('isEditing');
        }, () => {
          ajaxError(this.get('row.errors'), this.get('flashMessages'));
        });
      } else {
        this.toggleProperty('isEditing');
      }
    },

    delete: function() {
      let char = this.get('row.characteristic');
      if (char.get('isNew')) {
        char.destroyRecord();
      }
      this.get('row').destroyRecord();
    }

  },
});
