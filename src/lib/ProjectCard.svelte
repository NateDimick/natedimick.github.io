<script lang="ts">
    import FancyFrame from "./FancyFrame.svelte";
    import TechChip from "./TechChip.svelte";

    type ProjectSpec = {
        name: string,
        link: string,
        id: string,
        image: string,
        text: string,
        tech: string[],
        state: string
    }

    export let id: string = ""

    async function fetchProject(pid: string): Promise<ProjectSpec> {
        const res = await fetch("/json/projects.json")
        const list: ProjectSpec[] = await res.json()
        let p: ProjectSpec | null = null
        list.forEach(e => {
                if (e["id"] === pid) {
                    p = e
                }})
        if (p === null) {
            throw new Error("no project with given id")
        } else {
            return Promise.resolve(p)
        }
    }
</script>

<div class="card bg-neutral text-primary w-full">
{#await fetchProject(id)}
<div class="card-body">
    <p>loading...</p>
</div>
{:then p: ProjectSpec} 
    {#if p.image}
    <figure>
        <FancyFrame pic={p.image} name="{p.id}-img" size="w-64 h-64"></FancyFrame>
    </figure>
    {:else}
    <figure class="w-64 h-64">

    </figure>
    {/if}
    <div class="card-body">
        <h3 class="card-title">{p.name}</h3>
        <p>Status: {p.state}</p>
        <p>{@html p.text}</p>
        <div class="flex-wrap">
            {#each p.tech as t}
                <TechChip text={t}></TechChip>
            {/each}
        </div>
    </div>
{:catch error}
<div class="card-body">
    <p>Something went wrong. I blame Javascript. {error.message}</p>
</div>
{/await}
</div>