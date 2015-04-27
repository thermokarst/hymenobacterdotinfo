import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    editStrain: function() {
      this.get('model').get("errors").clear();
      this.toggleProperty('isEditing');
    },
    saveStrain: function() {
      this.get('model').save().then(this.toggleProperty('isEditing'));
    }
  }
});
