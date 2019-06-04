# eslint-plugin-no-generic-identifier

Disallow generic declarations/assignments

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-generic-identifier`:

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
        "no-generic-identifier/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





