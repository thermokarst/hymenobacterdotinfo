import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let species = this.get('model');

      if (species.get('isDirty')) {
        species.save().then((species) => {
          this.transitionToRoute('species.show', species.get('id'));
        }, (err) => {
          this.get('flashMessages').error(err.responseJSON.error);
        });
      } else {
        species.deleteRecord();
        this.transitionToRoute('species.index');
      }
    },

    cancel: function() {
      this.transitionToRoute('species.index');
    },

  },
});
