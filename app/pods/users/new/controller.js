import Ember from 'ember';
import ajaxError from '../../../utils/ajax-error';

export default Ember.Controller.extend({
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
          this.transitionTo('login').then(() => {
            this.get('flashMessages').information(`You have successfully signed up.
              Please check your email for further instructions.`);
          });
        }, () => {
          ajaxError(user.get('errors'), this.get('flashMessages'));
        });
      }
    },
  },
});
