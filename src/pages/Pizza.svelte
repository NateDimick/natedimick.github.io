<script lang="ts">
import { onMount } from "svelte";

type PizzaScore = {
    name: string,
    location: string, 
    score: string
}

let pizzaScores: PizzaScore[] = []
onMount(() => {
    fetch("/json/pizza.json")
    .then(resp => resp.json())
    .then(json => json.forEach(p => pizzaScores = [...pizzaScores, {name: p[0], location: p[1], score: p[2]}]))
})
</script>

<header>
    <a href="/#"><div><p>Back to the main page</p></div></a>
    <h1>The Colatina Index</h1>
</header>
<section>
    <p>
        The Colatina Index (Col-I) is my rating system for Pizza Places. It rates all pizza relative to The Colatina Exit in Bradford, Vermont. The Colatina Exit, therefore, has a Col-I Score of 1. Other pizza places are rated on their relative quality compared to The Colatina. Pizza worse than The Colatina will be scored from 0 to 1. Pizza better than The Colatina will have a score greater than 1. A score of 1.1 can be considered 10% better than Colatina's pizza. A score of 0.5 is half as good.
    </p>
    <p>
        This scale does not say that Colatina is the best pizza, but rather the the Colatina Exit's pizza is the standard that all places should strive to match or exceed. 
    </p>
</section>
<section>
    <h2>
        Score Brackets
    </h2>
    <table>
        <thead>
            <tr>
                <th>Score Range</th>
                <th>Pizza Quality</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>&gt;1.0</td>
                <td>Excellent Pizza</td>
            </tr>
            <tr>
                <td>1.0 to 0.75</td>
                <td>Great Pizza</td>
            </tr>
            <tr>
                <td>0.75 to 0.60</td>
                <td>Okay Pizza</td>
            </tr>
            <tr>
                <td>0.60 to 0.35</td>
                <td>Disappointing Pizza</td>
            </tr>
            <tr>
                <td> &lt;0.35</td>
                <td>Disgusting Pizza</td>
            </tr>
        </tbody>
    </table>
</section>
<section>
    <h2>
        Rated Pizzas
    </h2>
    <table>
        <thead>
            <tr>
                <th>Place</th>
                <th>Location</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            {#each pizzaScores as p}
                <tr>
                    <td>{p.name}</td>
                    <td>{p.location}</td>
                    <td>{p.score}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</section>

<style>
table {
    align-content: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    border-collapse: collapse;
}
tr {
    border-bottom: 2pt solid forestgreen;
}
td {
    width:225px;
    word-wrap: normal;
    margin-left: 1%;
    margin-right: 1%;
}   
</style>