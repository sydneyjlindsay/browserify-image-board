var $ = require('jquery'); 
var Backbone = require('backbone'); 
Backbone.$ = $;

var ImageModel = require('../models/image-model.js');

module.exports = Backbone.Collection.extend({
	model: ImageModel, 
	url: 'http://tiy-fee-rest.herokuapp.com/collections/syd-image-model'
});