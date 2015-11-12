import DS from 'ember-data';
import config from '../config/environment';
import Ember from 'ember';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  speciesName : attr('string'),
  typeSpecies : attr('boolean'),
  etymology   : attr('string'),
  genusName   : attr('string', { defaultValue: config.APP.genus }),
  strains     : hasMany('strain', { async: false }),
  totalStrains: attr('number'),
  createdAt   : attr('date'),
  updatedAt   : attr('date'),
  createdBy   : attr('number'),
  updatedBy   : attr('number'),
  sortOrder   : attr('number'),
  canEdit     : attr('boolean'),

  // TODO: move this to component/helper
  speciesNameMU: function() {
    return Ember.String.htmlSafe(`<em>${this.get('speciesName')}</em>`);
  }.property('speciesName').readOnly(),
});
