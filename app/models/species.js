import DS from 'ember-data';
import config from '../config/environment';
import Ember from 'ember';

export default DS.Model.extend({
  speciesName : DS.attr('string'),
  typeSpecies : DS.attr('boolean'),
  etymology   : DS.attr('string'),
  genusName   : DS.attr('string', { defaultValue: config.APP.genus }),
  strains     : DS.hasMany('strain', { async: false }),
  totalStrains: DS.attr('number'),
  createdAt   : DS.attr('date'),
  updatedAt   : DS.attr('date'),
  deletedAt   : DS.attr('date'),
  createdBy   : DS.attr('number'),
  updatedBy   : DS.attr('number'),
  deletedBy   : DS.attr('number'),
  sortOrder   : DS.attr('number'),
  canEdit     : DS.attr('boolean'),

  speciesNameMU: function() {
    return Ember.String.htmlSafe(`<em>${this.get('speciesName')}</em>`);
  }.property('speciesName').readOnly(),
});
