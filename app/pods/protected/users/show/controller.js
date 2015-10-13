import Ember from 'ember';

export default Ember.Controller.extend({
  isUser: Ember.computed('model.id', 'session.currentUser.id', function() {
    return this.get('model.id') === this.get('session.currentUser.id');
  }),
});
