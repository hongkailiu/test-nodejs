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
	rm -rfv /tmp/hongkailiu.github.io/*
	git clone https://github.com/hongkailiu/hongkailiu.github.io.git /tmp/hongkailiu.github.io
	cp -r ./docs/* /tmp/hongkailiu.github.io/
	git -C /tmp/hongkailiu.github.io/ checkout README.md
	git -C /tmp/hongkailiu.github.io/ checkout CNAME
	git -C /tmp/hongkailiu.github.io/ add .
	git -C /tmp/hongkailiu.github.io/ status
	git log --oneline -1
	echo "=$(git log --oneline -1)="
	git -C /tmp/hongkailiu.github.io/ commit -m "$(git log --oneline -1)"
	git -C /tmp/hongkailiu.github.io/ log
	git -C /tmp/hongkailiu.github.io/ show
