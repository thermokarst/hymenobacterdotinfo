import Ember from 'ember';

export default Ember.Controller.extend({
  strains: [],
  dataEmpty: true,

  actions: {
    search: function(selectedStrains, selectedCharacteristics) {
      if (Ember.isEmpty(selectedStrains) || Ember.isEmpty(selectedCharacteristics)) {
        this.set('dataEmpty', true);
        return false;
      }

      let data = Ember.A();
      let strains = [];
      selectedStrains.forEach((strain) => {
        let s = this.store.getById('strain', strain);
        strains.pushObject(s);
      });
      this.set('strains', strains);

      this.store.find('measurement', {
        strain: selectedStrains,
        characteristic: selectedCharacteristics,
      }).then((measurements) => {
        selectedCharacteristics.forEach((characteristic) => {
          let char = this.store.getById('characteristic', characteristic);
          let row = {
            characteristic: char.get('characteristicName'),
          };
          selectedStrains.forEach((strain) => {
            let meas = measurements.filterBy('strain.id', strain)
              .filterBy('characteristic.id', characteristic);
            if (!Ember.isEmpty(meas)) {
              row[strain] = meas[0].get('value');
            } else {
              row[strain] = '';
            }
          });
          data.pushObject(row);
        });
        this.set('data', data);
        this.set('dataEmpty', false);
      });
    }
  },
});
