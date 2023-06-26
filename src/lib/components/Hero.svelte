<script>
  import Btn from "./Btn.svelte";
</script>

<section class="hero">
  <div class="text-container">
    <h1>Instant Delivery service at your request</h1>
    <p>
      Delivery agents are ready to carry your goods to where you want it to be. <br
      />Get the utmost satisfaction in every way
    </p>
    <div>
      <Btn>Get Started</Btn>
      <button>Learn More</button>
    </div>
  </div>

  <div class="photo-container">
    <img src="/images/inter-state.svg" alt="" class="inter" />
    <img
      src="/images/hero-image1.svg"
      alt="A man holding a package"
      class="image1"
    />
    <img
      src="/images/hero-image2.svg"
      alt="A woman holding a package"
      class="image2"
    />
    <img src="/images/track-card.svg" alt="" class="track" />
  </div>
</section>

<style>
  .hero {
    display: flex;
    width: 100%;
    min-height: 40vh;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    flex-shrink: 0;
  }

  .text-container h1 {
    font-size: 3.5rem;
    font-family: Syne;
    font-weight: 600;
    line-height: 4.25rem;
    margin-bottom: 15px;
    flex: 1 0 0;
    width: 38rem;
    letter-spacing: 2px;
  }

  .text-container p {
    width: 38rem;
    margin-bottom: 28px;
    font-size: 1.1rem;
    line-height: 2rem;
  }

  .text-container div {
    display: flex;
    gap: 14px;
  }

  button {
    color: white;
    font-weight: normal;
    width: 10rem;
    border: none;
    border-radius: 50px;
    padding: 0.85rem 1.5rem;
    background: #d8bbfe;
    cursor: pointer;
    letter-spacing: 1px;
  }

  button:hover {
    background: var(--btn-hover, #711df9);
  }

  button:active {
    background: var(--btn-active, #8d4afa);
  }

  .photo-container {
    display: flex;
    position: relative;
    justify-content: center;
    width: 50%;
  }

  .image1 {
    width: 40%;
  }

  .image2 {
    z-index: 1;
    position: absolute;
    top: -5%;
    right: 0%;
    width: 39%;
  }

  .inter {
    position: absolute;
    top: -5%;
    left: 23%;
    width: 25%;
  }

  .track {
    z-index: 2;
    width: 25%;
    position: absolute;
    right: -5%;
    bottom: 1%;
    user-select: none;
  }


  @media (max-width: 728px){
    .hero{
      flex-direction: column;
    }

    .text-container{
      width: 100%;
      padding-bottom: 2rem;
    }

    .text-container h1{
      width: 100%;
      font-size: 3rem;
      line-height: 3.25rem;

    }

    .text-container p{
      width: 100%;
      margin-bottom: 12px;
    }

    .text-container div{
      width: 100%;
      gap: 2rem;
    }

    button{
      width: 50%;
      padding: 0.94rem 1.25rem;
    }

    .photo-container {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
  }

  .image1 {
    width: 50%;
    position: relative;
    z-index: 0;
    left: -20%;
  }

  .image2 {
    z-index: 1;
    position: absolute;
    top: -10%;
    right: 8%;
    width: 48%;
  }

  .inter {
    position: absolute;
    top: -8%;
    left: 0%;
    width: 35%;
    z-index: 2;
  }

  .track {
    z-index: 2;
    width: 35%;
    position: absolute;
    right: 0;
    bottom: 1%;
    user-select: none;
  }


}
</style>

