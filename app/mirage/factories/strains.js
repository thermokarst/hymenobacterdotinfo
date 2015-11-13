import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  measurements: [],
  characteristics: [],
  species: 0,
  strainName() { return faker.lorem.words().join(' '); },
  typeStrain: faker.random.boolean(),
  accessionNumbers() { return faker.lorem.words().join(' '); },
  genbank() { return faker.lorem.words().join(' '); },
  wholeGenomeSequence() { return faker.lorem.words().join(' '); },
  isolatedFrom: faker.lorem.sentences(),
  notes: faker.lorem.sentences(),
  totalMeasurements: 0,
  sortOrder: faker.random.number(),
  canEdit: faker.random.boolean(),
});
