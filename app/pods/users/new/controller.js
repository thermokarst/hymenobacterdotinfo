import Ember from 'ember';
import ajaxError from '../../../utils/ajax-error';

const { Controller } = Ember;

export default Controller.extend({
  isLoading: false,

  actions: {
    save: function(properties) {
      const user = this.get('model');
      user.setProperties(properties);

      if (user.get('hasDirtyAttributes')) {
        this.set('isLoading', true);
        user.save().then(() => {
          this.transitionToRoute('login').then(() => {
            this.get('flashMessages').information(`You have successfully signed up.
              Please check your email for further instructions.`);
          });
        }, () => {
          this.set('isLoading', false);
          ajaxError(user.get('errors'), this.get('flashMessages'));
        });
      }
    },

  },
});
