<script lang="ts">
import { onMount } from "svelte/internal";
import { randInt } from "../../common"
    import Portrait from "./Portrait.svelte";

let facts: string[] = []

onMount(() => {
    let factIds: Set<number> = new Set()
    fetch("/json/facts.json")
    .then(resp => resp.json())
    .then(json => {
        console.log("generate 5 random index number")
        while (factIds.size < 5) {
            factIds.add(randInt(json.length));
        }
        console.log("get 5 random facts")
        json.forEach((f, i) => { if (factIds.has(i)) {facts = [...facts, f]}})
    })
})
</script>

<div class="flip">
    <div class="project-img">
        <Portrait/>
    </div>
    <div class="project-text">
        <h1>About Me</h1>
        <p>I'm <span id="rotating-title">a Software Engineer</span>. Here are five fast and fun facts that should tell you everything you need to know about me.</p>
        {#each facts as f, i}
            <p>{i + 1}. {f}</p>
        {/each}
    </div>
</div>

<style>
h1 {
    color: forestgreen;
    border-style: none none solid none;
    text-align: center;
}
@media (max-aspect-ratio: 1/1) {
    /*
    css changes for tall displays (e.g. phones) 
    */
    .project-text, .project-img {
        width: 99%;
    }
    .flip {
        -webkit-transform:  rotate(0deg);
        -moz-transform:  rotate(0deg);
        -ms-transform:  rotate(0deg);
        -o-transform:  rotate(0deg);
        transform:  rotate(0deg);
    }    
    .flip > div {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
}
</style>