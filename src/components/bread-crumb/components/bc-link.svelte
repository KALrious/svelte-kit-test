<script>
	export let link = '';
	export let title = '';
</script>

<li class="after:content-['>']  after:text-xs after:right-3 right-3 mr-4">
	<a class="text-sky-400 font-medium inline-block relative pr-4 capitalize" href={link}>
		{title}
	</a>
</li>
