import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  actions: {
    edit: function() {
      this.set('characteristicName', this.get('row.characteristicName'));
      this.set('characteristicTypeName', this.get('row.characteristicTypeName'));
      this.set('sortOrder', this.get('row.sortOrder'));
      this.toggleProperty('isEditing');
    },

    save: function() {
      if (this.get('characteristicName') !== this.get('row.characteristicName') ||
          this.get('characteristicTypeName') !== this.get('row.characteristicTypeName') ||
          this.get('sortOrder') !== this.get('row.sortOrder')) {
        this.set('row.characteristicName', this.get('characteristicName'));
        this.set('row.characteristicTypeName', this.get('characteristicTypeName'));
        this.set('row.sortOrder', this.get('sortOrder'));
        this.get('row').save();
      }
      this.toggleProperty('isEditing');
    },

  }

});
