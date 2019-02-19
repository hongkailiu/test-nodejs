# HomeNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

On [travis-ci](https://travis-ci.org/hongkailiu/test-nodejs), use [Makefile](Makefile) to test, build, etc.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Generate build into docs folder:

```
$ cd ./home-ng
$ npm install
$ npm run build-prod
$ ng build --prod --output-path docs

```

Release the build to github pages:

```
$ git clone https://github.com/hongkailiu/hongkailiu.github.io.git /tmp/hongkailiu.github.io

$ rm -rf /tmp/hongkailiu.github.io/*
$ cp -r ./docs/* /tmp/hongkailiu.github.io/
$ git -C /tmp/hongkailiu.github.io/ checkout README.md
$ git -C /tmp/hongkailiu.github.io/ checkout CNAME
$ git -C /tmp/hongkailiu.github.io/ add .
### git -C /tmp/hongkailiu.github.io/ status
$ git -C /tmp/hongkailiu.github.io/ commit -m "$(git log --oneline -1)"
### git -C /tmp/hongkailiu.github.io/ log
$ git -C /tmp/hongkailiu.github.io/ push

```


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
