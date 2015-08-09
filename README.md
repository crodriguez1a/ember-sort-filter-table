# ember-sort-filter-table

A table addon for Ember-CLI with sorting and filtering. [Demo](http://demos.evolutionaryapps.com/EmberSortFilterTable/)

## Installation
		ember install ember-sort-filter-table

## Usage

Simply pass an array of objects as the **table** parameter to the component. 

		/**
		  .js
		  Defining a model that my table will display
		*/
		let model = [
		  { 
		    Tables: 'zebra stripes', 
		    Are: 'are neat', 
		    Cool: '$1' 
		   } 
		 ];
		
		...
		
		{{! some-template.hbs }}
		{{component "sort-filter-table" table=model}}
		
The addon will assemble the table headers from the object keys and display a table like this:

| [Tables](#)        | [Are](#)           | [Cool](#) |
| ------------- |:-------------:| -----:|
| zebra stripes | are neat      |    $1 |

If your model has properties that should not be displayed in the table, use an underscore to mark that property as private.

		let model = [
		  { 
		    name: Carlos Rodriguez,
		    github_id: crodriguez1a,
		    _writesCode: true
		  }
		];
		
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
