var $ = require('jquery'); 
var Backbone = require('backbone'); 
Backbone.$ = $; 

module.exports = Backbone.Model.extend({
	defaults: {
		imageUrl: null, 
		caption: null
	}, 

	validate: function(attr, options) {
		if(attr.imageUrl.length === 0)  {
			$('#url-alert').show();
			return 'You must enter a valid URL'; 
		}
		if(attr.imageUrl.indexOf('http://') < 0) {
			$('#url-alert').show();
			return 'You must enter a valid URL'; 
		}
		if(attr.caption.length === 0) {
			$('#caption-alert').show();
			return 'You must enter a caption';
		}
		
		$('#url-alert').hide();
		$('#caption-alert').hide();
		return false;
	}, 

	urlRoot:'http://tiy-fee-rest.herokuapp.com/collections/syd-image-model', 
	idAttribute: '_id'
});