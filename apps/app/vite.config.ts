import react from '@vitejs/plugin-react-swc';
import { defineConfig, } from 'vite';

export default defineConfig(({ mode, ...res }) => {

  return {
    plugins: [react()],
    server: {
      open: 'http://localhost:3000',
      port: 3000,
    },
    build: {
      outDir: 'build',
      target: 'es2022',
      sourcemap: true,
      rollupOptions: {
        external: ['@repo/styled-system'],
        
      },
    },
    
    
  };
});
