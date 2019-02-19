.PHONY : test
test:
	#ng test
	echo "TODO"

.PHONY : build
build:
	rm -rfv ./docs
	npm run build-prod
	ng build --prod --output-path docs
	git checkout src/app/build.environment.ts

.PHONY : pre-release
pre-release:
	echo "TODO"
