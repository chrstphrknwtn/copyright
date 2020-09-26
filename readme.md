# Copyright

Always up-to-date copyright notices.

## Install
````shell
npm install copyright
````

## Usage
````javascript
const copyright = require('copyright');
````

### Default
````javascript
copyright();
````
````
Copyright © 2020
````

### With name

````javascript
copyright('Christopher Newton');
````
````
Copyright © 2020 Christopher Newton
````

### With options

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

| property        | type     | description                                               |
| -               | -        | -                                                         |
| `name`          | String   | Name to be appended to the copyright notice.              |
| `endYear`       | Number   | Sets the year, or end year when used with `startYear`.    |
| `startYear`     | Number   | Sets start year and yields a year range (eg. 1977-2020).  |
| `short`         | Boolean  | Omits the leading 'Copyright' word                        |
| `htmlEntities`  | Boolean  | Escapes the copyright symbol; ie. © becomes `&copy;`      |

## Examples

### Name with start year and end year

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

### Short with name

````javascript
copyright({
  name: 'Christopher Newton',
  short: true
});
````
````
© 2020 Christopher Newton
````

### Everything

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
