import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['grid-1'],
  isEditing: false,
  isNew: false,
  actions: {
    editSpecies: function() {
      this.get('species').get('errors').clear();
      if (this.get('isNew')) {
        this.get('species').destroyRecord().then(this.sendAction());
      }
      this.toggleProperty('isEditing');
      this.get('species').rollback();
    },
    saveSpecies: function() {
      this.get('species').save().then(this.toggleProperty('isEditing'));
    }
  }
});
