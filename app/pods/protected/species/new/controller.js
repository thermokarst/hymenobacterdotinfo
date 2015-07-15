import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let species = this.get('model');

      if (species.get('hasDirtyAttributes')) {
        species.save().then((species) => {
          this.transitionToRoute('protected.species.show', species.get('id'));
        }, (err) => {
          this.get('flashMessages').error(err.responseJSON.error);
        });
      } else {
        species.deleteRecord();
        this.transitionToRoute('protected.species.index');
      }
    },

    cancel: function() {
      this.transitionToRoute('protected.species.index');
    },

  },
});
