import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['grid-1'],
  isEditing: false,
  actions: {
    editStrain: function() {
      this.get('strain').get('errors').clear();
      this.toggleProperty('isEditing');
    },
    saveStrain: function() {
      this.get('strain').save().then(this.toggleProperty('isEditing'));
    }
  }
});
