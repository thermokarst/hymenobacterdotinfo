import ApplicationAdapter from '../adapters/application';

export default ApplicationAdapter.extend({
  // If coalesceFindRequests is on, and we 403 on any requests, ESA logs
  // the current user out. Better to split the requests up at the adapter level.
  coalesceFindRequests: false,
});
