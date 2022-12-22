<script lang="ts">
	//TODO: manage custom path @ stuf
	import SearchIcon from '../icons/search-icon.svelte';
	export let href = '';
</script>

<form action={href} method="get" class="relative">
	<input
		name="query"
		type="text"
		placeholder="Search Here..."
		class="bg-transparent w-full text-sm font-normal h-14 py-0 pr-[70px] pl-8 border border-sky-500 rounded-md"
	/>
	<button
		type="submit"
		class="absolute flex items-center justify-center right-[6px] top-[6px] w-11 h-11 font-normal text-white p-0 bg-sky-500 border-none rounded-md"
	>
		<SearchIcon />
	</button>
</form>
