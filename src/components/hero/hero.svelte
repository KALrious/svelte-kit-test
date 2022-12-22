<script lang="ts">
	import WhiteWave from '../svg/white-wave.svelte';

	export let headline: string;
	export let subHeadline: string;
	export let scrollAnchorId: string;
</script>

<section id={scrollAnchorId} class="relative">
	<div
		class="mx-auto max-w-3xl px-3 pt-16 pb-20 before:absolute before:content-[''] before:w-full before:bg-gradient-to-b before:from-violet-300 before:to-sky-200 before:h-full before:top-0 before:left-0 before:-z-10"
	>
		<WhiteWave className="fill-white	left-0 w-full bottom-0 absolute" />
		<div class="flex flex-col gap-4">
			<h1>{headline}</h1>
			<p>{subHeadline}</p>
		</div>
	</div>
</section>
