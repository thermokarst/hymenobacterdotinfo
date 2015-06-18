import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  measurements     : DS.hasMany('measurements', { async: true }),
  species          : DS.belongsTo('species', { async: true }),
  strainName       : DS.attr('string'),
  typeStrain       : DS.attr('boolean'),
  accessionNumbers : DS.attr('string'),
  genbank          : DS.attr('string'),
  isolatedFrom     : DS.attr('string'),
  notes            : DS.attr('string'),
  createdAt        : DS.attr('date'),
  updatedAt        : DS.attr('date'),
  deletedAt        : DS.attr('date'),
  createdBy        : DS.attr('number'),
  updatedBy        : DS.attr('number'),
  deletedBy        : DS.attr('number'),
  totalMeasurements: DS.attr('number'),

  strainNameMU: function() {
    let type = this.get('typeStrain') ? '<sup>T</sup>' : '';
    return Ember.String.htmlSafe(`${this.get('strainName')}${type}`);
  }.property('strainName', 'typeStrain').readOnly(),

  fullNameMU: function() {
    return Ember.String.htmlSafe(`<em>${this.get('species.speciesName')}</em> ${this.get('strainNameMU')}`);
  }.property('species', 'strainNameMU').readOnly(),
});
