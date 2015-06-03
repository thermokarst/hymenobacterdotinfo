import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    save: function() {
      var strain = this.get('strain');
      if (strain.get('isDirty')) {
        strain.save();
      }
      this.toggleProperty('isEditing');
    },
    cancel: function() {
      this.get('strain').get('errors').clear();
      this.get('strain').rollback();
      this.toggleProperty('isEditing');
    }
  }
});
