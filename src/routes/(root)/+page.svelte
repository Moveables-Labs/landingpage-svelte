<script lang="ts">
  import type { ActionData, PageData } from "./$types";

  import "$lib/assets/styles/global.css";
  import Hero from "$lib/components/Hero.svelte";
  import Services from "$lib/components/Services.svelte";
  import Steps from "$lib/components/Steps.svelte";
  import Features from "$lib/components/Features.svelte";
  import Waitlist from "$lib/components/Waitlist.svelte";
  import Blog from "$lib/components/Blog.svelte";
  import type { Article } from "$lib/assets/scripts/custom_types";

  export let form: ActionData;
  export let data: PageData;

  let articles: Article[] = [];
  if (typeof data.articles !== "string") {
    articles = data.articles;
  } else {
    console.log(data.articles);
  }
</script>

<section class="hero">
  <Hero />
</section>

<section class="service">
  <Services />
</section>

<section class="steps">
  <Steps />
</section>

<section class="features">
  <Features />
</section>

<section class="waitlist">
  <Waitlist {form} />
</section>

<section class="blog">
  <Blog {articles} />
</section>

<style>
  .hero {
    padding: 2rem 5rem;
    height: 100%;
    background: linear-gradient(180deg, var(--overlay), transparent),
      url("/images/overlay.png") no-repeat center center / cover;
  }

  .service {
    padding: 2rem 5rem;
    height: 100%;
    background: #e8d8fd;
    position: relative;
    padding-bottom: 50px;
  }

  .steps {
    padding: 2rem 5rem;
    height: 100%;
  }

  .features {
    height: 100%;
    background: var(--background);
    padding: 2rem 5rem;
  }

  .waitlist {
    padding: 2rem 5rem;
    min-height: 40vh;
    background: #fff;
  }

  .blog {
    min-height: 60vh;
    background: var(--background);
    padding: 2rem 5rem;
  }

  @media (max-width: 376px) {
    .hero {
      height: 100% !important;
    }
    .service {
      height: 100%;
    }
  }

  @media (max-width: 1110px) {
    section {
      padding: 1rem !important;
    }

    .hero {
      height: 100%;
    }

    .service {
      height: 100%;
    }
  }
</style>
