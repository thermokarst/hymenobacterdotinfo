import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      let user = this.get('model');

      if (user.get('hasDirtyAttributes')) {
        let attrs = user.changedAttributes(), roleChanged = false;
        if (attrs.role) {
          roleChanged = true;
        }
        user.save().then((user) => {
          this.get('flashMessages').clearMessages();
          if (roleChanged) {
            // Need to clear the store so that canEdit and canAdd
            // attributes reflect the new role.
            this.get('store').unloadAll();
          }
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
