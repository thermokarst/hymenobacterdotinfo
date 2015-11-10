import Ember from 'ember';
import ajaxRequest from '../../../../utils/ajax-request';

const { Controller, inject: { service } } = Ember;

export default Controller.extend({
  session: service(),
  currentUser: service('session-account'),

  actions: {
    save: function(password) {
      const url = `${this.get('globals.apiURL')}/api/${this.get('globals.genus')}/users/password`;
      const id = this.get('currentUser.account.id');
      const options = {
        method: 'POST',
        data: {
          id: id,
          password: password,
        },
      };
      ajaxRequest(url, options, this.get('session'));
      this.transitionToRoute('protected.users.show', id);
      this.get('flashMessages').information('Your password has been changed.');
    },

    cancel: function() {
      this.transitionToRoute('protected.users.show', this.get('currentUser.account.id'));
    },
  },
});
