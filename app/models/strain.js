import DS from 'ember-data';
import Ember from 'ember';

const { Model, hasMany, belongsTo, attr } = DS;

export default Model.extend({
  measurements       : hasMany('measurements', { async: false }),
  characteristics    : hasMany('characteristics', { async: false }),
  species            : belongsTo('species', { async: false }),
  strainName         : attr('string'),
  typeStrain         : attr('boolean'),
  accessionNumbers   : attr('string'),
  genbank            : attr('string'),
  wholeGenomeSequence: attr('string'),
  isolatedFrom       : attr('string'),
  notes              : attr('string'),
  createdAt          : attr('date'),
  updatedAt          : attr('date'),
  createdBy          : attr('number'),
  updatedBy          : attr('number'),
  totalMeasurements  : attr('number'),
  sortOrder          : attr('number'),
  canEdit            : attr('boolean'),

  // TODO: move this to component/helper
  strainNameMU: function() {
    let type = this.get('typeStrain') ? '<sup>T</sup>' : '';
    return Ember.String.htmlSafe(`${this.get('strainName')}${type}`);
  }.property('strainName', 'typeStrain').readOnly(),

  // TODO: move this to component/helper
  fullName: Ember.computed('species', 'strainName', function() {
    return `${this.get('species.speciesName')} ${this.get('strainNameMU')}`;
  }),

  // TODO: move this to component/helper
  fullNameMU: function() {
    return Ember.String.htmlSafe(`<em>${this.get('species.speciesName')}</em> ${this.get('strainNameMU')}`);
  }.property('species', 'strainNameMU').readOnly(),
});
