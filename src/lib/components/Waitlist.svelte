<script>
</script>

<section id="waitlist">
  <p class="launch">
    <span><img src="/icons/space.svg" alt="" /></span>Launching soon!!!!!
  </p>
  <div class="heading">
    <h3>Join our waitlist</h3>
    <p>
      Connect with delivery agents and service providers to transport your goods
      with.
    </p>
  </div>

  <div class="content">
    <form class="left-content" action="/api" method="post">
      <p>Join waitlist for to access your go to delivery service</p>
      <div class="email">
        <input name="email" type="email" placeholder="Email Address" />
      </div>
      <button class="left-btn">Join</button>
    </form>

    <div class="line" />

    <div class="right-content">
      <p>Join our delivery agent waitlist</p>
      <a href="/dispatcher/individual">Independent Dispatcher</a>
      <p class="center">Or</p>
      <a href="/dispatcher/company">Company Dispatcher</a>
    </div>
  </div>
</section>

<style>
  section {
    background: #5e17cf;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding-bottom: 2rem;
    border-radius: 14px;
    font-family: Manrope;
  }

  .launch {
    text-align: end;
    justify-content: flex-end;
    width: 100%;
    padding-right: 1.3rem;
    padding-top: 1rem;
    display: inline-flex;
    gap: 2px;
  }

  .heading h3 {
    font-size: 2.2rem;
    text-align: center;
    font-family: Syne;
    padding-top: 3rem;
  }

  .heading p {
    text-align: start;
    font-family: Syne;
    font-weight: 500;
    padding-top: 1rem;
    font-size: 1.1rem;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding-top: 2rem;
  }

  .left-content {
    width: 49.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 2rem;
    gap: 0.5rem;
  }

  .line {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1px;
    height: 12rem;
    border-width: 0.08rem;
    border-style: solid;
    border-color: #fff;
  }

  .right-content {
    width: 49.4%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 2rem;
  }

  .left-content,
  .right-content p {
    font-size: 0.89rem;
  }

  .email {
    width: 90%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7px;
    border-radius: 4px;
    margin-top: 5%;
    border: none;
  }

  input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding: 16px;
    padding-left: 14px;
  }

  button.left-btn {
    width: 90%;
    padding: 0.94rem 1.2rem;
    border-radius: 5px;
    outline: none;
    border: none;
    background: linear-gradient(
      180deg,
      rgba(113, 29, 249, 0.9) 0%,
      rgba(113, 29, 249, 0.28) 100%
    );
    box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 1px;
    line-height: 1.25rem;
  }

  .center {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top: 1rem;
    font-size: 1.2rem;
    padding-right: 3rem;
  }

  a {
    width: 90%;
    margin-top: 3%;
    padding: 0.94rem 1.2rem;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #fff;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
    text-align: center;
    letter-spacing: 0px;
  }

  button:hover {
    background-color: var(--btn-hover);
    color: white;
    transition: ease-in-out 200ms;
    cursor: pointer;
  }

  button:active {
    background-color: var(--btn-active);
    color: white;
    cursor: pointer;
  }

  a:active,
  a:hover {
    background-color: var(--btn-hover);
    color: white;
    transition: ease-in-out 200ms;
    cursor: pointer;
  }

  @media (max-width: 850px) {
    .content {
      flex-direction: column;
      align-items: center;
    }

    .line {
      width: 85%;
      height: 1px;
      margin: 1.5rem 0;
    }

    .left-content,
    .right-content {
      width: 100%;
      margin: auto;
      text-align: center;
    }

    button,
    .email {
      border-radius: 10px !important;
    }

    .left-content,
    .right-content p {
      font-size: 0.98rem;
      text-align: start;
    }

    .right-content p {
      padding-bottom: 1rem;
    }

    .left-content p {
      padding-right: 1rem;
    }

    .heading h3 {
      margin: auto;
      font-size: 1.3rem;
    }

    .heading p {
      font-weight: normal;
      font-size: 0.82rem;
      padding: 9px 5px;
      margin-top: 8px;
      width: 85%;
      margin: auto;
    }

    .launch {
      font-size: 0.8rem;
    }

    .content {
      padding-bottom: 1rem;
    }

    .content p {
      font-size: 0.82rem;
    }

    .center {
      text-align: start;
      padding-right: 3rem;
      margin-top: 1rem;
    }

    button {
      width: 90%;
      margin-top: 3%;
      padding: 0.8rem 0.9rem;
      border-radius: 5px;
      outline: none;
      border: none;
      background: #fff;
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 1.25rem;
    }

    button.left-btn{
      border-radius: 5px;
    }
  }
</style>
