/*!
* jQuery CookieBox Plugin v0.1.0
* https://github.com/kozulowski/CookieBox
*
* Copyright 2013 Jakub Bilko
* Released under the MIT license
*/

(function ($) {
	$.fn.cookieBox = function(options) {
		
		var box = this;
		
		var settings = $.extend({
			'delay': 1000,
			'visible': false,
			'showspeed': 1000,
			'hidespeed': 1000,
			'autocss': false,
			'cookiename': 'cookiebox'
		}, options);
		
		if(!settings.visible) {
			box.css('display', 'none');
		}
		
		if(settings.autocss) {
				box.css('position', 'fixed');
				box.css('top', 0);
				box.css('left', 0)
		}		
		
		if(!$.cookie(settings.cookiename)) {
			this.find('.cookiebox-close').click(function(event) {
				box.slideUp(settings.hidespeed);
				$.cookie(settings.cookiename, 'viewed');
			});
		
			if(!settings.visible) { 
				box.delay(settings.delay).slideDown(settings.showspeed);
			}
		}
		
		
	}
})(jQuery);
