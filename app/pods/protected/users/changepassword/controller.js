import Ember from 'ember';
import ajaxRequest from '../../../../utils/ajax-request';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  currentUser: Ember.inject.service('session-account'),

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
          id: this.get('currentUser.account.id'),
          password: this.get('password'),
        },
      };
      ajaxRequest(url, options, this.get('session'));
      this.transitionTo('protected.users.index');
      this.get('flashMessages').information('Your password has been changed.');
    },

  },

});
