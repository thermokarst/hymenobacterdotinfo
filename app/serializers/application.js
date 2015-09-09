import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,

  serializeBelongsTo: function(snapshot, json, relationship) {
    var key = relationship.key;
    var belongsTo = snapshot.belongsTo(key);
    key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo", "serialize") : key;
    json[key] = Ember.isNone(belongsTo) ? belongsTo : +belongsTo.record.id;
  },

  serializeHasMany: function(snapshot, json, relationship) {
    var key = relationship.key;
    var hasMany = snapshot.hasMany(key);
    key = this.keyForRelationship ? this.keyForRelationship(key, "hasMany", "serialize") : key;

    json[key] = [];
    hasMany.forEach((item) => {
      json[key].push(+item.id);
    });
  },

});
