import Ember from 'ember';
import ColumnDefinition from 'ember-table/models/column-definition';

export default Ember.Controller.extend({
  measurements: [],

  measurementsEmpty: function() {
    return this.get('measurements').length === 0;
  }.property('measurements'),

  tableColumns: Ember.computed(function() {
    let strainCol = ColumnDefinition.create({
      savedWidth: 200,
      textAlign: 'text-align-left',
      headerCellName: 'Strain',
      contentPath: 'strain.fullNameMU',
    });

    let charCol = ColumnDefinition.create({
      savedWidth: 200,
      textAlign: 'text-align-left',
      headerCellName: 'Characteristic',
      contentPath: 'characteristic.characteristicName',
    });

    let valCol = ColumnDefinition.create({
      savedWidth: 150,
      textAlign: 'text-align-left',
      headerCellName: 'Value',
      contentPath: 'value',
    });

    return [strainCol, charCol, valCol];
  }),

  tableContent: Ember.computed('measurements', function() {
    return this.get('measurements');
  }),

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
