import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search: function() {
      let query = {
        strain_ids: this.get('selectedStrains'),
        characteristic_ids: this.get('selectedCharacteristics'),
      };

      this.transitionToRoute('protected.compare.results', {queryParams: query});
    }
  }
});
