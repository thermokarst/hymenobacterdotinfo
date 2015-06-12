import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search: function() {
      let search = {
        strain: this.get('selectedStrains'),
        characteristic: this.get('selectedCharacteristics'),
      };
      this.store.find('measurement', search).then((measurements)=>{
        this.set('measurements', measurements);
      });
    }
  },
});
