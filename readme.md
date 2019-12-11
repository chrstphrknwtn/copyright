# Copyright

Mini-library for standards-compliant copyright notices that default to the current year.

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

## Install
````shell
npm install copyright
````

## Usage

````javascript
const copyright = require('copyright');

const notice = copyright();

console.log(notice);
````

````
Copyright © 2020
````

### Options

#### Name (string)

````javascript
copyright('Christopher Newton');
````

````
Copyright © 2020 Christopher Newton
````

#### Options (object)
No options are required. If an empty options object is supplied the default notice is returned.

| property        | type              | description                                                      |
| -               | -                 | -                                                                |
| `name`          | String            | Name to be appended to the end of the copyright notice.          |
| `startYear`     | String or Number  | Sets original publication date for a year range (eg. 1977-2020). |
| `endYear`       | String or Number  | Sets the current year, or end year for year range.               |
| `htmlEntities`  | Boolean           | Escapes the copyright symbol; ie. © becomes `&copy;`             |


````javascript
copyright({
  name: 'Christopher Newton',
  startYear: 1981,
  endYear: 2081
});
````

````
Copyright © 1981-2081 Christopher Newton
````
