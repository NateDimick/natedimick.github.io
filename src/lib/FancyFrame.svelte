<script lang="ts">
    import { onMount } from "svelte";

    export let pic: string = ""
    export let size: string = "w-full h-full"
    export let name: string = ""
    let innerRadius: number = 0
    let outerRadius: number = 0
    let innerOffset: number = 0
    let outerOffset: number = 0
    let innerDash: string = ""
    let outerDash: string = ""
    onMount(() => {
        let img = document.getElementById(name)
        if (img === null) {
            console.log("javascript is lame")
            return
        }
        let baseDiameter: number = img.clientWidth - 96 // based on p-16 and --spacing 6
        let innerDiameter = baseDiameter
        innerRadius = innerDiameter / 2
        let outerDiameter = baseDiameter + 10
        outerRadius = outerDiameter / 2
        let innerCircumference = Math.ceil( innerDiameter * Math.PI)
        let outerCircumference = Math.ceil( outerDiameter * Math.PI)
        let innerArc = innerCircumference / 2
        let outerArc = outerCircumference / 2
        innerDash = `${innerArc} ${innerCircumference}`
        outerDash = `${outerArc} ${outerCircumference}`
        console.log(`${baseDiameter}`)
    })
</script>

<div class="flex items-center">
    <svg class="{size}">
        <circle cx="50%" cy="50%" r="{innerRadius}" style="stroke-dasharray: {innerDash}; stroke-dash-offset: {innerOffset}; animation-direction: normal; animation-duration: 6s"></circle>
        <circle cx="50%" cy="50%" r="{outerRadius}" style="stroke-dasharray: {outerDash}; stroke-dash-offset: {outerOffset}; animation-direction: reverse; animation-duration: 6s"></circle>
    </svg>
    
    <img src="{pic}" alt="" class="{size} object-cover rounded-full p-16" id="{name}">
</div>

<style>
svg {
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    z-index: 1;
}
circle {
    fill: none;
    stroke: oklch(var(--p));
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
</style>