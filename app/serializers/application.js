import DS from 'ember-data';
import Ember from 'ember';

const { RESTSerializer } = DS;
const { isNone } = Ember;

export default RESTSerializer.extend({
  isNewSerializerAPI: true,

  serializeBelongsTo: function(snapshot, json, relationship) {
    let key = relationship.key;
    const belongsTo = snapshot.belongsTo(key);
    key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo", "serialize") : key;
    json[key] = isNone(belongsTo) ? belongsTo : +belongsTo.record.id;
  },

  serializeHasMany: function(snapshot, json, relationship) {
    let key = relationship.key;
    const hasMany = snapshot.hasMany(key);
    key = this.keyForRelationship ? this.keyForRelationship(key, "hasMany", "serialize") : key;

    json[key] = [];
    hasMany.forEach((item) => {
      json[key].push(+item.id);
    });
  },

});
