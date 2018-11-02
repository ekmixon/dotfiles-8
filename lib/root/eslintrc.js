module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "modules": true,
    },
    "ecmaVersion": '2017',
    "sourceType": "module",
  },
  "rules": {
    "array-bracket-spacing": [2, "never"],
    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": [2, "always"],
    "arrow-spacing": [2],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", {"allowSingleLine": true}],
    "comma-dangle": [2, "always-multiline"],
    "comma-spacing": [2, {"before": false, "after": true}],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "consistent-return": [2],
    "consistent-this": [2, "self"],
    "constructor-super": [2],
    "curly": [2, "multi-line"],
    "dot-notation": [2],
    "eqeqeq": [2],
    "func-names": [2],
    "func-style": [2, "declaration", {"allowArrowFunctions": true}],
    "generator-star-spacing": [2, "after"],
    "indent": [2, 2, {"SwitchCase": 1}],
    "jsx-quotes": [2, "prefer-single"],
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
    "keyword-spacing": [2],
    "linebreak-style": [2, "unix"],
    "new-cap": [2, { "capIsNew": false }],
    "new-parens": [2],
    "no-alert": [2],
    "no-array-constructor": [2],
    "no-caller": [2],
    "no-class-assign": [2],
    "no-confusing-arrow": [2, {"allowParens": true}],
    "no-console": [1],
    "no-const-assign": [2],
    "no-constant-condition": [2],
    "no-dupe-class-members": [2],
    "no-empty-pattern": [2],
    "no-eval": [2],
    "no-extend-native": [2],
    "no-extra-bind": [2],
    "no-extra-semi": [2],
    "no-fallthrough": [2],
    "no-floating-decimal": [2],
    "no-implicit-coercion": [2],
    "no-implied-eval": [2],
    "no-invalid-this": [2],
    "no-labels": [2],
    "no-lone-blocks": [2],
    "no-lonely-if": [2],
    "no-loop-func": [2],
    "no-magic-numbers": [2, {"enforceConst": true, "ignore": [0, 1]}],
    "no-multi-spaces": [2],
    "no-multiple-empty-lines": [2, {"max": 1, "maxBOF": 0, "maxEOF": 0}],
    "no-native-reassign": [2],
    "no-negated-condition": [2],
    "no-nested-ternary": [2],
    "no-new": [2],
    "no-new-func": [2],
    "no-new-object": [2],
    "no-new-wrappers": [2],
    "no-octal": [2],
    "no-octal-escape": [2],
    "no-proto": [2],
    "no-return-assign": [2],
    "no-self-compare": [2],
    "no-sequences": [2],
    "no-shadow-restricted-names": [2],
    "no-spaced-func": [2],
    "no-this-before-super": [2],
    "no-throw-literal": [2],
    "no-trailing-spaces": [2],
    "no-unexpected-multiline": [2],
    "no-unneeded-ternary": [2],
    "no-unused-expressions": [2],
    "no-unused-vars": [2, {"argsIgnorePattern": '^_'}],
    "no-use-before-define": [2],
    "no-useless-call": [2],
    "no-useless-concat": [2],
    "no-useless-constructor": [2],
    "no-var": [2],
    "no-void": [2],
    "no-with": [2],
    "object-curly-spacing": [2, "never"],
    "one-var": [2, "never"],
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "after"],
    "padded-blocks": [2, "never"],
    "prefer-arrow-callback": [2],
    "prefer-const": [2],
    "prefer-spread": [2],
    "prefer-template": [2],
    "quote-props": [2, "as-needed", {"keywords": true}],
    "quotes": [2, "single", {"avoidEscape": true}],
    "radix": [2, "as-needed"],
    "react/display-name": [2],
    "react/jsx-closing-bracket-location": [2, "tag-aligned"],
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-no-duplicate-props": [2],
    "react/jsx-no-undef": [2],
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-danger": [2],
    "react/no-did-mount-set-state": [2],
    "react/no-did-update-set-state": [2],
    "react/no-direct-mutation-state": [2],
    "react/no-unknown-property": [2],
    "react/prop-types": [2],
    "react/react-in-jsx-scope": [2],
    "react/self-closing-comp": [2],
    "react/sort-comp": [2],
    "react/sort-prop-types": [2],
    "require-yield": [2],
    "semi": [2, "never"],
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, {"anonymous": "never", "asyncArrow": "always", "named": "never"}],
    "space-in-parens": [2, "never"],
    "space-infix-ops": [2],
    "space-unary-ops": [2, {"words": true, "nonwords": false}],
    "wrap-iife": [2],
    "yoda": [2, "never"],
  },
}