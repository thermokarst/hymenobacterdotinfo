import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['grid-1'],
  passwordConfirm: null,

  actions: {
    save: function() {
      var user = this.get('user');

      if (user.get('isDirty')) {
        user.save();
      }
    },
  },
});
