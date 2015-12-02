import Ember from 'ember';

const { Controller, inject: { service } } = Ember;

export default Controller.extend({
  session: service(),
  ajax: service(),
  ajaxError: service('ajax-error'),
  currentUser: service('session-account'),

  actions: {
    save: function(password) {
      const id = this.get('currentUser.account.id');
      const data = { id: id, password: password };
      this.get('ajax').post('/users/password', { data: data }).then(() => {
        this.transitionToRoute('protected.users.show', id);
        this.get('flashMessages').information('Your password has been changed.');
      }, (errors) => {
        this.get('ajaxError').alert(errors);
      });
    },

    cancel: function() {
      this.get('flashMessages').clearMessages();
      this.transitionToRoute('protected.users.show', this.get('currentUser.account.id'));
    },
  },
});
