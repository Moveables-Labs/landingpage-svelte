<script lang="ts">
  import type { ActionData } from "./$types";

  import { page } from "$app/stores";
  import "$lib/assets/styles/global.css";
  import Confirmation from "$lib/components/dropdown/confirmation.svelte";

  const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  export let form: ActionData;
</script>

<section class="form">
  <section class="form-container">
    <div class="content">
      <div class="listed">
        <img src="/icons/logo-white.svg" alt="" />
        <p>Every dispatch rider earns more with moveables</p>
        <div class="small-icons">
          <div class="circle"><img src="/icons/bike-white.svg" alt="" /></div>
          <div class="line" />
          <div class="circle"><img src="/icons/van-white.svg" alt="" /></div>
          <div class="line" />
          <div class="circle"><img src="/icons/truck-white.svg" alt="" /></div>
        </div>
      </div>
    </div>

    <div class="waitlist-group mobile">
      <div class="go-back">
        <div>
          <img src="/icons/backspace-icon.svg" alt="" />
          <a href="/">Go back</a>
        </div>
      </div>

      <form method="post">
        {#if $page.params.slug == "individual"}
          <h1>Individual dispatcher form</h1>
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        {:else}
          <h1>Company's dispatch form</h1>
          <label for="company">Company's Name</label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Name LTD"
            required
          />
        {/if}

        <label for="tel">Phone no.</label>
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="+234"
          minlength="11"
          maxlength="14"
          required
        />
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          required
        />
        <label for="state">State</label>
        <div class="location">
          <select name="state" id="state">
            <!-- <option value="" disabled selected>State</option> -->
            {#each states as state}
              <option value={state}>{state}</option>
            {/each}
          </select>
          <div>Edo</div>
        </div>

        {#if $page.params.slug == "individual"}
          <input type="text" name="tag" value="Individual" hidden />
        {:else}
          <input type="text" name="tag" value="Company" hidden />
        {/if}

        <div class="delivery">
          <p>Delivery method</p>
          <ul>
            <li>
              <input type="checkbox" id="myCheckbox1" />
              <label for="myCheckbox1" class="checkbox"><img src="/icons/bike-delivery.svg" alt="Scooter"/></label>
            </li>
            <li>
              <input type="checkbox" id="myCheckbox2" />
              <label for="myCheckbox2" class="checkbox"><img src="/icons/car-delivery.svg"  alt="Car"/></label>
            </li>
            <li>
              <input type="checkbox" id="myCheckbox3" />
              <label for="myCheckbox3" class="checkbox"><img src="/icons/keke-delivery.svg" alt="Keke"/></label>
            </li>
          </ul>
        </div>

        <button class="submit" type="submit"> Join waitlist </button>
      </form>
    </div>
  </section>
</section>

{#if form?.success}
  <Confirmation />
{/if}

<style>
  .form {
    padding: 1rem 2rem !important;
    height: 100%;
    background: linear-gradient(
      60deg,
      #3c0f84 21.46%,
      #200846 45%,
      white 40%,
      white 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-container {
    display: flex;
    gap: 2rem;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .content {
    display: flex;
    flex-direction: row;
    width: 70%;
  }

  .listed {
    display: flex;
    flex-direction: column;
    gap: 15rem;
    width: 50%;
  }

  .listed img {
    width: 40px;
    margin-top: 30px;
  }

  .listed p {
    font-size: clamp(1rem, 35px, 30px);
    font-family: Syne !important;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    color: #fff;
    letter-spacing: 2px;
    width: 90%;
  }

  .small-icons {
    display: flex;
    width: 80%;
  }

  .circle img {
    width: 33px;
    border: 1px solid white;
    border-radius: 30px;
    padding: 5px;
  }

  .line {
    width: 30px;
    height: 1px;
    background: white;
    margin-top: 45px;
  }

  .customer {
    position: absolute;
    bottom: 4%;
    left: -2%;
    width: 75rem;
    height: 48rem;
    z-index: 0;
  }

  .waitlist-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-right: 1rem;
  }

  .go-back div {
    display: flex;
    gap: 0.4rem;
    padding-top: 2rem;
    z-index: 99;
    font-size: 1rem;
    font-weight: normal;
  }

  .go-back a img {
    width: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
  }

  form h1 {
    font-size: 40px;
    font-family: Syne;
    font-weight: bold;
    line-height: normal;
    width: 80%;
  }

  form input {
    outline: none;
    border: 0.834px solid #f8f3ff;
    border-radius: 12px;
    background: #ececec;
    padding: 1rem 1.35rem;
  }

  .location {
    display: flex;
    justify-content: space-between;
  }

  .location select {
    outline: none;
    border: 0.834px solid #f8f3ff;
    border-radius: 12px;
    background: #ececec;
    padding: 1rem 1.35rem;
  }

  .location div {
    outline: none;
    border: 0.834px solid #f0f0f0;
    border-radius: 12px;
    padding: 1rem 2.2rem;
  }

  .submit {
    width: 100%;
    padding: 0.94rem 1.2rem;
    border-radius: 4px;
    outline: none;
    border: none;
    background: #711df9;
    box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 1px;
    line-height: 1.25rem;
    cursor: pointer;
    margin-top: 8px;
    margin-left: 4px;
  }

  .submit:hover {
    background-color: #5f18d1;
    transition: ease-in-out 200ms;
  }

  ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 2.2rem;
  margin: auto;
  padding-top: 0.5rem;
  }

  input[type="checkbox"][id^="myCheckbox"] {
    display: none;
  }

  .checkbox {
    border: 1px solid #fff;
    padding: 10px 18px;
    margin: auto;
    display: block;
    position: relative;
    cursor: pointer;
    background: #ECECEC;
    border-radius: 0.646rem;
  }

  .checkbox:before {
    background-color: white;
    color: white;
    content: " ";
    display: block;
    border-radius: 50%;
    border: 1px solid grey;
    position: absolute;
    top: -5px;
    left: -5px;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 28px;
    transition-duration: 0.4s;
    transform: scale(0);
  }

  .checkbox img {
    height: 60px;
    width: 65px;
    transition-duration: 0.2s;
    transform-origin: 50% 50%;
  }

  :checked + .checkbox {
    border-color: #ddd;
  }

  :checked + .checkbox:before {
    content: "✓";
    background-color: #711df9;
    transform: scale(1);
  }

  :checked + .checkbox img {
    transform: scale(0.9);
    /* box-shadow: 0 0 5px #333; */
    z-index: -1;
  }

  @media (max-width: 1110px) {
    .form {
      background: #fff;
      padding: 0rem 2rem !important;
    }
    .mobile {
      display: block;
      width: 100% !important;
      height: 100%;
      margin: 0px auto !important;
      padding: 0rem 0.5rem;
    }

    form h1 {
      font-size: 1.85rem;
      width: 100%;
      padding-top: 10px;
      margin-bottom: 12px;
    }

    .waitlist-group {
      width: 100%;
    }

    .go-back {
      padding-top: 0rem !important;
      margin-bottom: 1rem;
    }

    form {
      width: 100% !important;
    }

    .content {
      display: none !important;
    }

    .submit {
      width: 80%;
      border-radius: 10.336px;
      margin: 0 auto;
      margin-top: 12px;
      margin-bottom: 22px;
    }

    ul{
      gap: 1.1rem;
    }

    /* .checkbox{
      width: 50px;
      height: 50px;
    } */

    .checkbox img{
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 320px){
    .checkbox img{
      width: 35px;
      height: 35px;
    }

    ul{
      gap: 0.8rem;
    }
  }
</style>
