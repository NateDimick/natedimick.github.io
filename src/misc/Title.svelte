<script lang="ts">
import { onMount } from "svelte/internal"
import { FunState, funStateStore } from "../stores"
import { randInt } from "../common"

let titles: string[] = []

$: {
    let currentLevel: FunState = $funStateStore
    if (currentLevel === FunState.Fun) {
        document.title = titles[randInt(titles.length)]
    } else if (currentLevel === FunState.Normal) {
        document.title = "Nate Dimick"
    } else if (currentLevel === FunState.Unfun) {
        document.title = "Nate Dimick's Infernal Lair of Secrets"
    }
}

onMount(() => {
    fetch("/json/websitetitles.json").then(resp => resp.json()).then(json => titles = json)
})
</script>