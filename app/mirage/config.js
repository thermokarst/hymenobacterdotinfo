export default function() {
  // Don't use mirage for development (for now)
  this.urlPrefix = 'http://127.0.0.1:8901';
  this.namespace = '/api';
  this.passthrough();
}

export function testConfig() {
  this.urlPrefix = 'https://bactdb-test.herokuapp.com';
  this.namespace = '/api/clostridium';
  this.timing = 0;

  this.get('/users/:id');

  this.get('/species');
  this.post('/species');
  this.get('/species/:id');
  this.put('/species/:id');
}
