<script lang="ts">
    export let quote: string = ""
    export let source: string = ""
</script>

<div class="card bg-neutral text-primary border-primary border-solid border lg:w-1/2 w-3/4">
    <div class="card-body text-center">
        <p>"{quote}"</p>
        <p class="text-right">- {source}</p>
    </div>
</div>