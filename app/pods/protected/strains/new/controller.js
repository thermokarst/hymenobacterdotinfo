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
        this.transitionToRoute('protected.strains.index');
      }
    },

    cancel: function() {
      this.transitionToRoute('protected.strains.index');
    },

  },
});
