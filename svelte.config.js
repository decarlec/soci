import adapter from '@ptkdev/sveltekit-cordova-adapter';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			strict: false,
			platform: 'cordova'
		})
	}
};
export default config;
