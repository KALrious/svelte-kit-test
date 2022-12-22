<script lang="ts">
	import clsx from 'clsx';

	export let className = '';
	export let placeholder = '';
	export let type: 'email' | 'button' = 'email';
</script>

<input
	class={clsx('border border-solid border-sky-500 bg-sky-50 rounded-xl px-5 py-4', className)}
	{placeholder}
	{type}
/>
