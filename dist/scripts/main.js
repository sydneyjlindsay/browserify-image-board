var $ = jQuery = require('jquery'); 
var Backbone = require('backbone');
var _ = require('underscore');
var bootstrap = require('bootstrap');
Backbone.$ = $;

var ImageCollection = require('./collections/image-collection.js');
var ImageModel = require('./models/image-model.js');


$(document).on('ready', function() {

	$('#form-container').hide();
	$('#url-alert').hide();
	$('#caption-alert').hide();

	$('#btn-plus').on('click', function() {
		console.log('button clicked');
		$('#form-container').show();
	});

	$('#btn-cancel').on('click', function() {
		$('#form-container').hide();
	});

	var imageFeed = new ImageCollection();
	imageFeed.fetch();

	var imageBuilder = _.template($('#image-template').html());

	$('#btn-add-image').on('click', function(e) {
		console.log('form submitted');
		e.preventDefault();

		var newImage = new ImageModel({
			imageUrl: $('#input-url').val(),
			caption: $('#input-caption').val()
		});

		if(newImage.isValid()) {
			imageFeed.add(newImage);
			newImage.save();
			$('#input-url').val('');
			$('#input-caption').val('');
		}
		else {
			console.log(newImage.validationError);
		}
		console.log(newImage);

		
	});

	imageFeed.on('add', function(model) {
		var imageHtml = imageBuilder(model.attributes);
		console.log(imageHtml);

		$('#image-album').prepend(imageHtml);
	});

});