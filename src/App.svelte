<script lang="ts">
import Background from "./misc/Background.svelte"
import Font from "./misc/Font.svelte"
import Hockey from "./pages/Hockey.svelte"
import Home from "./pages/Home.svelte"
import Pizza from "./pages/Pizza.svelte"
import Umbrella from "./pages/Umbrella.svelte"
import Router from "svelte-spa-router"
import ZoomWithMe from "./pages/ZoomWithMe.svelte";
    import Title from "./misc/Title.svelte";

const routes = {
	"/": Home,
	"/pizza": Pizza,
	"/umbrellas": Umbrella,
	"/hockey": Hockey,
	"/zoomwithme": ZoomWithMe
}
</script>

<main>
	<Title/>
	<Font>
		<Background slot="bg"/>
		<Router {routes} slot="router"/>
	</Font>
	
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
	color:forestgreen;
    border-style: none none solid none;
}
:global(section) {
	width: 75%;
    margin: 0% auto;
    padding: 1%;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 1% 0%;
    z-index: 2;
    position: relative;
}
:global(ol) {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0%;
}
:global(li) {
    display: inline-block;
    vertical-align: middle;
    padding: 1%;
    margin: 1% 1%;
    width: 15%;
}  
</style>