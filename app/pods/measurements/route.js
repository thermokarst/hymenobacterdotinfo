import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return Ember.RSVP.hash({
      species: this.store.findAll('species'),
      strains: this.store.findAll('strain'),
      characteristicTypes: this.store.findAll('characteristic-type'),
      characteristics: this.store.findAll('characteristic'),
    });
  },
  setupController: function(controller, models) {
    // Set up search parameters
    let selects = [
      { model: 'species', id: 'id', text: 'speciesName',
        children: 'strains', cid: 'id', ctext: 'fullName' },
      { model: 'characteristicTypes', id: 'id', text: 'characteristicTypeName',
        children: 'characteristics', cid: 'id', ctext: 'characteristicName' },
    ];

    selects.forEach((item /*, index, enumerable*/) => {
      models[item.model] = models[item.model].filter((i) => {
        if (!Ember.isEmpty(i.get(item.children))) { return true; }
      });
      models[item.model] = models[item.model].sortBy(item.text);
      let temp = models[item.model].map((data) => {
        let temp_children = [];
        data.get(item.children).forEach((child) => {
          temp_children.push({id: child.get(item.cid), text: child.get(item.ctext)});
        });
        return {
          text: data.get(item.text),
          children: temp_children,
        };
      });
      controller.set(item.model, temp);
    });

  },
});
