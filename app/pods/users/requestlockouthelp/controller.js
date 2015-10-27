import Ember from 'ember';
import ajaxRequest from '../../../utils/ajax-request';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    save: function() {
      let url = `${this.get('globals.apiURL')}/api/${this.get('globals.genus')}/users/lockout`;
      let options = {
        method: 'POST',
        data: { email: this.get('email') },
      };
      ajaxRequest(url, options, this.get('session'));
      this.transitionToRoute('login');
      this.get('flashMessages').information('Please check your email');
    },

  },

});
