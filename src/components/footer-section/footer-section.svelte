<!-- <script lang="ts">
	import type { MainMenu } from 'src/components/footer-section/footer-section.type';

	export let mainMenu: MainMenu[];

	const links = mainMenu.map((link) => ({
		...link,
		url: link.url[0] === '#' ? `/${link.url}` : link.url
	}));
</script>

<footer className="footer pt-32 px-2">
	<div className="container max-w-3xl w-full md:max-w-5xl lg:max-w-7xl m-auto">
		<div className="row flex flex-wrap flex-col lg:flex-row">
			<div className="flex-1">
				<div className="footer-widget">
					<div className="mb-8">
						<a href="/">
							<Image width={50} height={50} src="/images/spider.png" alt="logo" />
						</a>
					</div>
					<p className="mb-6">On glisse ?🏄🏻‍♂️</p>
					<ul className="flex items-center gap-5">
						<li>
							<IconButton component="a" href="https://www.linkedin.com/in/jean-gautier/">
								<i className="lni lni-linkedin" />
							</IconButton>
						</li>
						<li>
							<IconButton component="a" href="https://twitter.com/kalrious">
								<i className="lni lni-twitter" />
							</IconButton>
						</li>
						<li>
							<IconButton component="a" href="https://github.com/KALrious">
								<i className="lni lni-github" />
							</IconButton>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex-1">
				<div className="footer-widget">
					<h3>About Us</h3>
					<ul className="links">
						{#each links as link}
							<li key={navLink.url}>
								<a href={navLink.url}>{navLink.label}</a>
							</li>
						{/each}
					</ul>
					<h6>Dev with the power of</h6>
					<Link href="https://buttercms.com">
						<a>
							<img className="h-8" src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" />
						</a>
					</Link>
				</div>
			</div>
			<div className="flex-1">
				<div className="flex flex-col">
					<h3 className="mt-3 mb-5">Subscribe Newsletter</h3>
					<form action="#" className="flex flex-col gap-3">
						<Input type="email" placeholder="Email" />
						<Button component="button">Subscribe</Button>
					</form>
				</div>
			</div>
		</div>
	</div>
</footer> -->
