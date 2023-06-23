<script>
  import "$lib/assets/styles/global.css";
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Services from "$lib/components/Services.svelte";
  import Steps from "$lib/components/Steps.svelte";
</script>

<section class="header">
  <Header />
</section>

<section class="hero">
  <Hero />
</section>

<section class="service">
  <Services />
</section>

<section class="steps">
  <Steps />
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

  .service{
    padding: 2rem 5rem;
    min-height: 90vh;
    background: #E8D8FD;
    position: relative;
    padding-bottom: 50px;
  }

  .steps{
    padding: 2rem 5rem;
    min-height: 100vh;
    
  }
</style>
