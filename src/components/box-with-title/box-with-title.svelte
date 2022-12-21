<script lang="ts">
	let title = 'Title';
</script>

<div>
	<div class="bg-white z-10 shadow-custom p-8 relative overflow-hidden mb-8 rounded-2xl">
		<h5 class="mb-8 font-semibold relative z-10">{title}</h5>
		<slot />
	</div>
</div>
