import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    search: function() {
      let strain = this.get('selectedStrain');
      let characteristic = this.get('selectedCharacteristic');
      if ((strain === 'all') && (characteristic === 'all')) {
        this.store.findAll('measurement').then((measurements)=>{
          this.set('measurements', measurements);
        });
        return;
      }
      let search = {};
      if (strain !== 'all') {
        search['strain'] = strain;
      }
      if (characteristic !== 'all') {
        search['characteristic'] = characteristic;
      }
      this.store.find('measurement', search).then((measurements)=>{
        this.set('measurements', measurements);
      });
    }
  },
});
