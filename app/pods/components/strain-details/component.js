import Ember from 'ember';
import userCanEdit from '../../../utils/user-can-edit';

export default Ember.Component.extend({
  classNames: ['grid-1'],
  isEditing: false,

  canEdit: function() {
    return userCanEdit(this.get('session.currentUser'), this.get('strain.createdBy'));
  }.property('session.currentUser', 'strain.createdBy').readOnly(),

  actions: {
    save: function() {
      this.sendAction('save');
    },
    cancel: function() {
      this.sendAction('cancel');
    },
  }
});
