import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: true,
  actions: {
    save: function() {
      var strain = this.get('strain');
      if (strain.get('isDirty')) {
        strain.save();
      }
      this.transitionToRoute('strains.index');
    },
    cancel: function() {
      var strain = this.get('strain');
      if (strain.get('isNew')) {
        strain.deleteRecord();
      }
      this.transitionToRoute('strains.index');
    }
  }
});
