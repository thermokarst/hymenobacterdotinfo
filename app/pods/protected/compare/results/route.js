import Ember from 'ember';
import ajaxRequest from '../../../../utils/ajax-request';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  queryParams: {
    strain_ids: {
      refreshModel: true,
    },
    characteristic_ids: {
      refreshModel: true,
    },
  },

  beforeModel: function(transition) {
    this._super(transition);
    if (Ember.$.isEmptyObject(transition.queryParams.strain_ids) ||
        Ember.$.isEmptyObject(transition.queryParams.characteristic_ids)) {
      this.transitionTo('protected.compare');
    }
  },

  model: function(params) {
    if (params.strain_ids === '' || params.characteristic_ids === '') {
      this.transitionTo('protected.compare');
    }

    let compare = this.controllerFor('protected.compare');
    compare.set('selectedStrains', params.strain_ids);
    compare.set('selectedCharacteristics', params.characteristic_ids);

    let url = `${this.get('globals.apiURL')}/api/${this.get('globals.genus')}/compare`;
    let options = {
      method: 'GET',
      data: params,
    };
    return ajaxRequest(url, options, this.get('session'));
  },

  setupController: function(controller, model) {
    model.forEach((m, i) => {
      let c = this.store.peekRecord('characteristic', m[0]);
      model[i][0] = c.get('characteristicName');
    });
    controller.set('model', model);
  },

});
