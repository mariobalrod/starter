/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  bracketSpacing: true,
  bracketSameLine: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
};

export default config;
