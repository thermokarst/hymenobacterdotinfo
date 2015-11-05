import Ember from 'ember';
import ajaxError from '../utils/ajax-error';

const { Mixin } = Ember;

export default Mixin.create({
  fallbackRoute: null,

  actions: {
    save: function(properties) {
      const model = this.get('model');
      const fallbackRoute = this.get('fallbackRoute');

      model.setProperties(properties);

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

      model.get('errors').clear();
      model.rollbackAttributes();

      this.transitionToRoute(this.get('fallbackRoute'), model);
    },
  },
});