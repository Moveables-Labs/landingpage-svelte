<script>
  import "$lib/assets/styles/global.css";
  import Header from "$lib/components/about/aboutheader.svelte";
  import AboutHero from "$lib/components/about/about-hero.svelte";
  import Explain from "$lib/components/about/explain.svelte";
  import AboutFeatures from "$lib/components/about/aboutfeatures.svelte";
  import Join from "$lib/components/about/join.svelte";
  import Footer from "$lib/components/Footer.svelte";

</script>

<section class="bground">
  <section class="header">
    <Header />
  </section>
  
  <section class="hero">
    <AboutHero />
  </section>
</section>

<section class="explain">
  <Explain />
</section>

<section class="features">
  <AboutFeatures />
</section>

<section class="join">
  <Join />
</section>

<!-- <section class="footer">
<Footer />
</section> -->

<style>

  .bground{
    background:linear-gradient(0deg, rgba(113, 29, 249, 0.45), rgba(113, 29, 249, 0.45)), url("/images/about-hero.svg");
    background-size: cover;
    }

  .header {
    padding: 2rem 5rem;
    min-height: 5vh;
  }

  .hero {
    padding: 2rem 5rem;
    height: 100%;
    /* background: linear-gradient(180deg, var(--overlay), transparent),
      url("/images/overlay.svg") no-repeat center center / cover; */
  }

  .explain {
    padding: 2rem 5rem;
    padding-bottom: 1rem;
    height: 100%;
    background: #fff;
  }

  .features {
    height: 100%;
    background: var(--background);
    padding: 2rem 5rem;
  }

  .join {
    height: 100%;
    padding: 0rem 5rem;
  }

  .footer {
    min-height: 50vh;
    padding: 2rem 5rem;
  }

  @media (max-width: 767px) {
    .bground{
    background:linear-gradient(0deg, rgba(113, 29, 249, 0.45), rgba(113, 29, 249, 0.45)), url("/images/about-hero-mobile.svg");
    background-repeat: no-repeat;
    background-position: center;
    }

    .hero {
      padding: 0rem 1rem;
    }

    .explain {
      padding: 0rem 1rem;
    }

    .features {
      padding: 0rem 1rem;
    }

    .join {
      padding: 0 1rem;
    }

    .header {
      padding: 1rem;
      padding-top: 1.2rem !important;
    }

    .footer {
      padding: 1rem 1rem;
    }
  }
</style>

