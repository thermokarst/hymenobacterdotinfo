import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  speciesName() { return faker.lorem.words().join(' '); },
  typeSpecies: faker.random.boolean(),
  etymology: faker.lorem.sentences(),
  genusName: 'hymenobacter',
  strains: [],
  totalStrains: 0,
  sortOrder: faker.random.number(),
  canEdit: faker.random.boolean(),
});
