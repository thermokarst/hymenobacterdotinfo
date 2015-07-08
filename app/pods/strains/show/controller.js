import Ember from 'ember';

export default Ember.Controller.extend({
  userCanEdit: function() {
    let meta = this.store.metadataFor('strain');
    let id = this.get('model.id');

    if (meta.canEdit.indexOf( +id ) === -1) {
      return false;
    }
    return true;
  }.property('model.isLoaded').readOnly(),

});
