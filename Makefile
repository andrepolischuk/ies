
default: test

test: build
	@open test/index.html

clean:
	@rm -rf build.js ies.js ies.min.js components node_modules

build: $(wildcard test/*.js)
	@duo --development --stdout test/test.js > build.js

bundle: index.js
	@duo --standalone ies --stdout index.js > ies.js
	@uglifyjs ies.js --mangle --compress --output ies.min.js

.PHONY: clean test
