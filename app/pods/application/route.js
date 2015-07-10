import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
// import parseBase64 from '../../utils/parse-base64';

export default Ember.Route.extend(ApplicationRouteMixin, {
  // model: function() {
  //   let token = this.get('session.secure.token');
  //   if (Ember.isNone(token)) {
  //     return null;
  //   }
  //   let user = parseBase64(token);
  //   return this.store.find('user', user.sub);
  // },

  actions: {
    invalidateSession: function() {
      this.get('session').invalidate().then(() => {
        // Wait until promise is resolved
        return true;
      });
    },

    didTransition: function() {
      this.get('flashMessages').clearMessages();
      return true;
    },

  }
});
