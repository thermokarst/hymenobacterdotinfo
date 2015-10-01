import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let user = this.get('model');

      if (user.get('hasDirtyAttributes')) {
        user.save().then((user) => {
          this.get('flashMessages').clearMessages();
          this.transitionToRoute('protected.users.show', user);
        }, (err) => {
          err.errors.forEach((error) => {
            this.get('flashMessages').error(error.detail);
          });
        });
      } else {
        this.transitionToRoute('protected.users.show', user);
      }
    },

    cancel: function() {
      let user = this.get('model');

      user.get('errors').clear();
      user.rollbackAttributes();

      this.transitionToRoute('protected.users.show', user);
    },

  },
});
