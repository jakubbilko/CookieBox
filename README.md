CookieBox
=========

A jQuery plugin for displaying a fixed-postion information bar regarding the usage of cookies on sites. Requires the jQuery
Cookie Plugin to work (https://github.com/carhartl/jquery-cookie).

Usage:

    $('#cookies').cookieBox();
    
You can specify options for the plugin:

    $('#cookies').cookieBox({
      'delay': 1000,
      'visible': false,
      'showspeed': 1000,
      'hidespeed': 1000,
      'autocss': false,
      'cookiename': 'cookiebox'
    });

delay - sets the time after which the bar appears

visible - if you want the bar to be visible on start, set this to true

showspeed - speed of the roll down transition (in ms)

hidespeed - speed of the roll up transition (in ms)

autocss - when set to true, this will set some basic css for the bar (make it fixed and positioned on the top)

coookiename - the name of the cookie that determines whether the bar has been shown on the site, use a unique name for
each site

If you want to add a close button to the bar, just add the 'cookiebox-close' class to that element (inside of the bar).
