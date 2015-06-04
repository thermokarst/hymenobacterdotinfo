import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: true,
  actions: {
    save: function() {
      var species = this.get('model');
      if (species.get('isDirty')) {
        species.save();
      }
      this.transitionToRoute('species.index');
    },
    cancel: function() {
      var species = this.get('model');
      if (species.get('isNew')) {
        species.deleteRecord();
      }
      this.transitionToRoute('species.index');
    }
  }
});
