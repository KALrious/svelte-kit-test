<script lang="ts">
	import MainMenuLinkComponent from './main-menu-link.svelte';
	import type { MainMenuLink } from './header-section.type';

	/**
	 *
	 *  Il faudra rajouter la nav en sémantique
	 *  faire le container du header
	 *  transformer function en const => return
	 *  mettre les sections navigation
	 */
	export let mainMenuLinks: MainMenuLink[];

	//TODO: manage navBar sticky
	let isNavbarSticky: boolean = false;
</script>

<header class={`relative top-0 w-full bg-white z-50 ${isNavbarSticky ? 'sticky' : ''}`}>
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<div
			class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
		>
			<nav class="flex justify-start lg:w-0 flex-1">
				<a href="/">
					<span class="sr-only">Kalrious Blog</span>
					<img class="h-8 w-auto sm:h-8" src="/images/spider.png" alt="home" />
				</a>
				<ul id="nav" class="flex flex-1 justify-end gap-4 mr-2">
					{#each mainMenuLinks as navLink}
						<MainMenuLinkComponent url={navLink.url} label={navLink.label} />
					{/each}
				</ul>
			</nav>
		</div>
	</div>
</header>
