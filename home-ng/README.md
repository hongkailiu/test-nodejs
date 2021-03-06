# HomeNg

[![Build Status](https://travis-ci.org/hongkailiu/test-nodejs.svg?branch=master)](https://travis-ci.org/hongkailiu/test-nodejs)
[![CircleCI](https://circleci.com/gh/hongkailiu/test-nodejs.svg?style=svg)](https://circleci.com/gh/hongkailiu/test-nodejs)

On [travis-ci](https://travis-ci.org/hongkailiu/test-nodejs), use [Makefile](Makefile) to test, build, etc.

Check [hliu.ca](http://www.hliu.ca/#/home) out.

About the versions:

* home version shows up at the bottom of the page.
* github-pages version shows up at [version.json](http://www.hliu.ca/version.json).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## [Deploy angular application into nginx](https://angular.io/guide/deployment)

```
$ grep root /etc/nginx/nginx.conf | grep -v '#'
        root         /usr/share/nginx/html;

### copy the content (`docs` folder) into /usr/share/nginx/html
```

If `useHash: false`, then add `try_files $uri $uri/ /index.html;` into `/etc/nginx/nginx.conf`.

```
$ grep "location /" /etc/nginx/nginx.conf -A2 | grep -v '#'
        location / {
            try_files $uri $uri/ /index.html;
        }

$ sudo systemctl restart nginx.service
```
