import Ember from 'ember';

const { Service, inject: { service } } = Ember;

export default Service.extend({
  flashMessages: service(),

  alert: function(error) {
    const flash = this.get('flashMessages');

    flash.clearMessages();
    window.scrollTo(0,0);
    error.errors.forEach((error) => {
      console.error(error);
      const source = error.source.pointer.split('/');
      flash.error(`${source[source.length-1].replace(/([A-Z])/g, ' $1').capitalize()} - ${error.detail}`);
    });
  }
});
