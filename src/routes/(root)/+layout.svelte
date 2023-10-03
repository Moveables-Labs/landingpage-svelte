<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import type { PageData } from "./$types";
  import type { Article } from "$lib/assets/scripts/custom_types";

  export let data: PageData;

  let articles: Article[] = [];
  if (typeof data.articles !== "string") {
    articles = data.articles;
  } else {
    console.log(data.articles);
  }
</script>

<section class="header">
  <Header />
</section>
<slot />

<section class="footer">
  <Footer {articles} />
</section>

<style>
  .header {
    padding: 2rem 5rem;
    background-color: var(--overlay);
    min-height: 5vh;
  }

  .footer {
    min-height: 50vh;
    padding: 2rem 5rem;
  }

  @media (max-width: 1110px) {
    .header {
      padding: 1rem;
      padding-top: 1.2rem !important;
    }

    .footer {
      padding: 1rem 1rem;
    }
  }
</style>