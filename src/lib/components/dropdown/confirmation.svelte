<script lang="ts">
  let _popup: HTMLElement;

  function close_popup() {
    _popup.style.display = "none";
  }
</script>

<div class="confirmation" bind:this={_popup}>
  <section class="confirm-popup">
    <button on:click={close_popup}>
      <img src="/icons/cancel-icon.svg" alt="" class="cancel" />
    </button>

    <div class="confirm-content">
      <img src="/icons/approve.png" alt="" class="confirm-approve" />

      <h3>You’ve been added to the waiting list</h3>
      <p>We’ll let you know when Moveables is ready.</p>

      <div class="card">
        <div class="email">
          <img src="/icons/email.svg" alt="" />
          <p>moveable.startup@gmail.com</p>
        </div>
        <p class="text">Moveables is coming to you soon.</p>
        <p class="text">You’ve now joined our mailing list to get updates.</p>
      </div>
    </div>
  </section>

  <!--Mobile view popup-->
  <div class="popup" bind:this={_popup}>
    <button on:click={close_popup}>
      <img src="/icons/close-con.svg" alt="" class="close" />
    </button>

    <div class="confirmation">
      <img src="/icons/complete.svg" alt="" class="complete" />
      <h3>You’ve been added to the waiting list</h3>
      <p>We’ll let you know when Moveables is ready.</p>

      <div class="card">
        <div class="email">
          <img src="/icons/email.svg" alt="" />
          <p>moveable.startup@gmail.com</p>
        </div>
        <p class="text">Moveables is coming to you soon.</p>
        <p class="text">You’ve now joined our mailing list to get updates.</p>
      </div>
    </div>
  </div>
</div>

<style>
  .confirmation {
    position: absolute;
    margin: auto;
    display: flex;
    width: 480px;
    height: 470px;
    background: #711DF9;
    backdrop-filter: blur(20px);
    top: 20%;
    left: 30%;
    border-radius: 1.5625rem;
  }

  .cancel {
    width: 35px;
    position: absolute;
    right: 0;
    top: 5%;
    margin-right: 1rem;
    cursor: pointer;
  }

  .confirm-content {
    display: flex;
    flex-direction: column;
    width: 480px;
    gap: 0.8rem;
  }

  .confirm-approve {
    margin: 0 auto;
    margin-top: 10% !important;
  }

  .popup {
    display: none;
  }
  .confirm-content h3 {
    margin: auto;
    width: 72%;
    text-align: center;
    font-size: 1.6rem;
    font-family: Syne;
    color: #fff;
    font-weight: normal;
  }

  .confirm-content p {
    margin: auto;
    font-size: 0.93rem;
    color: #fff;
  }

  .card {
    width: 80%;
    height: 130px;
    border-radius: 6.998px;
    opacity: 0.8;
    background: #fff;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .email {
    width: 90%;
    height: 50px;
    border-radius: 3.768px;
    background: #aaabbe;
    display: flex;
    margin: 0 auto;
    margin-top: 14px;
    gap: 0;
    margin-bottom: 14px;
  }

  .email img {
    width: 30px;
    margin-left: 10px;
  }

  .email p {
    font-size: 1rem;
    margin-left: 14px;
  }

  .text {
    font-size: 0.95rem !important;
    margin: 0 auto !important;
    color: black !important;
  }

  @media (max-width: 767px) {
    .confirm-popup {
      display: none;
    }

    .popup {
      display: block;
    }

    .close {
      width: 42px;
      position: absolute;
      right: 0;
      top: 5%;
      margin-right: 1rem;
      cursor: pointer;
      z-index: 1;
    }

    .confirmation {
      display: flex;
      flex-direction: column;
      gap: 0.8rem !important;
      border-radius: 0;
    }

    .complete {
      width: 120px;
      margin: auto;
      margin-top: 50%;
      margin-bottom: 5px;
    }

    .confirmation h3 {
      margin: 0px auto;
      width: 72%;
      text-align: center;
      font-size: 1.6rem;
      font-family: Syne;
      color: #fff;
      font-weight: normal;
    }

    .confirmation p {
      margin: 0px auto;
      font-size: 0.93rem;
      color: #fff;
    }

    .card {
      width: 280px;
      height: 100px;
      border-radius: 6.998px;
      opacity: 0.8;
      background: rgba(127, 130, 168, 0.52);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      padding-bottom: 5px;
    }

    .email {
      width: 90%;
      height: 40px;
      border-radius: 3.768px;
      background: rgba(146, 148, 173, 0.35);
      display: flex;
      margin: auto;
      margin-top: 14px;
      gap: 0;
    }

    .email img {
      width: 30px;
      margin-left: 10px;
    }

    .email p {
      font-size: 0.75rem;
      margin-left: 14px;
      padding-top: 10px;
    }

    .text {
      font-size: 0.68rem !important;
      margin: 0 auto !important;
      margin-top: 5px !important;
      color: #fff !important;
    }
  }

  @media (max-width: 767px) {
    .confirmation {
      position: absolute;
      width: 100%;
      height: 100%;
      background: #451297;
      top: 0;
      left: 0;
    }
  }

  @media (min-width: 768px) and (max-width: 1110px) {
    .confirmation {
      top: 150px;
      left: 20%;
    }
  }
</style>
