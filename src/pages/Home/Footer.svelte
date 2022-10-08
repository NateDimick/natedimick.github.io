<script lang="ts">
import { onMount, text } from "svelte/internal";

type FooterItemSpec = {
    isLink: Boolean, 
    text: string,
    url?: string
}
let items: FooterItemSpec[] = []

onMount(() => {
    fetch("/footer.json")
    .then(resp => resp.json())
    .then(json => json.forEach(f => items = [...items, {isLink: f[0], text: f[1], url: f[2]}]))
})
</script>

<footer>
    <ol>
        {#each items as f }
            {#if f.isLink}
                <li><a href="{f.url}">{f.text}</a></li>
            {:else}
                <li>{f.text}</li>
            {/if}
        {/each}
    </ol>
</footer>

<style>
footer {
    z-index: 2;
    position: relative;
    width: 75%;
    margin: 0% 12.5%;
    padding: 1%; 
    height: 2%; 
    background-color: rgba(255, 255, 255, 0.5);
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
    padding: 1%;
    display: inline-block;
    vertical-align: middle;
    margin: 1% 1%;
    width: 15%;
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