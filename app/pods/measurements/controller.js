import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search: function() {
      this.store.find('measurement', {
        strain: this.get('selectedStrains'),
        characteristic: this.get('selectedCharacteristics'),
      }).then((measurements)=>{
        this.set('measurements', measurements);
      });
    }
  },
});
