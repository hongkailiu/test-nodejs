###
.PHONY : test
test:
	echo "TODO"
	#ng test

.PHONY : clean
clean:
	rm -rfv ./docs

docs_dir := ./docs

### build application
.PHONY : build
build: clean
	mkdir -pv $(docs_dir)
	tsc --outFile $(docs_dir)/greeter.js greeter.ts


