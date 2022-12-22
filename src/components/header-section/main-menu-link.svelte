<script lang="ts">
	export let url = '';
	export let label = '';
</script>

<li class="typography-a:text-gray-600 hover:typography-a:text-black active:typography-a:text-black">
	<a href={`/${url}`}>{label}</a>
</li>
