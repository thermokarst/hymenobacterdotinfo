import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let strain = this.get('strain');

      if (strain.get('isDirty')) {
        strain.save().then((strain) => {
          this.transitionToRoute('strains.show', strain);
        }, (err) => {
          this.get('flashMessages').error(err.responseJSON.error);
        });
      } else {
        this.transitionToRoute('strains.index');
      }
    },

    cancel: function() {
      this.transitionToRoute('strains.index');
    },

  },
});
