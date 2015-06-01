import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['grid-1'],
  isEditing: false,
  isNew: false,
  actions: {
    editStrain: function() {
      this.get('strain').get('errors').clear();
      if (this.get('isNew')) {
        this.get('strain').destroyRecord().then(this.sendAction());
      }
      this.toggleProperty('isEditing');
      this.get('strain').rollback();
    },
    saveStrain: function() {
      this.get('strain').save().then(this.toggleProperty('isEditing'));
    }
  }
});
