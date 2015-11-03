import Ember from 'ember';
import ajaxError from '../utils/ajax-error';

export default Ember.Mixin.create({
  actions: {
    save: function() {
      const model = this.get('model');
      const fallbackRoute = this.get('fallbackRoute');

      if (model.get('hasDirtyAttributes')) {
        model.save().then((model) => {
          this.transitionToRoute(fallbackRoute, model);
        }, () => {
          ajaxError(model.get('errors'), this.get('flashMessages'));
        });
      } else {
        this.transitionToRoute(fallbackRoute, model);
      }
    },

    cancel: function() {
      const model = this.get('model');
      const fallbackRoute = this.get('fallbackRoute');

      model.get('errors').clear();
      model.rollbackAttributes();

      this.transitionToRoute(fallbackRoute, model);
    },
  },
});
