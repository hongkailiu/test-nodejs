###
.PHONY : test
test:
	echo "TODO"
	#ng test

### build application
.PHONY : build
build:
	npm ci
	rm -rfv ./docs
	npm run build-prod
	ng build --prod --output-path docs
	git checkout src/app/build.environment.ts

### checking diff before release
.PHONY : pre-release
pre-release:
	./pre_release.sh

### release
.PHONY : release
release:
	git -C /tmp/hongkailiu.github.io-local/ push

.PHONY : circle-ci-install
circle-ci-install:
	./circle_ci_check.sh
	make --version
	git --version
	node --version
	npm --version
	### need to have this folder in circle-ci env.
	mkdir ./node_modules
	### circle ci requirement
	### https://circleci.com/docs/2.0/language-javascript/
	sudo npm install -g @angular/cli
	ng --version
	rmdir ./node_modules
	git config --global user.name "circle-ci"
	git config --global user.email "circle-ci@users.noreply.github.com"

.PHONY : circle-ci-all
circle-ci-all: circle-ci-install test build pre-release
