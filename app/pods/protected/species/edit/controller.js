import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let species = this.get('model');

      if (species.get('isDirty')) {
        species.save().then((species) => {
          this.transitionToRoute('protected.species.show', species);
        }, (err) => {
          this.get('flashMessages').error(err.responseJSON.error);
        });
      } else {
        this.transitionToRoute('protected.species.show', species);
      }
    },

    cancel: function() {
      let species = this.get('model');

      species.get('errors').clear();
      species.rollback();

      this.transitionToRoute('protected.species.show', species);
    },

  },
});