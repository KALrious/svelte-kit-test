<script lang="ts">
	export let title = 'My Awsome Title';
</script>

<div
	class="mx-auto max-w-3xl px-3 pt-16 pb-20 before:absolute before:content-[''] before:w-full before:bg-gradient-to-b before:from-violet-300 before:to-sky-200 before:h-full before:top-0 before:left-0 before:-z-10"
>
	<div>
		<div>
			<div class="text-center">
				<h2>{title}</h2>
				<slot />
			</div>
		</div>
	</div>
</div>
