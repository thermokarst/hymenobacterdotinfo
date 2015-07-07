import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let species = this.get('species');

      if (species.get('isDirty')) {
        species.save().then((species) => {
          this.transitionToRoute('species.show', species.get('id'));
        }, (err) => {
          this.get('flashMessages').error(err.responseJSON.error);
        });
      } else {
        this.transitionToRoute('species.show', species.get('id'));
      }
    },

    cancel: function() {
      let species = this.get('species');

      species.get('errors').clear();
      species.rollback();

      this.transitionToRoute('species.show', species.get('id'));
    },

  },
});
