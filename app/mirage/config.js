export default function() {
  // Don't use mirage for development (for now)
  this.urlPrefix = 'http://127.0.0.1:8901';
  this.namespace = 'api';
  this.passthrough();
}

export function testConfig() {
  this.urlPrefix = 'http://127.0.0.1:8901';
  this.namespace = 'api';
}
