import Ember from 'ember';
import ElevatedAccess from '../../../../mixins/elevated-access';

const { Route } = Ember;

export default Route.extend(ElevatedAccess, {
  // Required for ElevatedAccess mixin
  fallbackRouteBefore: 'protected.species.index',
  fallbackRouteAfter: 'protected.species.show',

  model: function(params) {
    return this.store.findRecord('species', params.species_id);
  },

});
