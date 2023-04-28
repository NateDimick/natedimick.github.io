<script lang="ts">
import { onMount } from "svelte/internal";
import { randInt } from "../../common"

type LinkSpec = {
    name: string,
    url: string
}
let links: LinkSpec[] = []
let subtitle: string = ""
onMount(() => {
    fetch("/json/social.json")
    .then(resp => resp.json())
    .then(json => json.forEach(l => links = [...links, {name: l[0], url: l[1]}]))
    fetch("/json/websitetitles.json")
    .then(resp =>  resp.json())
    .then(json => subtitle = json[randInt(json.length)])
})
</script>

<header>
    <h1>Nate Dimick</h1>
    <h2>
        <span class="subtitletext" title="{subtitle}">"{subtitle}"</span>
    </h2>
    
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
.subtitletext {
    font-family: "feraldineregular";
    font-size: xx-large;
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