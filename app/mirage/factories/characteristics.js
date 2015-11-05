import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  characteristicName() { return faker.lorem.words().join(' '); },
  characteristicTypeName() { return faker.lorem.words().join(' '); },
  strains: [],
  measurements: [],
  sortOrder: faker.random.number(),
  canEdit: faker.random.boolean(),
});
