import { writable } from "svelte/store";

export enum FunState {
    Unfun = "UnFun",
    Normal = "Standard",
    Fun = "Fun"
}

export const funStateStore = writable(FunState.Normal)
export const s12nStateStore = writable(false)