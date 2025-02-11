import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  prefix: 'fe-xelix',
  include: [
    '../../node_modules/@repo/ui/dist/panda.buildinfo.json',
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  importMap: "@repo/styled-system"
});
