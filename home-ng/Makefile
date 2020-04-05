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

sed_cmd := sed
uname_out := $(shell uname -s)
ifeq ($(uname_out),Darwin)
sed_cmd := gsed
endif

### checking diff before release
.PHONY : generate-version
generate-version:
	echo "version is $(build_version)"
	echo "NOW is $(build_time)"
	$(sed_cmd) -i -e "s|{buildVersion}|$(build_version)|g" ./src/app/build.environment.ts
	$(sed_cmd) -i -e "s|{buildTime}|$(build_time)|g" ./src/app/build.environment.ts

TARGET_FOLDER := /tmp/hongkailiu.github.io-local

### checking diff before release
.PHONY : pre-release
pre-release:
	echo "TARGET_FOLDER: $(TARGET_FOLDER)"
	rm -rfv "$(TARGET_FOLDER)"
	git clone https://github.com/hongkailiu/hongkailiu.github.io.git "$(TARGET_FOLDER)"
	rm -rfv "$(TARGET_FOLDER)"/*
	cp -rv ./docs/* "$(TARGET_FOLDER)"
	git -C "$(TARGET_FOLDER)" checkout README.md
	git -C "$(TARGET_FOLDER)" checkout CNAME
	git -C "$(TARGET_FOLDER)" checkout Makefile
	git -C "$(TARGET_FOLDER)" checkout version.json
	git -C "$(TARGET_FOLDER)" checkout .travis.yml
	git -C "$(TARGET_FOLDER)" add .
	git -C "$(TARGET_FOLDER)" status -s
	test -n "$$(git -C "$(TARGET_FOLDER)" status -s)"
	git -C "$(TARGET_FOLDER)" commit -m "$$(git log --oneline -1)"
	make -C "$(TARGET_FOLDER)" generate-version
	git -C "$(TARGET_FOLDER)" --no-pager diff
	git -C "$(TARGET_FOLDER)" add .
	git -C "$(TARGET_FOLDER)" status
	git -C "$(TARGET_FOLDER)" commit -m "Update version.json"
	git -C "$(TARGET_FOLDER)" --no-pager log -3

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
	echo "CIRCLECI: $(CIRCLECI)"
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
	### https://stackoverflow.com/questions/56355499/stop-angular-cli-asking-for-collecting-analytics-when-i-use-ng-build
	sudo npm install -g @angular/cli > /dev/null
	ng --version
	rmdir ./node_modules
	git config --global user.name "circle-ci"
	git config --global user.email "circle-ci@users.noreply.github.com"

.PHONY : circle-ci-all
circle-ci-all: circle-ci-install test build pre-release
