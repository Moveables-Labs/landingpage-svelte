<script lang="ts">
  import { onMount } from "svelte";

  let prevBtn: HTMLElement;
  let nextBtn: HTMLElement;
  let slides: HTMLElement;

  onMount(() => {
    prevBtn?.addEventListener("click", function (event) {
      event.preventDefault();
      slides?.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    });

    nextBtn?.addEventListener("click", function (event) {
      event.preventDefault();
      slides?.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    });
  });
</script>

<section>
  <div class="heading">
    <h3>We Offer a Wide Range Of Services.</h3>
  </div>
  <!--Web Slider Starts Here-->
  <div class="carousel">
    <div class="slider">
      <div class="slides" bind:this={slides}>
        <div id="card-1" class="card">
          <div>
            <img src="/images/Dispatch1.png" alt="" />
          </div>
          <div class="card-content">
            <div class="card-content-title">
              <img src="/icons/dis-cycle-logo.svg" alt="" />
              <h3>2.5k</h3>
            </div>

            <div class="card-content-desc">
              <h4>Bike Delivery</h4>
              <p>
                Sign up today to get access to our services as we connect you to
                your needs.
              </p>
            </div>
          </div>
        </div>

        <div id="card-2" class="card">
          <div>
            <img src="/images/dispatch-truck.png" alt="" />
          </div>
          <div class="card-content">
            <div class="card-content-title">
              <img src="/icons/truck.svg" alt="" />
              <h3>1k</h3>
            </div>

            <div class="card-content-desc">
              <h4>Truck Delivery</h4>
              <p>
                Sign up today to get access to our services as we connect you to
                your needs.
              </p>
            </div>
          </div>
        </div>

        <div id="card-3" class="card">
          <div class="irr">
            <img src="/images/dispatch-cycle.png" alt="" />
          </div>
          <div class="card-content">
            <div class="card-content-title">
              <img src="/icons/person.svg" alt="" />
              <h3>200+</h3>
            </div>

            <div class="card-content-desc">
              <h4>Door to Door Delivery</h4>
              <p>
                Sign up today to get access to our services as we connect you to
                your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Slider Previous and Next Buttons -->
      <div class="slider-but">
        <button class="prev" bind:this={prevBtn}
          ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><style>svg{fill:#ffffff}</style><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
          </button
        >
        <button class="next" bind:this={nextBtn}
          ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><style>svg{fill:#ffffff}</style><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
          </button
        >
      </div>
    </div>
  </div>
  <!--Web Slider ends here-->
  <!--Mobile starts here-->

  <div class="caro-sel">
    <div class="slider">
      <div class="slides">
        <div class="card-mob card-mob1">
          <div>
            <img src="/images/Dispatch1.png" alt="" />
          </div>
          <div class="card-mob-content">
            <div class="card-content-title">
              <img src="/icons/dis-cycle-logo.svg" alt="" />
              <h3>2.5k</h3>
            </div>

            <div class="card-content-desc">
              <h4>Bike Delivery</h4>
              <p>
                Sign up today to get access to our services as we connect you to
                your needs.
              </p>
            </div>
          </div>
        </div>

        <div class="card-mob">
          <div>
            <img src="/images/dispatch-truck.png" alt="" />
          </div>
          <div class="card-mob-content">
            <div class="card-content-title">
              <img src="/icons/truck.svg" alt="" />
              <h3>1k</h3>
            </div>

            <div class="card-content-desc">
              <h4>Truck Delivery</h4>
              <p>
                Sign up today to get access to our services as we connect you to
                your needs.
              </p>
            </div>
          </div>
        </div>

        <div class="card-mob">
          <div class="irr">
            <img src="/images/dispatch-cycle.png" alt="" />
          </div>
          <div class="card-mob-content">
            <div class="card-content-title">
              <img src="/icons/person.svg" alt="" />
              <h3>200+</h3>
            </div>

            <div class="card-content-desc">
              <h4>Door to Door Delivery</h4>
              <p>
                Sign up today to get access to our services as we connect you to
                your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Slider Previous and Next Buttons -->
      <div class="slider-but">
        <button class="prev"
          ><i
            class="fa-solid fa-chevron-left"
            style="color: #fafafa;"
          /></button
        >
        <button class="next"
          ><i
            class="fa-solid fa-chevron-right"
            style="color: #fafafa;"
          /></button
        >
      </div>
    </div>
  </div>
</section>

<style>
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .heading {
    font-size: 1.8rem;
    line-height: 2.5rem;
    max-width: 65%;
    text-align: center;
    font-family: Syne;
    margin-bottom: 1rem;
  }

  .carousel {
    width: 100%;
    margin-top: 1.4rem;
  }

  .caro-sel {
    width: 100%;
    margin-top: 1.4rem;
    display: none;
  }

  .slides {
    display: grid;
    grid-auto-flow: column;
    scroll-behavior: auto;
    gap: 4rem;
    overflow-y: hidden;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    padding-left: 3.5rem;
  }

  .slides::-webkit-scrollbar {
    display: none;
  }

  .card {
    display: flex;
    width: 44rem;
    height: 22rem;
    border-radius: 13px;
    background: #5e17cf;
    transition: 2s;
    scroll-snap-type: start;
  }

  .card img {
    height: 100%;
    margin-left: -2%;
    justify-content: flex-start;
  }

  .irr img {
    height: 102%;
    margin-top: -1%;
  }

  .card-content {
    width: 50%;
    flex-direction: column;
    color: var(--text-light);
    margin-top: 0%;
    margin-left: 2%;
    margin-bottom: 10%;
  }

  .card-content-title {
    display: flex;
    width: 95%;
    max-height: 30%;
    margin-top: 30%;
    align-items: center;
    gap: 3%;
    border-bottom: 1px solid #fff;
    padding-bottom: 1rem;
  }

  .card-content-title h3 {
    font-size: 1.5rem;
    font-family: Syne;
  }

  .card-content-title img {
    width: 45px;
    height: 45px;
  }

  .card-content-desc h4 {
    margin-top: 20px;
    font-size: 1.3rem;
    font-family: Syne;
    letter-spacing: 0.15rem;
    font-weight: 500;
    line-height: 1.5rem;
  }

  .card-content-desc p {
    font-family: Syne;
    max-width: 95%;
    margin-top: 10px;
    font-size: 0.95rem;
  }

  .card-mob {
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 30rem;
    border-radius: 22px;
    background: #5e17cf;
    transition: 2s;
    box-shadow: 2.530280590057373px 4.217134475708008px 8.434268951416016px 0px
      rgba(0, 0, 0, 0.3);
  }

  .card-mob img {
    width: 17.02rem;
    height: 16rem;
    margin-left: -0.2%;
  }

  .card-mob-content {
    width: 95%;
    color: var(--text-light);
    margin-bottom: 10%;
    margin-left: 2%;
  }

  .prev,
  .next {
    background: #5e17cf;
    border: none;
    border-radius: 22px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .prev:hover,
  .next:hover {
    background-color: var(--secondary-color);
  }

  .prev {
    margin-right: 10px;
  }

  .next {
    margin-left: 10px;
  }

  .slider-but {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1rem;
  }

  @media (min-width: 320px) and (max-width: 670px) {
    .heading {
      font-size: 1.05rem;
      max-width: 95%;
      padding-top: 1rem;
      line-height: 2rem;
      letter-spacing: 1px;
    }

    .card-mob img {
      height: 98%;
    }

    .card-content-title img {
      width: 35px;
      height: 35px;
    }

    .card-content-title {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      gap: 3%;
      border-bottom: 1px solid #fff;
      padding-bottom: 1rem;
      margin-top: 10%;
    }

    .card-content-desc h4 {
      margin-top: 15px;
      font-size: 1.1rem;
      font-family: Syne;
      letter-spacing: 0.1rem;
      font-weight: 500;
      margin-left: 0.4rem;
    }

    .card-content-desc p {
      margin-left: 0.4rem;
      font-size: 0.8rem;
      line-height: 1.2rem;
    }

    .irr img {
      width: 17.44rem;
      height: 100%;
      margin-left: -0.39rem;
    }

    .slides {
      gap: 2rem;
    }

    .card-mob1 {
      margin-left: -3rem;
    }

    .carousel {
      display: none;
    }

    .caro-sel {
      display: block;
    }
  }
</style>
