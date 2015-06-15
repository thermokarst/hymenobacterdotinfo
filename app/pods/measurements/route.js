import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      species: this.store.findAll('species'), // need this bc async
      strains: this.store.findAll('strain'),
      characteristics: this.store.findAll('characteristic'),
    });
  },
  setupController: function(controller, models) {
    // Set up search parameters
    let selects = [
      { model: 'strains', id: 'id', text: 'fullName' },
      { model: 'characteristics', id: 'id', text: 'characteristicName' },
    ];

    selects.forEach((item /*, index, enumerable*/) => {
      models[item.model] = models[item.model].sortBy(item.text);
      let temp = models[item.model].map((data) => {
        return Ember.Object.create({
          id: data.get(item.id),
          text: data.get(item.text),
        });
      });
      controller.set(item.model, temp);
    });

  },
});
