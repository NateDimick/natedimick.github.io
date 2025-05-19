<script lang="ts">
    import QuoteCard from "$lib/QuoteCard.svelte";
    import FancyFrame from "$lib/FancyFrame.svelte";

    async function fetchQuotes() {
        const res = await fetch("/json/quotebook.json")
        const list = await res.json()
        return list
    }
</script>
<div class="w-full justify-items-center">
    <FancyFrame pic="/img/cute.jpg" name="cute-rock" size="w-96 h-96"/>
    <div class="flex flex-col justify-items-center justify-center gap-y-4 my-4 w-full ">
        {#await fetchQuotes()}
            <p>loading...</p>
        {:then quoteList} 
            {#each quoteList as q, i}
            <div class="justify-items-center">
                <QuoteCard quote={q["quote"]} source={q["source"]}/>
            </div>
            {/each}
        {/await}
    </div>
</div>
