<script lang="ts">
  import type { Article } from "$lib/assets/scripts/custom_types";

  let date = new Date().getFullYear();

  export let articles: Article[];
</script>

<footer class="footer">
  <div class="footer-row">
    <div class="footer-column text">
      <div class="logo">
        <a href="/">
          <div class="logo">
            <img src="/images/logo.svg" alt="logo" />
            <img src="/images/logo-text.svg" alt="logo-text" />
          </div>
        </a>
      </div>

      <p>We are committed to giving you the best delivery service.</p>

      <div class="socials">
        <a
          href="https://twitter.com/m0veables?s=20"
          target="_blank"
          class="dropdown-label-link"
        >
          <img src="/icons/twitter.svg" alt="" /></a
        >
        <a
          href="http://linkedin.com/company/moveables"
          target="_blank"
          class="dropdown-label-link"
        >
          <img src="/icons/linkedin.svg" alt="" />
        </a>
        <a
          href="https://www.instagram.com/move_ables/"
          target="_blank"
          class="dropdown-label-link"
        >
          <img src="/icons/instagram.svg" alt="" />
        </a>
      </div>
    </div>
    <div class="footer-column sec-col" />
    <div class="footer-column col about">
      <h4>About Us</h4>
      <ul>
        <a href="/about"><li>About Us</li></a>
        <a href="/#waitlist"><li>Join Waitlist</li></a>
      </ul>
    </div>
    <div class="footer-column col">
      <h4>Blog</h4>
      <ul>
        {#each articles as article}
          <a href={article.src}><li>{article.title}</li></a>
        {/each}
      </ul>
    </div>
    <div class="footer-column col last">
      <h4>Contact Us</h4>
      <ul>
        <a class="contact" href="mailto:moveables@gmail.com">
          <img src="/icons/mail.svg" alt="" />
          <li>moveables@gmail.com</li></a
        >

        <div class="contact">
          <img src="/icons/phone.svg" alt="" />
          <li>+234 554 665 7778</li>
        </div>

        <div class="contact">
          <img src="/icons/location.svg" alt="" />
          <li>Benin City, Edo State.</li>
        </div>
      </ul>
    </div>
  </div>
</footer>
<div class="copyright">
  <p>&#169 {date} All rights reserved. Moveables.</p>
</div>

<style>
  footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5rem 0rem;
    width: 100%;
    font-family: Manrope;
  }

  .footer-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
  }

  .footer-column {
    flex: 1 1 20%;
    max-width: 20%;
    margin-bottom: 1.5rem;
  }

  .text {
    max-width: 25%;
  }

  .sec-col {
    max-width: 10%;
  }

  .logo {
    display: inline-flex;
    gap: 10px;
  }

  .text p {
    font-size: 1rem;
    padding: 3rem 0;
    color: var(--footer-text);
    letter-spacing: 1px;
    line-height: 1.4rem;
  }

  .socials {
    display: inline-flex;
    gap: 2rem;
  }

  .col {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 1rem;
  }

  .col h4 {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--footer-text);
    font-weight: 600;
  }

  .col ul li {
    list-style-type: none;
    padding-bottom: 1rem;
  }

  .contact {
    display: inline-flex;
    gap: 1rem;
  }

  .contact img {
    width: 1.4rem;
    padding-bottom: 14px;
  }

  .copyright {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: end;
    border-top: 1px solid #686565;
  }

  .copyright p {
    padding-top: 1rem;
    color: var(--footer-text);
    letter-spacing: 1px;
    font-weight: 600;
    font-family: Manrope;
  }

  /* Media Queries */

  @media (max-width: 768px) {
    .footer-row {
      gap: 0.5rem;
    }

    .sec-col {
      display: none;
    }

    .footer-column {
      flex: 1 1 90%;
      max-width: 90%;
      gap: 0.8rem;
    }

    .text {
      max-width: 100%;
    }

    .col {
      flex-direction: column;
    }

    .last li {
      padding-left: 0.5rem;
    }
  }
</style>

