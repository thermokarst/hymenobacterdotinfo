import Ember from 'ember';
import ajaxErrorNew from '../../../../utils/ajax-error-new';

const { Controller, inject: { service } } = Ember;

export default Controller.extend({
  session: service(),
  ajax: service(),
  currentUser: service('session-account'),

  actions: {
    save: function(password) {
      const id = this.get('currentUser.account.id');
      const data = { id: id, password: password };
      this.get('ajax').post('/users/password', { data: data }).then(() => {
        this.transitionToRoute('protected.users.show', id);
        this.get('flashMessages').information('Your password has been changed.');
      }, (error) => {
        ajaxErrorNew(error, this.get('flashMessages'));
      });
    },

    cancel: function() {
      this.transitionToRoute('protected.users.show', this.get('currentUser.account.id'));
    },
  },
});
