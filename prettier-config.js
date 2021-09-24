module.exports = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 120,
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.tsx',
      ],
      options: {
        parser: 'typescript',
      },
    },
  ],
};
