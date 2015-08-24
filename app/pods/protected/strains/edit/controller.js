import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let strain = this.get('strain');

      if (strain.get('hasDirtyAttributes')) {
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
      let strain = this.get('strain');

      strain.get('errors').clear();
      strain.rollbackAttributes();

      this.transitionToRoute('protected.strains.show', strain);
    },

  },
});
