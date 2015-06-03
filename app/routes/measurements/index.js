import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('strains/show').strain.get('measurements');
  }
});
