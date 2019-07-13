module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended"
  ],
  rules: {
    "@typescript-eslint/indent": ["error", 2]
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  overrides: [
    {
      files: "./src/**/*.test.ts?(x)",
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    }
  ]
};
