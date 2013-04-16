CookieBox
=========

A jQuery plugin for displaying a fixed-postion information bar regarding the usage of cookies on sites. Requires the jquery.cookie plugin to work (https://github.com/carhartl/jquery-cookie).

## Installation

Install the jquery.cookie plugin (https://github.com/carhartl/jquery-cookie).

Include the script after the jQuery library and the jquery.cookie plugin:

	<script src="cookiebox.js"></script>

## Usage

    $('#cookies').cookieBox();
    
    
## Plugin options    
    
You can specify options for the plugin:

    $('#cookies').cookieBox({
      'delay': 1000,
      'visible': false,
      'showspeed': 1000,
      'hidespeed': 1000,
      'autocss': false,
      'cookiename': 'cookiebox',
      'closeselector': '.cookiebox-close',
	  'transition': 'slide'
    });

delay - sets the time after which the bar appears.

visible - if you want the bar to be visible on start, set this to true.

showspeed - speed of the show transition (in ms).

hidespeed - speed of the hide transition (in ms).

autocss - when set to true, this will set some basic css for the bar (make it fixed and positioned on the top).

coookiename - the name of the cookie that determines whether the bar has been shown on the site, use a unique name for
each site. Once the bar is closed it will no longer appear on the site.

closeselector - selector for the close element.

transition - type of transition for showing/hiding the bar. Can be set to 'slide' or 'alpha'.