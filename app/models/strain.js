import DS from 'ember-data';

export default DS.Model.extend({
  measurements: DS.hasMany('measurements', { async: true }),
  species: DS.belongsTo('species', { async: true }),
  strainName: DS.attr('string'),
  typeStrain: DS.attr('boolean'),
  accessionNumbers: DS.attr('string'),
  genbank: DS.attr('string'),
  isolatedFrom: DS.attr('string'),
  notes: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  deletedAt: DS.attr('date'),
  createdBy: DS.attr('number'),
  updatedBy: DS.attr('number'),
  deletedBy: DS.attr('number'),
  totalMeasurements: DS.attr('number'),
  fullName: function() {
    return `${this.get('species.speciesName')} (strain ${this.get('strainName')})`;
  }.property('species', 'strainName').readOnly(),
  fullNameMU: function() {
    let species = `<em>${this.get('species.speciesName')}</em>`,
      type = this.get('typeStrain') ? '<sup>T</sup>' : '',
      strain = `(strain ${this.get('strainName')}${type})`;
    return `${species} ${strain}`;
  }.property('species', 'strainName').readOnly(),
});
