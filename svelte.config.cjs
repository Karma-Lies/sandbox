const preprocess = require('svelte-preprocess');
const adapter = require('@sveltejs/adapter-netlify');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter(), // currently the adapter does not take any options
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};
