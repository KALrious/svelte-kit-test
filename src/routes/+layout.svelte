<script lang="ts">
	import Header from './Header.svelte';
	import { onMount } from 'svelte';
	import './styles.css';
	import '../app.css';
	import FooterSection from '../components/footer-section/footer-section.svelte';
	import type { MainMenu } from '../components/footer-section/types/footer-section.type.js';
	/** @type {import('./$types').LayoutData} */
	export let data: { mainMenu: MainMenu[] };
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<FooterSection mainMenu={data.mainMenu} />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
