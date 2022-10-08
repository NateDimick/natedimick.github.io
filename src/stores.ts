import { writable } from "svelte/store";

export enum FunState {
    Normal,
    Fun,
    Unfun
}

export const funStateStore = writable(FunState.Normal)
export const s12nStateStore = writable(false)