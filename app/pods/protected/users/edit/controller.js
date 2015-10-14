import Ember from 'ember';
import ajaxError from '../../../../utils/ajax-error';

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
        }, () => {
          ajaxError(user.get('errors'), this.get('flashMessages'));
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
