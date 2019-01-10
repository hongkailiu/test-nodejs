# HomeNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Generate build into docs folder:

```
$ cd ./test-nodejs/home-ng
$ ng build --prod --output-path docs

```

Release the build to github pages:

```
$ git clone https://github.com/hongkailiu/hongkailiu.github.io.git /tmp/hongkailiu.github.io

$ rm -rf /tmp/hongkailiu.github.io/<all_files_except: CNAME & README.md>
$ cp -r ./docs/* /tmp/hongkailiu.github.io/
### then git push the changes on /tmp/hongkailiu.github.io/

```


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
