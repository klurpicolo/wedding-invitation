import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
vite: {
	optimizeDeps: {
	  include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
	}
	// plugins: []
  }
export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
	}
});
