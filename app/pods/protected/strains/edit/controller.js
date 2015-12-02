import Ember from 'ember';

const { Controller, RSVP, inject: { service } } = Ember;

export default Controller.extend({
  ajaxError: service('ajax-error'),

  fallbackRouteSave: 'protected.strains.show',
  fallbackRouteCancel: 'protected.strains.show',

  actions: {
    save: function(properties, deleteQueue, updateQueue) {
      let promises = [];
      properties.measurements.forEach((measurement) => {
        if (measurement.get('isNew')) {
          promises.push(measurement.save());
        }
      });

      updateQueue.forEach((measurement) => {
        promises.push(measurement.save());
      });

      deleteQueue.forEach((measurement) => {
        promises.push(measurement.destroyRecord());
      });

      const model = this.get('model');
      const fallbackRoute = this.get('fallbackRouteSave');

      RSVP.all(promises).then(() => {
        // Can't call _super inside promise, have to reproduce save-model
        // mixin here :-(
        model.setProperties(properties);
        model.save().then((model) => {
          this.get('flashMessages').clearMessages();
          this.transitionToRoute(fallbackRoute, model);
        });
      }, (errors) => {
        this.get('ajaxError').alert(errors);
      });
    },

    cancel: function() {
      const model = this.get('model');

      model.get('errors').clear();
      model.rollbackAttributes();

      if (model.get('isNew')) {
        this.transitionToRoute(this.get('fallbackRouteCancel'));
      } else {
        this.transitionToRoute(this.get('fallbackRouteCancel'), model);
      }
    },

    addMeasurement: function() {
      return this.store.createRecord('measurement', {
        characteristic: this.store.createRecord('characteristic', { sortOrder: -999 }),
      });
    },

  },
});
