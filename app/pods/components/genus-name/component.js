import Ember from 'ember';
import config from '../../../config/environment';

export default Ember.Component.extend({
  tagName: 'em',
  genus: config.genus.capitalize(),
});
