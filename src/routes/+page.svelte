<script>
  import "$lib/assets/styles/global.css";
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Feature from "$lib/components/Feature.svelte";
</script>

<section class="header">
  <Header />
</section>

<section class="hero">
  <Hero />
</section>

<section class="feature">
  <Feature />
</section>

<style>
  .header {
    padding: 2rem 5rem;
    background-color: var(--overlay);
    min-height: 5vh;
  }

  .hero{
    padding: 2rem 5rem;
    min-height: 90vh;
    background: linear-gradient(180deg, var(--overlay), transparent),
                url('/images/overlay.svg') no-repeat center center / cover;
  }

  .feature{
    padding: 2rem 5rem;
    min-height: 70vh;
    background: #E8D8FD;
  }
</style>
