<script lang="ts">
import { onMount } from "svelte/internal";

type LinkSpec = {
    name: string,
    url: string
}
let links: LinkSpec[] = []
onMount(() => {
    fetch("/social.json")
    .then(resp => resp.json())
    .then(json => json.forEach(l => links = [...links, {name: l[0], url: l[1]}]))
})
</script>

<header>
    <h1>Nate Dimick</h1>
    <ol>
        {#each links as l}
            <li><a href="{l.url}">{l.name}</a></li>
        {/each}
    </ol>
</header>

<style>
header {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 1% 0%;
    z-index: 2;
    position: relative;
}
ol {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0%;
}
li {
    display: inline-block;
    vertical-align: middle;
    margin: 0% 1%;
    width: 4%;
}   
a {
    color: black;
    text-decoration: none;
}
h1 {
    text-align: center;
}
</style>