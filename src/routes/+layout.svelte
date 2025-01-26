<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import NavBar from '$lib/NavBar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex flex-col w-full min-h-screen justify-between" style="font-family: 'memoriesregular';">
	<NavBar></NavBar>
	<div class="flex-grow">
		{@render children()}
	</div>
	<Footer></Footer>
</div>

<style>
	:global(h1) {
		font-size: --var(--text-xl);
	}
</style>