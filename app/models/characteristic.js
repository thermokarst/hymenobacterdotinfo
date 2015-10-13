import DS from 'ember-data';

export default DS.Model.extend({
  characteristicName    : DS.attr('string'),
  characteristicTypeName: DS.attr('string'),
  strains               : DS.hasMany('strain', { async: false }),
  measurements          : DS.hasMany('measurements', { async: false }),
  createdAt             : DS.attr('date'),
  updatedAt             : DS.attr('date'),
  createdBy             : DS.attr('number'),
  updatedBy             : DS.attr('number'),
  sortOrder             : DS.attr('number'),
  canEdit               : DS.attr('boolean'),
});
