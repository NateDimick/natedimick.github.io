<script lang="ts">
import { onMount } from "svelte/internal";

type LinkSpec = {
    name: string,
    url: string
}
let links: LinkSpec[] = []
onMount(() => {
    fetch("/json/social.json")
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
li {
    margin: 0% 1%;
    width: 4%;
    padding: 0%;
}  
a {
    color: black;
    text-decoration: none;
}
h1 {
    text-align: center;
    border-style: none;
    color: black;
}
@media (max-aspect-ratio: 1/1) {
    /*
    css changes for tall displays (e.g. phones) 
    */
    li {
        width: 40%;
        margin: 1%;
    }
}
</style>