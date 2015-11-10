import Ember from 'ember';
import ajaxRequest from '../../../utils/ajax-request';

const { Controller, inject: { service } } = Ember;

export default Controller.extend({
  session: service(),
  globals: service(),

  actions: {
    submit: function(email) {
      const url = `${this.get('globals.apiURL')}/api/${this.get('globals.genus')}/users/lockout`;
      const options = {
        method: 'POST',
        data: { email: email },
      };
      ajaxRequest(url, options, this.get('session'));
      this.transitionToRoute('login');
      this.get('flashMessages').information('Please check your email');
    },

  },

});
