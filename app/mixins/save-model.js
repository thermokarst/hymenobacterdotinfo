import Ember from 'ember';
import ajaxError from '../utils/ajax-error';

const { Mixin } = Ember;

export default Mixin.create({
  fallbackRouteSave: null,
  fallbackRouteCancel: null,

  actions: {
    save: function(properties) {
      const model = this.get('model');
      const fallbackRoute = this.get('fallbackRouteSave');

      model.setProperties(properties);
      model.save().then((model) => {
        this.get('flashMessages').clearMessages();
        this.transitionToRoute(fallbackRoute, model);
      }, () => {
        ajaxError(model.get('errors'), this.get('flashMessages'));
      });
    },

    cancel: function() {
      const model = this.get('model');
      const isNew = model.get('isNew');

      model.get('errors').clear();
      model.rollbackAttributes();

      if (isNew) {
        this.transitionToRoute(this.get('fallbackRouteCancel'));
      } else {
        this.transitionToRoute(this.get('fallbackRouteCancel'), model);
      }
    },
  },
});
