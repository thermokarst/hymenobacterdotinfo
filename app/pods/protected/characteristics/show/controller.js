import Ember from 'ember';
import DeleteModel from '../../../../mixins/delete-model';

const { Controller } = Ember;

export default Controller.extend(DeleteModel, {
  // Required for DeleteModel mixin
  transitionRoute: 'protected.characteristics.index',
});
