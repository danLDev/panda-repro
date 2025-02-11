import {  defineConfig } from '@pandacss/dev';

export default defineConfig({
  prefix: 'fe-xelix',
  importMap: "@repo/styled-system",
  include: ['./**/*.{js,jsx,ts,tsx}'],
});
