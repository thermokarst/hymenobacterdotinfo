import DS from 'ember-data';

export default DS.Model.extend({
  email    : DS.attr('string'),
  password : DS.attr('string'),
  name     : DS.attr('string'),
  role     : DS.attr('string'),
  canEdit  : DS.attr('boolean'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  isAdmin: function() {
    return this.get('role') === 'A';
  }.property('role'),

  isWriter: function() {
    return this.get('role') === 'W';
  }.property('role'),

  isReader: function() {
    return this.get('role') === 'R';
  }.property('role'),

  fullRole: function() {
    let role = this.get('role');
    if (role === 'R') {
      return 'Read-Only';
    } else if (role === 'W') {
      return 'Write';
    } else if (role === 'A') {
      return 'Admin';
    } else {
      return 'Error';
    }
  }.property('role'),
});
