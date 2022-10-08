<script lang="ts">
import About from './Home/About.svelte'
import Footer from './Home/Footer.svelte'
import FunSlider from './Home/FunSlider.svelte';
import Header from './Home/Header.svelte'
import Projects from './Home/Projects.svelte'
import S12n from './Home/S12n.svelte';

</script>

<div>
    <Header/>
    <section>
        <About/>
        <!-- <FunSlider/>
        <S12n/> -->
        <Projects/>
    </section>
    <Footer/>
</div>

<style>
section {
    width: 75%;
    margin: 0% auto;
    padding: 1%;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 1% 0%;
    z-index: 2;
    position: relative;
}
:global(img) {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    object-fit: cover;
}
:global(.project-text) {
    width: 69%;
    display: inline-block;
    vertical-align: middle;
    text-align: justify;
    overflow: visible;
}
:global(.project-img) {
    width: 29%;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    overflow: visible;
}
:global(.flip) {
    -webkit-transform:  rotate(180deg);
    -moz-transform:  rotate(180deg);
    -ms-transform:  rotate(180deg);
    -o-transform:  rotate(180deg);
    transform:  rotate(180deg);
}
:global(.flip > div) {
    -webkit-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    -o-transform: rotate(-180deg);
    transform: rotate(-180deg);
}
@media (max-aspect-ratio: 1/1) {
    /*
    css changes for tall displays (e.g. phones) 
    */
    section {
        width: 90%;
        margin: 0% 5%;
    }
}
</style>