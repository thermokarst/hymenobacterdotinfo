import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  characteristicName    : attr('string'),
  characteristicTypeName: attr('string'),
  strains               : hasMany('strain', { async: false }),
  measurements          : hasMany('measurements', { async: false }),
  createdAt             : attr('date'),
  updatedAt             : attr('date'),
  createdBy             : attr('number'),
  updatedBy             : attr('number'),
  sortOrder             : attr('number'),
  canEdit               : attr('boolean'),
});
