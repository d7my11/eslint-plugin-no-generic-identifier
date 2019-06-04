# eslint-plugin-no-generic-identifier

Disallow generic declarations/assignments

## Installation

You'll first need to install [ESLint](http://eslint.org):

Yarn
```
$ yarn add eslint --dev
```

NPM
```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-no-generic-identifier`:

Yarn
```
$ yarn add eslint-plugin-no-generic-identifier --dev
```

NPM
```
$ npm install eslint-plugin-no-generic-identifier --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-generic-identifier` globally.

## Usage

Add `no-generic-identifier` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-generic-identifier"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-generic-identifier/presentation": 2
    }
}
```

***

### Rule Example:


Bad

```js
const Presentation = () => {}
```

Good

```js
const WhatActuallyThisMethodDoes = () => {}
```
