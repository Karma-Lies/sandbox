<script>
	import P5 from '../components/canvas/P5.svelte';

	// Meta content
	let brand = 'Karma Lies';
	let title = 'Sandbox';
	let description = 'a little playground for generative art and shit 🥪';

	// Sketch properties
	let x = 55;
	let y = 55;
	let maxW = 0;
	let maxH = 0;

	/**
	 * p5 sketch for circle control bound to inputs
	 * @param p5 p5 instance
	 * @returns {void} nothin directly
	 */
	const sketch = (p5) => {
		p5.setup = () => {
			maxW = p5.windowWidth;
			maxH = p5.windowHeight;
			p5.createCanvas(maxW, maxH);
		};

		p5.draw = () => {
			p5.ellipse(x, y, 20, 20);
		};

		p5.windowResized = () => {
			maxW = p5.windowWidth;
			maxH = p5.windowHeight;
			p5.resizeCanvas(maxW, maxH);
		};
	};
</script>

<svelte:head>
	<title>{title} - {brand}</title>
	<meta name="description" content={description} />
	<meta name="og:title" content="{title} - {brand}" />
	<meta name="og:description" content={description} />
</svelte:head>

<div
	class="absolute flex flex-col space-y-1 p-1 m-3 bg-blue-100 rounded-md ring-2 ring-gray-100 ring-opacity-60 bg-opacity-40 backdrop-filter backdrop-blur-sm"
>
	<div>
		<label>
			X
			<input type="range" bind:value={x} min="0" max={maxW} step="0.01" />
		</label>
		<div class="w-10 inline-block font-mono text-blue-600">{~~x}</div>
	</div>

	<div>
		<label>
			Y
			<input type="range" bind:value={y} min="0" max={maxH} step="0.01" />
		</label>
		<div class="w-10 inline-block font-mono text-blue-600">{~~y}</div>
	</div>
</div>

<P5 {sketch} />
