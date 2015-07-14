import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import parseBase64 from '../../utils/parse-base64';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    let token = this.get('session.secure.token');
    let user = parseBase64(token);
    return this.store.find('user', user.sub);
  },

});
