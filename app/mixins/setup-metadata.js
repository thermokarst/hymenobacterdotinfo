import Ember from 'ember';

const { Mixin, inject: { service }} = Ember;

export default Mixin.create({
  currentUser: service('session-account'),
  metaData: null,
  isAdmin: null,

  setupMetaDataOnInit: Ember.on('init', function() {
    this.get('currentUser.account').then((user) => {
      this.set('metaData', user.get('metaData'));
      this.set('isAdmin', user.get('isAdmin'));
    });
  }),
});
