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
	rm -rfv /tmp/hongkailiu.github.io/
	git clone https://github.com/hongkailiu/hongkailiu.github.io.git /tmp/hongkailiu.github.io
	cp -r ./docs/* /tmp/hongkailiu.github.io/
	git -C /tmp/hongkailiu.github.io/ checkout README.md
	git -C /tmp/hongkailiu.github.io/ checkout CNAME
	git -C /tmp/hongkailiu.github.io/ add .
	git -C /tmp/hongkailiu.github.io/ status
	$(eval COMMIT_MSG := "$(shell git log --oneline -1)")
	git -C /tmp/hongkailiu.github.io/ commit -m $(COMMIT_MSG)
	git -C /tmp/hongkailiu.github.io/ log -2

### release
.PHONY : release
release:
	git -C /tmp/hongkailiu.github.io/ push

.PHONY : ci-install
ci-install:
	npm --version
	### circle ci requirement
	### https://circleci.com/docs/2.0/language-javascript/
	sudo npm install -g @angular/cli
	ng --version

.PHONY : ci-all
ci-all: ci-install test build pre-prelease
