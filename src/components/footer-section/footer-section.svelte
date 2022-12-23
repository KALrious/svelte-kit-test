<script lang="ts">
	import Button from 'src/components/button/Button.svelte';
	import type { MainMenu } from 'src/components/footer-section/footer-section.type';
	import IconButton from 'src/components/icon-button/icon-button.svelte';
	import Input from 'src/components/input/input.svelte';

	export let mainMenu: MainMenu[];

	const links = mainMenu.map((link) => ({
		...link,
		url: link.url[0] === '#' ? `/${link.url}` : link.url
	}));
</script>

<footer class="footer pt-32 px-2">
	<div class="container max-w-3xl w-full md:max-w-5xl lg:max-w-7xl m-auto">
		<div class="row flex flex-wrap flex-col lg:flex-row">
			<div class="flex-1">
				<div class="footer-widget">
					<div class="mb-8">
						<a href="/">
							<img width={50} height={50} src="/images/spider.png" alt="logo" />
						</a>
					</div>
					<p class="mb-6">On glisse ?🏄🏻‍♂️</p>
					<ul class="flex items-center gap-5">
						<li>
							<IconButton href="https://www.linkedin.com/in/jean-gautier/">
								<i class="lni lni-linkedin" />
							</IconButton>
						</li>
						<li>
							<IconButton href="https://twitter.com/kalrious">
								<i class="lni lni-twitter" />
							</IconButton>
						</li>
						<li>
							<IconButton href="https://github.com/KALrious">
								<i class="lni lni-github" />
							</IconButton>
						</li>
					</ul>
				</div>
			</div>
			<div class="flex-1">
				<div class="footer-widget">
					<h3>About Us</h3>
					<ul class="links">
						{#each links as link}
							<li>
								<a href={link.url}>{link.label}</a>
							</li>
						{/each}
					</ul>
					<h6>Dev with the power of</h6>
					<a href="https://buttercms.com">
						<img
							class="h-8"
							src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH"
							alt="butter cms logo"
						/>
					</a>
				</div>
			</div>
			<div class="flex-1">
				<div class="flex flex-col">
					<h3 class="mt-3 mb-5">Subscribe Newsletter</h3>
					<form action="#" class="flex flex-col gap-3">
						<Input type="email" placeholder="Email" />
						<Button>Subscribe</Button>
					</form>
				</div>
			</div>
		</div>
	</div>
</footer>
