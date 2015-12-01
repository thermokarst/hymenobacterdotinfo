import Ember from 'ember';
import ajaxError from '../../../../utils/ajax-error';

const { Controller, RSVP } = Ember;

export default Controller.extend({
  fallbackRouteSave: 'protected.strains.show',
  fallbackRouteCancel: 'protected.strains.show',

  actions: {
    save: function(properties, deleteQueue, updateQueue) {
      let promises = [];
      properties.measurements.forEach((measurement) => {
        if (measurement.get('isNew')) {
          promises.push(measurement.save().catch(() => {
            ajaxError(measurement.get('errors'), this.get('flashMessages'));
          }));
        }
      });

      updateQueue.forEach((measurement) => {
        promises.push(measurement.save().catch(() => {
          ajaxError(measurement.get('errors'), this.get('flashMessages'));
        }));
      });

      deleteQueue.forEach((measurement) => {
        promises.push(measurement.destroyRecord().catch(() => {
          ajaxError(measurement.get('errors'), this.get('flashMessages'));
        }));
      });

      const model = this.get('model');
      const fallbackRoute = this.get('fallbackRouteSave');

      RSVP.all(promises).then(() => {
        // Can't call _super inside promise :-(
        model.setProperties(properties);
        model.save().then((model) => {
          this.get('flashMessages').clearMessages();
          this.transitionToRoute(fallbackRoute, model);
        }, () => {
          ajaxError(model.get('errors'), this.get('flashMessages'));
        });
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

    addCharacteristic: function() {
      return this.store.createRecord('measurement', {
        characteristic: this.store.createRecord('characteristic', { sortOrder: -999 }),
      });
    },

  },
});
