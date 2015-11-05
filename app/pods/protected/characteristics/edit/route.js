import Ember from 'ember';
import ElevatedAccess from '../../../../mixins/elevated-access';

const { Route } = Ember;

export default Route.extend(ElevatedAccess, {
  // Required for ElevatedAccess mixin
  fallbackRouteBefore: 'protected.characteristics.index',
  fallbackRouteAfter: 'protected.characteristics.show',

  model: function(params) {
    return this.store.findRecord('characteristic', params.characteristic_id);
  },

});
