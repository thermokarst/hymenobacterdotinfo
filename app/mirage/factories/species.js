import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  speciesName: faker.lorem.words,
  typeSpecies: faker.random.boolean,
  etymology: faker.lorem.sentences,
  genusName: 'hymenobacter',
  strains: [],
  totalStrains: 0,
  sortOrder: faker.random.number,
});
