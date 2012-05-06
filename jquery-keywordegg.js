/*
 * jQuery KeywordEgg Plugin
 * Copyright 2011, Nicholas Clark
 * Licensed under the MIT license.
 */
(function($) {

	$.fn.keywordegg = function(options) {  

		var settings = $.extend( {
			"keyword": "foo ?bar", // regex patterns allowed
			"maxLength": 100,
			"onMatch": onMatch
		}, options);
		
		var log = "";
		var pattern = new RegExp(settings.keyword + "$", "i");
		var selector = (this.selector) ? this.selector : document;
		
		$(document).on("keypress", selector, function(e) {
			if ($(e.target).is(":input")) {
				// Ignore typing in form elements
				log = ""; // clear the log
			} else {
				// Add the character to the log
				log += String.fromCharCode(e.which);
				
				// Keep the bathtub from overflowing
				log = log.slice(-1 * settings.maxLength);
				
				// Look for a match
				var match = log.match(pattern);
				if (match) {
					log = ""; // clear the log
					settings.onMatch.apply(this, match);
				}
			}
		});

	};
	
	function onMatch(match) {
		console.log("match", match);
	}
	
})(jQuery);