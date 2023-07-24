<script lang="ts">
  import type { Article } from "$lib/assets/scripts/custom_types";

  export let articles: Article[];
</script>

<section>
  <div class="heading">
    <h3>Latest Posts</h3>
  </div>

  <div class="container">
    {#each articles as article}
      <!-- the image of the article can be accessed with {article.img} -->
      <div
        class="blog"
        style="background-image:  linear-gradient( 
          rgba(10,10,10,.5), 
          rgba(255,255,255,.8) 
          ),url('{article.img}');"
      >
        <div class="content">
          <p>{article.title}</p>
          <a href={article.src}>Read More</a>
        </div>
      </div>
    {:else}
      <p>Nothing to see here</p>
    {/each}

    <div />
    <div />
  </div>
</section>

<style>
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
  }
  .heading {
    display: flex;
    justify-content: flex-start;
    align-items: start;
    width: 100%;
  }
  .heading h3 {
    font-size: 2.2rem;
    text-align: start;
    font-family: syne;
    font-weight: 600;
    padding-top: 0rem;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1.4rem;
    width: 100%;
    height: 100%;
    margin-top: 4%;
  }

  .blog {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
  }

  .content p {
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
    line-height: 1.7rem;
    font-family: Syne;
    letter-spacing: 2px;
    padding-bottom: 0.5rem;
  }

  a {
    font-size: 0.95rem;
    font-weight: bold;
    color: var(--text-hover);
  }

  @media (min-width: 320px) and (max-width: 727px) {
    .container {
      grid-template-columns: 1fr; /* Set to a single column */
      grid-template-rows: 0fr;
    }
  }
</style>
