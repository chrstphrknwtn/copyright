# Copyright

Mini-library for standards-compliant copyright notices that default to the current year.

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

## Install
````shell
npm install copyright
````

````javascript
const copyright = require('copyright');
````

## Usage

#### Default
````javascript
copyright();
````
````
Copyright © 2020
````

#### With name argument (string)

````javascript
copyright('Christopher Newton');
````
````
Copyright © 2020 Christopher Newton
````

#### With options (object)

````javascript
copyright({
  startYear: 1981,
  endYear: 2081,
  name: 'Christopher Newton'
});
````
````
Copyright © 1981-2081 Christopher Newton
````

## Options
No options are required. If an empty options object is supplied the default notice is returned.

| property          | type              | description                                                      |
| -                 | -                 | -                                                                |
| `name`            | String            | Name to be appended to the end of the copyright notice.          |
| `endYear`         | String or Number  | Sets the current year, or end year for year range.               |
| `startYear`       | String or Number  | Sets original publication date for a year range (eg. 1977-2020). |
| `short`           | Boolean           | Omits the leading 'Copyright' word                               |
| `htmlEntities`    | Boolean           | Escapes the copyright symbol; ie. © becomes `&copy;`             |

### Examples

#### Name with start year and end year

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

#### Short with name

````javascript
copyright({
  name: 'Christopher Newton',
  short: true
});
````
````
© 2020 Christopher Newton
````

#### Everything

````javascript
copyright({
  name: 'Christopher Newton',
  startYear: 1981,
  endYear: 2081,
  short: true,
  htmlEntities: true
});
````
````
&copy; 1981-2020 Christopher Newton
````
