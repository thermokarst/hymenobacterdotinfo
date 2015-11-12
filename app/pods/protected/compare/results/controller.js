import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  queryParams: ['strain_ids', 'characteristic_ids'],

});
