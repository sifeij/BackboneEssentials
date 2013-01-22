Backbone Essentials
==================

![Imgur](http://i.imgur.com/i6eCwxs.png)

The "el" property references the DOM object created in the browser. Every Backbone.js view has an "el" property, and if it not defined, Backbone.js will construct its own, which is an empty div element.

![Imgur](http://i.imgur.com/tbEzyGv.png)

This version of code does not work, error message:
Uncaught TypeError: Cannot call method 'each' of undefined main.js:36
Backbone.View.extend.render main.js:36
(anonymous function)