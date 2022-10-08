<script lang="ts">
import { onMount } from 'svelte/internal'
import { randInt } from '../common'
const numCircles: number = 10;
let arcs: ArcSpec[] = []

type ArcSpec = {
    radius: number,
    dashArray: string,
    dashOffset: number,
    direction: string,
    duration: string
}

onMount(() => {
    for (let i = 0; i < numCircles; i++) {
        let circumference = Math.ceil(2 * randInt(Math.max(window.innerHeight / 2, window.innerWidth / 2)) * Math.PI)
        let arcLength = randInt(circumference / 2) + circumference / 6
        let c: ArcSpec = {
            radius: Math.ceil(circumference / 2 / Math.PI),
            dashArray: `${arcLength} ${circumference}`,
            dashOffset: randInt(circumference - arcLength),
            direction: randInt(2) === 1 ? "normal" : "reverse",
            duration: `${randInt(10) + 5}s`
        }
        arcs = [...arcs, c]
    }
})
</script>

<svg id="background">
    {#each arcs as a}
        <circle cx="50%" cy="50%" r="{a.radius}" style="stroke-dasharray: {a.dashArray}; stroke-dash-offset: {a.dashOffset}; animation-direction: {a.direction}; animation-duration: {a.duration}"></circle>
    {/each}
</svg>

<style>
svg {
    background-color: whitesmoke;
    width: 100%;
    height: 100%;
    position: fixed; 
    left: 0px;
    top: 0px;
    z-index: -1;
}
circle {
    fill: none;
    stroke: forestgreen;
    stroke-width: 6;
    animation: rot;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    transform-origin: 50% 50%;
}
@keyframes rot { 
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    } 
}
@keyframes growRot {
    0% {
        transform: scale(0) rotate(0deg);
    }
    100% {
        transform: scale(5) rotate(360deg);
    }
}
</style>