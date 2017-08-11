[![npm version](https://badge.fury.io/js/ember-sort-filter-table.svg)](https://badge.fury.io/js/ember-sort-filter-table)
[![Build Status](https://travis-ci.org/crodriguez1a/ember-sort-filter-table.svg?branch=master)](https://travis-ci.org/crodriguez1a/ember-sort-filter-table)
[![Ember Observer Score](http://emberobserver.com/badges/ember-sort-filter-table.svg)](https://emberobserver.com/addons/ember-sort-filter-table)

# ember-sort-filter-table

A table add-on for Ember-CLI with sorting and filtering. [Full Documentation & Demo](http://crodriguez1a.github.io/ember-sort-filter-table)

## Installation
		ember install ember-sort-filter-table

## Usage

Simply pass an array of objects as the **table** parameter to the component. Use the key **rows** to define your array as follows:

		/**
		  .js
		  Defining a model that my table will display
		*/
		let model = {
		  rows: [
		    {
		      Tables: 'zebra stripes',
		      Are: 'are neat',
		      Cool: '$1'
		     }
		   ]
		 };		 

		...

		{{! some-template.hbs }}
		{{component "sort-filter-table" table=model}}

The addon will assemble the table headers from the object keys and display a table like this:

| [Tables](#)        | [Are](#)           | [Cool](#) |
| ------------- |:-------------:| -----:|
| zebra stripes | are neat      |    $1 |

If your model has properties that should not be displayed in the table, use an underscore to mark that property as private.

		let model = {
		  rows:[
		    {
		      name: 'Carlos Rodriguez',
		      github_id: 'crodriguez1a',
		      _writesCode: true
		    }
		  ]
		};

The model above would display like this:

| [name](#)        | [github id](#)           |
| ------------- |:-------------:|
| Carlos Rodriguez | crodriguez1a      |

## Contribute
Collaboration is welcome and greatly appreciated. To collaborate on this project, follow the instructions that follow.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
