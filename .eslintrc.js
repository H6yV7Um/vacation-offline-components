module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "exprimentalObjectRestSpread": true
        },
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "extends": "eslint:recommended",
    "plugins": ["react"],
    "rules": {
        "no-unused-vars": "warn"
    }
}