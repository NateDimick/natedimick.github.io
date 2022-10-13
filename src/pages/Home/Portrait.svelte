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
        currentIndex = (currentIndex + 1) % allImages.length
        currentImage = allImages[currentIndex]
    }
}

function focusImage() {
    console.log("focus event on a picture of Nate")
}

$: {
    let currentLevel: FunState = $funStateStore
    switch (currentLevel) {
        case FunState.Fun:
            currentImage = allImages[currentIndex]
            break
        case FunState.Normal:
            currentImage = allImages[0]
            break
        case FunState.Unfun:
            currentImage = "./Pictures/meF.jpg"
            break
    }
}
</script>

<img src="{currentImage}" alt="me" on:mouseover={mouseoverImage} on:focus={focusImage}>