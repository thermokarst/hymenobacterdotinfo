import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['strain_ids', 'characteristic_ids'],

  strains: function() {
    let strains = [];
    let strain_ids = this.get('strain_ids').split(',');
    strain_ids.forEach((id) => {
      strains.push(this.store.peekRecord('strain', id));
    })
    return strains;
  }.property('strain_ids'),

  characteristics: function() {
    let characteristics = [];
    let characteristic_ids = this.get('characteristic_ids').split(',');
    characteristic_ids.forEach((id) => {
      characteristics.push(this.store.peekRecord('characteristic', id));
    })
    return characteristics;
  }.property('characteristic_ids'),

  // Set up data table matrix
  data: function() {
    let characteristics = this.get('characteristics');
    let strains = this.get('strains');
    let measurements = this.get('model');
    let data = Ember.A();

    characteristics.forEach((characteristic) => {
      let row = {
        characteristic: characteristic.get('characteristicName'),
      };

      strains.forEach((strain) => {
        let meas = measurements.filterBy('strain.id', strain.get('id'))
          .filterBy('characteristic.id', characteristic.get('id'));
        if (!Ember.isEmpty(meas)) {
          row[strain.get('id')] = meas[0].get('value');
        } else {
          row[strain.get('id')] = '';
        }
      });
      data.pushObject(row);
    });
    return data;
  }.property('characteristics', 'strains'),

});
