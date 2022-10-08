<script lang="ts">
import Background from "./misc/Background.svelte"
import Hockey from "./pages/Hockey.svelte"
import Home from "./pages/Home.svelte"
import Pizza from "./pages/Pizza.svelte"
import Umbrella from "./pages/Umbrella.svelte"
import Router from "svelte-spa-router"
import ZoomWithMe from "./pages/ZoomWithMe.svelte";

const routes = {
	"/": Home,
	"/pizza": Pizza,
	"/umbrellas": Umbrella,
	"/hockey": Hockey,
	"/zoomwithme": ZoomWithMe
}
</script>

<main>
	<Background/>
	<Router {routes}/>
</main>

<style>
main {
	background-color: rgba(255, 255, 255, 0.5);
}
:global(a) {
	text-decoration: none;
    color:forestgreen;
}
:global(h1) {
	font-family: var(--HeaderFont);
}
</style>