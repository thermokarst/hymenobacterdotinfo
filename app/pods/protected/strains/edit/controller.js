import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let strain = this.get('strain');

      if (strain.get('isDirty')) {
        strain.save().then((strain) => {
          this.transitionToRoute('protected.strains.show', strain);
        }, (err) => {
          this.get('flashMessages').error(err.responseJSON.error);
        });
      } else {
        strain.deleteRecord();
        this.transitionToRoute('protected.strains.show', strain);
      }
    },

    cancel: function() {
      let strain = this.get('protected.strain');

      strain.get('errors').clear();
      strain.rollback();

      this.transitionToRoute('protected.strains.show', strain);
    },

  },
});
