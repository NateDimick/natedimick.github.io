<script lang="ts">
    import ProjectCard from "$lib/ProjectCard.svelte";

    let carouselProjects: string[] = [
        "c4uv",
        "hday",
        "bipi",
        "tt",
        "pkmn",
        "chup"
    ]

    function nextSlide(i: number): number {
        if ( i === carouselProjects.length - 1) {
            return 0
        }
        return i + 1
    }

    function lastSlide(i: number): number {
        if (i === 0) {
            return carouselProjects.length - 1
        }
        return i - 1
    }
</script>

<h2 class="text-primary text-center text-3xl">What I'm working on right now...</h2>
<div class="flex lg:flex-row flex-col w-full my-2">
    <ProjectCard id="deka"/>
    <div class="divider-accent lg:divider-horizontal divider"></div>
    <ProjectCard id="panda"/>
</div>
<div class="divider-accent divider"></div>
<h2 class="text-primary text-center text-3xl">Other things I've built</h2>
<div class="carousel w-full my-2">
    {#each carouselProjects as cp, i}
        <div class="carousel-item relative w-full" id="slide{i}">
            <ProjectCard id={cp}/>
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide{lastSlide(i)}" class="btn btn-circle">❮</a>
                <a href="#slide{nextSlide(i)}" class="btn btn-circle">❯</a>
            </div>
        </div>
    {/each}
</div>