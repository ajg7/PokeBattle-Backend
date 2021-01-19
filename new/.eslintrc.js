module.exports = {
    "env": {
        "commonjs": true,
        "node": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "prettier"],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "semi": ["error", "always"], 
        "quotes": ["error", "double"] 
    }
};
