import Ember from 'ember';

const { Route, $: { isEmptyObject }, inject: { service } } = Ember;

export default Route.extend({
  session: service(),
  ajax: service(),

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
    const strain_ids = transition.queryParams.strain_ids;
    const characteristic_ids = transition.queryParams.characteristic_ids;
    if (isEmptyObject(strain_ids) || isEmptyObject(characteristic_ids)) {
      this.transitionTo('protected.compare');
    }
  },

  model: function(params) {
    if (params.strain_ids === '' || params.characteristic_ids === '') {
      this.transitionTo('protected.compare');
    }

    const compare = this.controllerFor('protected.compare');
    compare.set('selectedStrains', params.strain_ids);
    compare.set('selectedCharacteristics', params.characteristic_ids);

    return this.get('ajax').request('/compare', { data: params })
  },

  setupController: function(controller, model) {
    model.forEach((m, i) => {
      const c = this.store.peekRecord('characteristic', m[0]);
      model[i][0] = c.get('characteristicName');
    });

    const compare = this.controllerFor('protected.compare');

    const strains = [];
    const strain_ids = compare.get('selectedStrains').split(',');
    strain_ids.forEach((id) => {
      strains.push(this.store.peekRecord('strain', id));
    });
    controller.set('strains', strains);

    const characteristics = [];
    const characteristic_ids = compare.get('selectedCharacteristics').split(',');
    characteristic_ids.forEach((id) => {
      characteristics.push(this.store.peekRecord('characteristic', id));
    });
    controller.set('characteristics', characteristics);

    controller.set('model', model);
  },

});
