import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    save: function() {
      var species = this.get('model');
      if (species.get('isDirty')) {
        species.save();
      }
      this.toggleProperty('isEditing');
    },
    cancel: function() {
      if (this.get('isEditing')) {
        var species = this.get('model');
        species.get('errors').clear();
        species.rollback();
      }
      this.toggleProperty('isEditing');
    }
  }
});
