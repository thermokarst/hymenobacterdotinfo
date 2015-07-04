import Ember from 'ember';
import userCanEdit from '../../../utils/user-can-edit';

export default Ember.Component.extend({
  classNames: ['grid-1'],
  isEditing: false,

  canEdit: function() {
    return userCanEdit(this.get('session.currentUser'), this.get('species.createdBy'));
  }.property('session.currentUser', 'species.createdBy').readOnly(),

  actions: {
    save: function() {
      this.sendAction('save');
    },
    cancel: function() {
      this.sendAction('cancel');
    },
  }
});
