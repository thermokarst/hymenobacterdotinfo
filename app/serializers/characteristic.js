import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,

  serializeHasMany: function(snapshot, json, relationship) {
    var key = relationship.key;
    var hasMany = snapshot.hasMany(key);
    key = this.keyForRelationship ? this.keyForRelationship(key, "hasMany", "serialize") : key;

    json[key] = [];
    hasMany.forEach((item) => {
      json[key].push(+item.get('id'));
    });
  }

});
