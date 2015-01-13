import Authenticator from './../authenticators/custom';
import Authorizer from './../authorizers/custom';

export default {
  name: 'bling',
  initialize: function(container) {
    container.register('authenticators:custom', Authenticator);
    container.register('authorizers:custom', Authorizer);
  }
};
