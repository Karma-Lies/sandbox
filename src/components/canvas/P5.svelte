<script>
	import { onMount, createEventDispatcher } from 'svelte';
	import placeholder from './placeholder.js';

	// API properties
	export let project = undefined;
	export let target = undefined;
	export let sketch = placeholder;

	// Event generation
	const event = createEventDispatcher();
	const dispatch = {
		ref() {
			event('instance', {
				ref: target
			});
		},
		instance() {
			event('instance', {
				instance: project
			});
		},
		p5() {
			event('');
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

	/**
	 * When the client loads, create the p5 instance
	 */
	onMount(async () => {
		const { default: p5, Vector } = await import('p5');
		project = new p5((instance) => sketch(instance, Vector), target);

		// Initial event dispatching
		dispatch.ref();
		dispatch.instance();
	});
</script>

<div use:ref />

<style>
	div {
		display: inline;
		margin: 0;
	}
</style>
