module.exports = {
  parser  : "@typescript-eslint/parser", // Specifies the ESLint parser
  extends : [
    "plugin:styled-components-a11y/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  env: {
    browser : true,
    node    : true,
    es6     : true,
  },
  plugins       : ["@typescript-eslint", "react", "graphql", "styled-components-a11y", "import"],
  parserOptions : {
    project      : "./tsconfig.json",
    ecmaFeatures : { jsx: true },
    ecmaVersion  : 2018, // Allows for the parsing of modern ECMAScript features
    sourceType   : "module", // Allows for the use of imports
  },
  settings: {
    react            : { version: "detect" },
    "import/parsers" : {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx",
      ],
    },
    "import/resolver": {
      alias: {
        extensions: [
          ".ts",
          ".js",
          ".tsx",
          ".jsx",
          ".json",
        ],
        map: [
          [
            "@",
            "./src/",
          ],
        ],
      },
      "eslint-import-resolver-typescript": true,
    },
  },
  rules: {
    // "graphql/template-strings": ["error", {
    //   env: "apollo",
    //   schemaJson,
    // }],
    "jsx-a11y/anchor-is-valid"     : 0,
    "react/jsx-filename-extension" : [
      2,
      {
        extensions: [
          ".tsx",
          ".jsx",
        ],
      },
    ],
    "react/jsx-props-no-spreading"                        : 0,
    "react/no-array-index-key"                            : 0,
    "react/prop-types"                                    : 0,
    "react/react-in-jsx-scope"                            : "off",
    "react/require-default-props"                         : 0,
    "@typescript-eslint/ban-ts-comment"                   : 0,
    "@typescript-eslint/camelcase"                        : 0,
    "@typescript-eslint/explicit-module-boundary-types"   : 0,
    "@typescript-eslint/indent"                           : 0,
    "@typescript-eslint/no-explicit-any"                  : 0,
    "@typescript-eslint/no-misused-promises"              : 0,
    "@typescript-eslint/no-object-literal-type-assertion" : 0,
    "@typescript-eslint/no-this-alias"                    : 0,
    "@typescript-eslint/no-unsafe-assignment"             : 0,
    "@typescript-eslint/no-unsafe-call"                   : 0,
    "@typescript-eslint/no-unsafe-member-access"          : 0,
    "@typescript-eslint/no-unsafe-return"                 : 0,
    "@typescript-eslint/require-await"                    : 0,
    "@typescript-eslint/restrict-template-expressions"    : 0,
    camelcase                                             : 0,
    "comma-dangle"                                        : 2,
    "comma-spacing"                                       : [
      "error",
      {
        after  : true,
        before : false,
      },
    ],
    "func-names"                 : 0,
    "import/extensions"          : 0,
    "import/no-cycle"            : 0,
    "import/no-named-as-default" : 0,
    "import/no-unresolved"       : 0,
    "import/order"               : ["error", {
      alphabetize : { order: "asc", caseInsensitive: false },
      pathGroups  : [
        {
          pattern  : "@/**",
          group    : "external",
          position : "after",
        },
        {
          pattern  : "common/**",
          group    : "external",
          position : "after",
        },
      ],
      pathGroupsExcludedImportTypes: ["builtin"],
    }],
    indent: [
      "error",
      2,
    ],
    "key-spacing": [
      "error",
      {
        align: {
          afterColon  : true,
          beforeColon : true,
          on          : "colon",
        },
      },
    ],
    "linebreak-style"             : "error",
    "lines-between-class-members" : 0,
    "max-len"                     : [
      "error",
      { code: 160 },
    ],
    "no-multi-spaces"         : 2,
    "no-multiple-empty-lines" : [
      "error",
      {
        max    : 1,
        maxEOF : 0,
      },
    ],
    "no-param-reassign"    : 0,
    "no-throw-literal"     : 0,
    "no-trailing-spaces"   : "error",
    "no-underscore-dangle" : 0,
    "no-unused-vars"       : 0,
    "no-void"              : 0,
    "object-curly-newline" : [
      "error",
      { multiline: true },
    ],
    "object-curly-spacing": [
      "error",
      "always",
    ],
    quotes: [
      "error",
      "double",
    ],
    "require-jsdoc": [
      "error",
      {
        require: {
          ArrowFunctionExpression : false,
          ClassDeclaration        : true,
          FunctionDeclaration     : false,
          FunctionExpression      : false,
          MethodDefinition        : false,
        },
      },
    ],
    semi                  : "error",
    "space-before-blocks" : [
      "error",
      {
        classes   : "never",
        functions : "always",
        keywords  : "always",
      },
    ],
  },
};
