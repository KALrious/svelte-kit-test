<script lang="ts">
	export let href = '';
</script>

{#if !href}
	<button
		class="text-2xl w-11 h-11 rounded-full bg-sky-300 text-black hover:text-white hover:bg-sky-500 hover:cursor-pointer flex justify-center items-center"
	>
		<slot />
	</button>
{:else}
	<a
		{href}
		class="text-2xl w-11 h-11 rounded-full bg-sky-300 text-black hover:text-white hover:bg-sky-500 hover:cursor-pointer flex justify-center items-center"
	>
		<slot />
	</a>
{/if}
