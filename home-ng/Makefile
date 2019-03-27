###
.PHONY : test
test:
	echo "TODO"
	#ng test

.PHONY : clean
clean:
	rm -rfv ./docs

### build application
.PHONY : build
build: clean generate-version
	echo $(CI)
ifeq ($(CI), true)
	npm ci
endif
	ng build --prod --output-path docs
	git checkout src/app/build.environment.ts

build_version := $(shell git describe --tags --always --dirty)
build_time := $(shell date +"%Y%m%d")

### checking diff before release
.PHONY : generate-version
generate-version:
	echo "version is $(build_version)"
	echo "NOW is $(build_time)"
	sed -i -e "s|{buildVersion}|$(build_version)|g" ./src/app/build.environment.ts
	sed -i -e "s|{buildTime}|$(build_time)|g" ./src/app/build.environment.ts

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
ifndef CIRCLECI
	echo "CIRCLECI is not defined, existing"
	false
endif
ifeq ($(CIRCLECI), true)
	echo "circle ci environment and continue ..."
else
	echo "not circle ci environment, existing"
	false
endif
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
