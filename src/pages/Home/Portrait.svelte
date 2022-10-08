<script lang="ts">
import { onMount } from "svelte/internal";
import { FunState, funStateStore } from "../../stores"

let currentImage: string
let currentIndex: number = 0
let allImages: string[] = []

onMount(() => {
    fetch("/json/portraits.json").then(resp => resp.json()).then(json => {allImages = json; currentImage = json[0]})
})

function mouseoverImage() {
    if ($funStateStore === FunState.Fun) {
        currentIndex++
        currentImage = allImages[currentIndex % allImages.length]
    }
}

function focusImage() {
    console.log("focus event on a picture of Nate")
}
</script>

<img src="{currentImage}" alt="me" on:mouseover={mouseoverImage} on:focus={focusImage}>