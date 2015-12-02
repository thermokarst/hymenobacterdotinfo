import DS from 'ember-data';
import Ember from 'ember';

const { RESTSerializer } = DS;
const { isNone } = Ember;

export default RESTSerializer.extend({
  serializeBelongsTo: function(snapshot, json, relationship) {
    const key = relationship.key;
    if (this._canSerialize(key)) {
      const belongsToId = snapshot.belongsTo(key, { id: true });
      let payloadKey = this._getMappedKey(key, snapshot.type);
      if (payloadKey === key && this.keyForRelationship) {
        payloadKey = this.keyForRelationship(key, "belongsTo", "serialize");
      }
      if (isNone(belongsToId)) {
        json[payloadKey] = null;
      } else {
        json[payloadKey] = +belongsToId;
      }

      if (relationship.options.polymorphic) {
        this.serializePolymorphicType(snapshot, json, relationship);
      }
    }
  },

  serializeHasMany: function(snapshot, json, relationship) {
    const key = relationship.key;
    if (this._shouldSerializeHasMany(snapshot, key, relationship)) {
      const hasMany = snapshot.hasMany(key, { ids: true });
      if (hasMany !== undefined) {
        let payloadKey = this._getMappedKey(key, snapshot.type);
        if (payloadKey === key && this.keyForRelationship) {
          payloadKey = this.keyForRelationship(key, "hasMany", "serialize");
        }
        json[payloadKey] = [];
        hasMany.forEach((item) => {
          json[payloadKey].push(+item);
        });
      }
    }
  },

});
