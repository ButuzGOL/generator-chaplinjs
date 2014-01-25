# Chaplin.js generator [![Build Status](https://travis-ci.org/ButuzGOL/generator-chaplinjs.png?branch=master)](https://travis-ci.org/ButuzGOL/generator-chaplinjs)

A Chaplin.js generator for Yeoman that provides a functional boilerplate Chaplin app out of the box. You also get access to a number of sub-generators which can be used to easily create individual models, views, collections and so on.

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

- chaplinjs:all name action
- chaplinjs:controller name [actions...]
- chaplinjs:helper name
- chaplinjs:collection name [--model=model-name]
- chaplinjs:model name
- chaplinjs:view name [--path=path] [--extend=extend-name] [--all]
- chaplinjs:template name [--path=path]
- chaplinjs:style name [--path=path]

## Typical workflow

```
yo chaplinjs # generates your application base and build workflow
yo chaplinjs:controller users index
yo chaplinjs:helper users
yo chaplinjs:collection users --model=user
yo chaplinjs:model user
yo chaplinjs:view index --path=users --extend=page
yo chaplinjs:template index-page --path=users
yo chaplinjs:style index-page --path=users
grunt server
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)