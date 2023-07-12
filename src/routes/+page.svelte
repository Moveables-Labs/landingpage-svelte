<script>
  import "$lib/assets/styles/global.css";
  import Header from "$lib/components/Header.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Services from "$lib/components/Services.svelte";
  import Steps from "$lib/components/Steps.svelte";
  import Features from "$lib/components/Features.svelte";
  import Waitlist from "$lib/components/Waitlist.svelte";
  import Blog from "$lib/components/Blog.svelte";
  import Footer from "$lib/components/Footer.svelte";
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

<section class="features">
  <Features />
</section>

<section class="waitlist">
  <Waitlist />
</section>

<section class="blog">
  <Blog />
</section>

<section class="footer">
  <Footer />
</section>

<style>
  .header {
    padding: 2rem 5rem;
    background-color: var(--overlay);
    min-height: 5vh;
  }

  .hero {
    padding: 2rem 5rem;
    height: 80vh;
    background: linear-gradient(180deg, var(--overlay), transparent),
      url("/images/overlay.svg") no-repeat center center / cover;
  }

  .service {
    padding: 2rem 5rem;
    min-height: 90vh;
    background: #e8d8fd;
    position: relative;
    padding-bottom: 50px;
  }

  .steps {
    padding: 2rem 5rem;
    min-height: 100vh;
  }

  .features {
    min-height: 100vh;
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

  .footer {
    min-height: 50vh;
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

    .blog {
      display: none;
    }
  }
</style>
