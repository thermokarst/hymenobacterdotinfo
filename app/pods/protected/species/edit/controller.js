import Ember from 'ember';
import ajaxError from '../../../../utils/ajax-error';

const { Controller } = Ember;

export default Controller.extend({
  actions: {
    save: function() {
      const model = this.get('model');

      if (model.get('hasDirtyAttributes')) {
        model.save().then((model) => {
          this.transitionToRoute('protected.species.show', model);
        }, () => {
          ajaxError(model.get('errors'), this.get('flashMessages'));
        });
      } else {
        this.transitionToRoute('protected.species.show', model);
      }
    },

    cancel: function() {
      const model = this.get('model');

      model.get('errors').clear();
      model.rollbackAttributes();

      this.transitionToRoute('protected.species.show', model);
    },

  },
});
