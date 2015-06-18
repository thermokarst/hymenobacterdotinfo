import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["grid-1", "gutter-50"],

  setup: function() {
    Ember.RSVP.hash({
      species: this.store.findAll('species'),
      strains: this.store.findAll('strain'),
      characteristicTypes: this.store.findAll('characteristic-type'),
      characteristics: this.store.findAll('characteristic'),
    }).then((models) => {
      // Set up search parameters
      // Clean up sort order
      let selects = [
        { model: 'species', id: 'id', text: 'speciesNameMU',
          children: 'strains', cid: 'id', ctext: 'strainNameMU' },
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
          let sorted_children = data.get(item.children).sortBy(item.ctext);
          sorted_children.forEach((child) => {
            temp_children.push({id: child.get(item.cid), text: child.get(item.ctext)});
          });
          return {
            text: data.get(item.text),
            children: temp_children,
          };
        });
        this.set(item.model, temp);
      });
    });
  }.on('init'),

  actions: {
    search: function() {
      let strains = this.get('selectedStrains'),
          characteristics = this.get('selectedCharacteristics');
      this.sendAction('search', strains, characteristics);
    },
  },
});
