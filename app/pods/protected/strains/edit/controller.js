import Ember from 'ember';
import ajaxError from '../../../../utils/ajax-error';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let strain = this.get('strain');

      if (strain.get('hasDirtyAttributes')) {
        strain.save().then((strain) => {
          this.transitionToRoute('protected.strains.show', strain);
        }, () => {
          ajaxError(strain.get('errors'), this.get('flashMessages'));
        });
      } else {
        strain.deleteRecord().then(() => {
          this.transitionToRoute('protected.strains.show', strain);
        });
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
