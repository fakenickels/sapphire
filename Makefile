install:
	npm install -g sweet.js

test:
	mocha --harmony -b -R tap tests
