<script lang="ts">
import { onMount } from "svelte/internal";

type ProjectSpec = {
    name: string,
    link: string,
    id: string,
    image: string,
    text: string
}
let projects: ProjectSpec[] = []

onMount(() => {
    fetch("/json/projects.json").then(resp => resp.json()).then(json => projects = json)
})
</script>

<div>
    <h1 id="ptitle">Things I've Worked On</h1>
    {#each projects as p, i}
        <div class="{i % 2 == 1 ? 'flip': ''}" id="wrapper">
            <div class="project-img">
                <img src="{p.image}" alt="{p.id}">
            </div>
            <div class="project-text">
                <h1><a href="{p.link}">{p.name}</a></h1>
                <p>{@html p.text}</p>`
            </div>
        </div>
    {/each}
</div>

<style>
h1 {
    color: forestgreen;
    text-align: center;
}
div {
    text-align: center;
}
img {
    width: 125px;
    height: 125px;
}
#wrapper {
    padding: 1%;
}
#ptitle {
    border-style: none none solid none;
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