# Chaplin.js generator [![Build Status](https://secure.travis-ci.org/ButuzGOL/generator-chaplinjs.png?branch=master)](http://travis-ci.org/ButuzGOL/generator-chaplinjs) [![Coverage Status](https://coveralls.io/repos/ButuzGOL/generator-chaplinjs/badge.png?branch=master)](https://coveralls.io/r/ButuzGOL/generator-chaplinjs?branch=master)

Maintainer: [ButuzGOL](https://github.com/ButuzGOL)

A Chaplin.js generator for Yeoman that provides a functional boilerplate Backbone app out of the box. You also get access to a number of sub-generators which can be used to easily create individual models, views, collections and so on.

## Usage

Install: `npm install -g generator-chaplinjs`

Make a new directory and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo chaplinjs`, optionally passing an app name:
```
yo chaplinjs [app-name]
```

## Generators

Available generators:

- chaplinjs:model
- chaplinjs:view
- chaplinjs:collection

## Typical workflow

```
yo chaplinjs # generates your application base and build workflow
yo chaplinjs:model user
yo chaplinjs:collection users
yo chaplinjs:view users
grunt server
```

## Todo

- Controller actions
- Controller add to routes
- View with template and style
- Tests
- README

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)