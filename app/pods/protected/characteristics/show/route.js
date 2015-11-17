import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model: function(params) {
    return this.store.findRecord('characteristic', params.characteristic_id, { reload: true });
  },

});
