import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['grid-1'],
  passwordConfirm: null,

  actions: {
    save: function() {
      let user = this.get('user');

      // All validation is server-side, except for password verification matching
      if (user.get('password') !== this.get('passwordConfirm')) {
        this.get('flashMessages').clearMessages();
        this.get('flashMessages').error("Password fields don't match");
        return;
      }

      if (user.get('hasDirtyAttributes')) {
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
