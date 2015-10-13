import Ember from 'ember';
import ajaxRequest from '../../../../utils/ajax-request';

export default Ember.Controller.extend({
  passwordConfirm: null,

  actions: {
    save: function() {
      if (this.get('password') !== this.get('passwordConfirm')) {
        this.get('flashMessages').clearMessages();
        this.get('flashMessages').error("Password fields don't match");
        return;
      }

      let url = `${this.get('globals.apiURL')}/api/${this.get('globals.genus')}/users/password`;
      let options = {
        method: 'POST',
        data: {
          password: this.get('password'),
        },
      };
      ajaxRequest(url, options);
      this.transitionTo('protected.users.index');
      this.get('flashMessages').information('Your password has been changed.');
    },

  },

});
