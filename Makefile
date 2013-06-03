all: js/site.js

js/site.js: js/index.js
	browserify js/index.js > js/site.js
