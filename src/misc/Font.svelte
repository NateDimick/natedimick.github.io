<script lang="ts">
import {FunState, funStateStore } from "../stores"

enum Font {
    Normal = "--NormalFont",
    Fun = "--FunFont",
    UnFun = "--UnFunFont",
    Header = "--NormalHeaderFont"
}
let ff: Font = Font.Normal
let hf: Font = Font.Header
$: {
    let currentLevel: FunState = $funStateStore
    switch (currentLevel) {
        case FunState.Normal:
            ff = Font.Normal
            hf = Font.Header
            break
        case FunState.Fun:
            ff = Font.Fun
            hf = Font.Fun
            break
        case FunState.Unfun:
            ff = Font.UnFun
            hf = Font.UnFun
            break
    }
}
</script>

<div style="font-family: var({ff}); --HeaderFont: var({hf})">
    <slot name="bg"/>
    <slot name="router"/>
</div>