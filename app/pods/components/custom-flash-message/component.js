import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['flakes-message'],
  classNameBindings: ['type'],
  type: Ember.computed.readOnly('flash.type'),
});
