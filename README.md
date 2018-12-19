![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## 02 Classes and Inheritance 

### Author: Becca Lee

### Links and Resources
[![Build Status](https://www.travis-ci.com/beccalee123/02-classes-inheritance-fp.svg?branch=master)](https://www.travis-ci.com/beccalee123/02-classes-inheritance-fp)
* [repo](https://github.com/beccalee123/02-classes-inheritance-fp/tree/master)
* [travis](https://www.travis-ci.com/beccalee123/02-classes-inheritance-fp)
* [server](https://becca-02-classes-inheritance.herokuapp.com/)

### Modules
#### `modulename.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
* `PORT` - Determined by ENV

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.

#### Tests
* How do you run tests?
Tests are run using `npm run lint`, `npm run test` locally, and Travis once it's pushed up to GitHub/before it's deployed
* What assertions were made?
For the vehicle.test.js modules, tests were made for the following:
<!-- - TODO -->
* What assertions need to be / should be made?
- It would probably be wise to do tests for general type checking, to ensure parameters were provided, that the inputs aren't arrays, etc.

#### UML
Link to an image of the UML for your application and response to events