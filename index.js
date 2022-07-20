module.exports = {
  rules: {
    // Enforce the consistent use of either backticks, double, or single quotes
    quotes: ['error', 'single'],
    // Enforce the consistent use of either function declarations or expressions
    'func-style': [
      'error',
      'expression',
      {
        allowArrowFunctions: true,
      },
    ],
    // Enforces return statements in callbacks of array's methods
    'array-callback-return': [
      'error',
      {
        checkForEach: true,
      },
    ],
    // Disallow await inside of loops, should use Promise.all()
    // Disallow await inside of loops, should use Promise.all()
    'no-await-in-loop': 'error',
    // Allow non-explicit return types on functions and class methods
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Allow non-explicit return types on exported functions
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Disallow usage of the any type
    '@typescript-eslint/no-explicit-any': 1,
    // Restricts the types allowed in boolean expressions
    '@typescript-eslint/strict-boolean-expressions': 'error',
    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
      },
    ],
    // Error on declared but not used variable
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
