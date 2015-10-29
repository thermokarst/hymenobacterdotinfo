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
        strain.destroyRecord().then(() => {
          this.transitionToRoute('protected.strains.index');
        });
      }
    },

    cancel: function() {
      this.get('strain').destroyRecord().then(() => {
        this.transitionToRoute('protected.strains.index');
      });
    },

  },
});
