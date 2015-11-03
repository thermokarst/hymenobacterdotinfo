export default function() {
  // Don't use mirage for development (for now)
  this.urlPrefix = 'http://127.0.0.1:8901';
  this.namespace = '/api';
  this.passthrough();
}

export function testConfig() {
  this.urlPrefix = 'https://bactdb-test.herokuapp.com';
  this.namespace = '/api/hymenobacter';

  this.get('/users/:id', function(db, request) {
    return { 'user': db.users.find(request.params.id) };
  });

  this.get('/species', function(db) {
    return { 'species': db.species };
  });
}
