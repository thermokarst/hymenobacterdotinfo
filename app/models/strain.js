import DS from 'ember-data';
import Ember from 'ember';

const { Model, hasMany, belongsTo, attr } = DS;
const { computed, String: { htmlSafe } } = Ember;

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

  // Used internally for sorting
  fullName: computed('species', 'strainName', function() {
    return `${this.get('species.speciesName')} ${this.get('strainNameMU')}`;
  }),

  fullNameMU: computed('species', 'strainName', function() {
    return htmlSafe(`<em>${this.get('species.speciesName')}</em> ${this.get('strainName')}`);
  }),
});
