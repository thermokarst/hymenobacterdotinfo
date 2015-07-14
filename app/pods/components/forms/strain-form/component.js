import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function() {
      // Need to override the string id for some reason
      let strain = this.get('strain');
      let id = strain.get('species.id');
      strain.set('species.id', +id);
      this.sendAction('save');
    },

    cancel: function() {
      this.sendAction('cancel');
    },
  }
});
