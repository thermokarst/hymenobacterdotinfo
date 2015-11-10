import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  measurements       : DS.hasMany('measurements', { async: false }),
  characteristics    : DS.hasMany('characteristics', { async: false }),
  species            : DS.belongsTo('species', { async: false }),
  strainName         : DS.attr('string'),
  typeStrain         : DS.attr('boolean'),
  accessionNumbers   : DS.attr('string'),
  genbank            : DS.attr('string'),
  wholeGenomeSequence: DS.attr('string'),
  isolatedFrom       : DS.attr('string'),
  notes              : DS.attr('string'),
  createdAt          : DS.attr('date'),
  updatedAt          : DS.attr('date'),
  createdBy          : DS.attr('number'),
  updatedBy          : DS.attr('number'),
  totalMeasurements  : DS.attr('number'),
  sortOrder          : DS.attr('number'),
  canEdit            : DS.attr('boolean'),

  strainNameMU: function() {
    let type = this.get('typeStrain') ? '<sup>T</sup>' : '';
    return Ember.String.htmlSafe(`${this.get('strainName')}${type}`);
  }.property('strainName', 'typeStrain').readOnly(),

  fullName: Ember.computed('species', 'strainName', function() {
    return `${this.get('species.speciesName')} ${this.get('strainNameMU')}`;
  }),

  fullNameMU: function() {
    return Ember.String.htmlSafe(`<em>${this.get('species.speciesName')}</em> ${this.get('strainNameMU')}`);
  }.property('species', 'strainNameMU').readOnly(),
});
