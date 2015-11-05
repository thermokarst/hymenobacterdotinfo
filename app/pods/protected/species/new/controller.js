import Ember from 'ember';
import SaveModel from '../../../../mixins/save-model';

const { Controller } = Ember;

export default Controller.extend(SaveModel, {
  // Required for SaveModel mixin
  fallbackRoute: 'protected.species.show',
});
