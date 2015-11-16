export default function() {
  // Don't use mirage for development (for now)
  this.urlPrefix = 'http://127.0.0.1:8901';
  this.namespace = '/api';
  this.passthrough('http://localhost:4200/**', 'http://127.0.0.1:8901/**');
}

export function testConfig() {
  this.urlPrefix = 'https://bactdb-test.herokuapp.com';
  this.namespace = '/api/hymenobacter';
  this.timing = 0;

  this.get('/users');
  this.post('/users');
  this.get('/users/:id');
  this.put('/users/:id');

  this.get('/species');
  this.post('/species');
  this.get('/species/:id');
  this.put('/species/:id');
  this.delete('/species/:id');

  this.get('/characteristics');
  this.post('/characteristics');
  this.get('/characteristics/:id');
  this.put('/characteristics/:id');
  this.delete('/characteristics/:id');

  this.get('/strains', function(db /*, request*/) {
    return {
      strains: db.strains,
      species: db.species,
    };
  });
  this.post('/strains');
  this.get('/strains/:id', function(db, request) {
    return {
      strain: db.strains.find(request.params.id),
      species: db.species, // Just send back everything we've got
    };
  });
  this.put('/strains/:id');
  this.delete('/strains/:id');
}
