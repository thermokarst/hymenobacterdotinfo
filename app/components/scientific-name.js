import Ember from 'ember';
import layout from '../templates/components/scientific-name';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'span',
  strain: null, // passed in
});
