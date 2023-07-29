<script>
  import "$lib/assets/styles/global.css";
  import AboutHero from "$lib/components/about/about-hero.svelte";
  import Explain from "$lib/components/about/explain.svelte";
  import AboutFeatures from "$lib/components/about/aboutfeatures.svelte";
  import Join from "$lib/components/about/join.svelte";
</script>

<section class="hero">
  <AboutHero />
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

<style>
  .hero {
    padding: 2rem 5rem;
    height: 100%;
    background: linear-gradient(180deg, var(--overlay), transparent),
      url("/images/overlay.svg") no-repeat center center / cover;
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

  @media (max-width: 767px) {
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
  }
</style>

