<script>
	export let href = '';
	export let label = '';
</script>

{#if !href}
	<button
		class="fixed w-11 h-11 bottom-8 right-8 rounded-md bg-sky-500 text-white hover:opacity-80 hover:cursor-pointer flex justify-center items-center"
	>
		{label}
	</button>
{:else}
	<a
		{href}
		class="fixed w-11 h-11 bottom-8 right-8 rounded-md bg-sky-500 text-white hover:opacity-80 hover:cursor-pointer flex justify-center items-center"
	>
		{label}
	</a>
{/if}
