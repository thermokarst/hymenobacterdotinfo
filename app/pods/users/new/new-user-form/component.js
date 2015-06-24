import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['grid-1'],
  passwordConfirm: null,

  actions: {
    save: function() {
      var user = this.get('user');

      if (user.get('isDirty')) {
        user.save().then(() => {
          this.sendAction();
        }).catch(() => {
          // Manually clean up messages because there is no transition
          this.get('flashMessages').clearMessages();
          user.get('errors').forEach((error) => {
            this.get('flashMessages').error(`${error.attribute.capitalize()} - ${error.message}`);
          });
        });
      }
    },
  },
});
