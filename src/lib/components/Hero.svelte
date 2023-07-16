<script>
// @ts-nocheck

  import Btn from "./Btn.svelte";
  import Features from "./Features.svelte";
</script>

<section class="hero">
  <div class="text-container">
    <h1>Instant Delivery service at your request</h1>
    <p>
      Delivery agents are ready to carry your goods to where you want it to be. Get the utmost satisfaction in every way
    </p>
    <div>
      <Btn>Get Started</Btn>
        <button onclick="window.location.href = '/about'">Learn More</button>
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
    min-height: 43vh;
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
    font-size: 2.1rem;
    font-family: Syne;
    font-weight: 600;
    line-height: 2.7rem;
    margin-bottom: 15px;
    flex: 1 0 0;
    width: 32rem;
    letter-spacing: 2px;  
  }

  .text-container p {
    width: 26rem;
    margin-bottom: 28px;
    font-size: 1rem;
    line-height: 1.5rem;
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



  @media (max-width: 767px){
    .hero{
      flex-direction: column;
    }

    .text-container{
      width: 100%;
      padding-bottom: 2rem;
    }

    .text-container h1{
      width: 100%;
      font-size: 1.83rem;
      line-height: 2.2rem;
      padding-top: 1rem;
      font-weight: 700;
      font-family: Manrope;
    }

    .text-container p{
      width: 100%;
      margin-bottom: 20px;
      line-height: 1.3rem;
      font-size: 0.91rem;
    }

    .text-container div{
      width: 100%;
      gap: 2rem;
    }

    button{
      width: 50%;
      padding: 0.94rem 1.25rem;
      border-radius: 5px
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
    max-width: 50%;
    position: relative;
    z-index: 0;
    left: -15%;
  }

  .image2 {
    z-index: 1;
    position: absolute;
    top: -10%;
    right: 14%;
    max-width: 50%;
  }

  .inter {
    position: absolute;
    top: -10%;
    left: -1%;
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

@media (min-width: 630px) and (max-width: 1110px) {
  .hero{
    flex-direction: column;
  }

  .photo-container{
    margin-top: 3rem;
    width: 100%;
  }

  .text-container{
    width: 100%;
    margin-bottom: 2rem;
  }

  .text-container h1{
    width: 90%;
  }

  button {
    color: white;
    font-weight: normal;
    width: 50%;
    border: none;
    border-radius: 50px;
    padding: 1.2rem 1.5rem;
    background: #d8bbfe;
    cursor: pointer;
    letter-spacing: 1px;
  }

  
  .image1 {
    max-width: 30%;
    position: relative;
    z-index: 0;
    left: -10%;
  }

  .image2 {
    z-index: 1;
    position: absolute;
    top: -10%;
    right: 19%;
    max-width: 30%;
  }

  .inter {
    position: absolute;
    top: -10%;
    left: 20%;
    width: 20%;
    z-index: 2;
  }

  .track {
    z-index: 2;
    width: 20%;
    position: absolute;
    right: 10%;
    bottom: 1%;
    user-select: none;
  }

}
</style>

