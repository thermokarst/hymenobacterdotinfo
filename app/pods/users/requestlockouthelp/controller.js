import Ember from 'ember';

const { Controller, inject: { service } } = Ember;

export default Controller.extend({
  session: service(),
  globals: service(),
  ajax: service(),

  actions: {
    submit: function(email) {
      this.get('ajax').post('/users/lockout', { data: { email: email } } );
      this.transitionToRoute('login');
      this.get('flashMessages').information('Please check your email');
    },

  },

});
