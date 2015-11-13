import Ember from 'ember';
import DS from 'ember-data';

const { Model, attr } = DS;
const { computed } = Ember;

export default Model.extend({
  email    : attr('string'),
  password : attr('string'),
  name     : attr('string'),
  role     : attr('string'),
  canEdit  : attr('boolean'),
  createdAt: attr('date'),
  updatedAt: attr('date'),

  isAdmin: computed('role', function() {
    return this.get('role') === 'A';
  }),

  isWriter: computed('role', function() {
    return this.get('role') === 'W';
  }),

  isReader: computed('role', function() {
    return this.get('role') === 'R';
  }),

  fullRole: computed('role', function() {
    const role = this.get('role');
    if (role === 'R') {
      return 'Read-Only';
    } else if (role === 'W') {
      return 'Write';
    } else if (role === 'A') {
      return 'Admin';
    } else {
      return 'Error';
    }
  }),

  canWrite: computed('role', function() {
    return this.get('role') !== 'R';
  }),

  metaData: computed('canWrite', function() {
    return { 'canAdd': this.get('canWrite') };
  }),

});
