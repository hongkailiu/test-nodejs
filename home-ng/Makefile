.PHONY : build-home
build-home:
	rm -rfv ./docs
	npm run build-prod
	ng build --prod --output-path docs
	git checkout src/app/build.environment.ts
