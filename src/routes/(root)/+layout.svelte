<script lang="ts">
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

<slot />

<section class="footer">
  <Footer {articles} />
</section>

<style>
  .footer {
    min-height: 50vh;
    padding: 2rem 5rem;
  }

  @media (max-width: 1110px) {
    .footer {
      padding: 1rem 1rem;
    }
  }
</style>
