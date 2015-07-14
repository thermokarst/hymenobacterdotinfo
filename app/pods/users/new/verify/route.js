import Ember from 'ember';

export default Ember.Route.extend({
  apiURL: function() {
    return this.get('globals.apiURL');
  }.property(),

  genus: function() {
    return this.get('globals.genus');
  }.property(),

  model: function(params) {
    let url = this.get('apiURL') + '/api/' + this.get('genus') + '/users/verify/' + params.nonce;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      let options = {
        success: function(data){
          resolve(data);
        },
        error: function(jqXHR, status, error){
          reject(jqXHR, status, error);
        },
        dataType: 'text json',
      };
      Ember.$.ajax(url, options);
    });
  },


  afterModel: function(model/*, transition*/) {
    this.get('flashMessages').success(model.msg);
    this.transitionTo('login');
  },

  actions: {
    error: function(error/*, transition*/) {
      let err = Ember.$.parseJSON(error.responseText);
      this.get('flashMessages').error(err.error);
      this.transitionTo('login');
    }
  },

});
