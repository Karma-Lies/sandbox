<script>
	import { onMount, createEventDispatcher } from 'svelte';
	import placeholder from './placeholder.js';

	// API properties
	export let project = undefined;
	export let p5_instance = undefined;
	export let target = undefined;
	export let sketch = placeholder;

	// Event generation
	const event = createEventDispatcher();
	const dispatch = {
		ref() {
			event('ref', target);
		},
		instance() {
			event('instance', p5_instance);
		},
		project() {
			event('project', project);
		}
	};

	/**
	 * Creates a reference for the p5 instance to render within
	 * @param {HTMLElement} node
	 */
	function ref(node) {
		target = node;
		return {
			destroy() {
				target = undefined;
			}
		};
	}
	function augmentClasses(instance, classes) {
		classes.forEach(([key, value]) => (instance[key] = value));
		return instance;
	}

	/**
	 * When the client loads, create the p5 instance
	 */
	onMount(async () => {
		const library = await import('p5');
		const { default: p5 } = library;

		const entries = Object.entries(library);
		const nativeClasses = entries.filter(
			([key, value]) => value instanceof Function && key[0] !== '_' && key !== 'default'
		);

		project = new p5((instance) => {
			p5_instance = instance;

			dispatch.instance();
			// instance = augmentClasses(instance, nativeClasses);
			// p5_instance = instance;
			return sketch(instance);
		}, target);

		// Initial event dispatching
		dispatch.ref();
		dispatch.project();
	});
</script>

<div use:ref />

<style>
	div {
		display: inline;
		margin: 0;
	}
</style>
