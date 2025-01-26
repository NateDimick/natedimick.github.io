<!--https://daisyui.com/components/navbar/-->
<script lang="ts">
    import { page } from "$app/state";
</script>
<div class="navbar bg-primary text-neutral justify-self-start margin-top-0">
    <div class="navbar-start">
        <div class=dropdown>
            <div tabindex="0" role="button" class="btn bg-primary border-none hover;bg-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content rounded-box z-[2] mt-3 w-52 p-2 shadow bg-primary">
                <li><a href="/">Home</a></li>
                <li><a href="/me">Me</a></li>
                <li><a href="/quotebook">Quotebook</a></li>
                <li><a href="/cheeseburger">Cheeseburger?</a></li>
                <li><a href="/umbrellas">Umbrellas</a></li>
              </ul>
        </div>
    </div>
    <div class="navbar-end">
        <h1 class="text-5xl">You Are Here -> {page.url}</h1>
    </div>
</div>

<style>
    path {
        fill: none;
        stroke: oklch(var(--n));
    }
</style>