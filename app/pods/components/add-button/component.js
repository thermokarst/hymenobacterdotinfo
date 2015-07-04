import Ember from 'ember';
import userCanAdd from '../../../utils/user-can-add';

export default Ember.Component.extend({
  canAdd: function() {
    let user_role = this.get('session.currentUser.role');
    return userCanAdd(user_role);
  }.property('session.currentUser.role').readOnly(),
});
