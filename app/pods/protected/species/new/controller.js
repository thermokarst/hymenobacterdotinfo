import Ember from 'ember';
import ajaxError from '../../../../utils/ajax-error';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let species = this.get('model');

      if (species.get('hasDirtyAttributes')) {
        species.save().then((species) => {
          this.transitionToRoute('protected.species.show', species.get('id'));
        }, () => {
          ajaxError(species.get('errors'), this.get('flashMessages'));
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
