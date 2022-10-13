<script lang="ts">
import { FunState, funStateStore } from "../../stores"

let funSliderLevel: number = Object.values(FunState).indexOf($funStateStore)
let funSliderPercent: number = 50 
$: {
    funSliderPercent = funSliderLevel / 2 * 100
}

function updateFunState() {
    let newFunState: FunState = Object.values(FunState)[funSliderLevel]
    funStateStore.set(newFunState)
}
</script>

<div style="--SliderPercent: {`${funSliderPercent}%`}">
    <h1>Fun Level</h1>
    <h2 id="fun-level">Current Level: {$funStateStore}</h2>
    <input type="range" name="" min="0" max="2" bind:value={funSliderLevel} on:input={updateFunState}>
</div>


<style>
h1 {
    color: forestgreen;
    border-style: none none solid none;
    text-align: center;
}
h2 {
    text-align: center;
}
input {
    -webkit-appearance: none;
    --SliderColor: forestgreen;
    width: 25%;
    height: 10px;
    margin-left: 37.5%;
    margin-right: 37.5%;
    background: linear-gradient(to right, var(--SliderColor) 0%, var(--SliderColor) var(--SliderPercent), gainsboro var(--SliderPercent), gainsboro 100%);
    border-radius: 5px;
}

input::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: pointer;
    background: var(--SliderColor);
    border-radius: 50%;
    width: 16px;
    height: 16px;
}

input::-moz-range-thumb {
    cursor: pointer;
    background: var(--SliderColor);
    border-radius: 50%;
    width: 16px;
    height: 16px;
}
</style>