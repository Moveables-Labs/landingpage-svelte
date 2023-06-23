<script>
import Btn from "./Btn.svelte";
</script>

<section>
    <div class="heading">
        <h3>Hail for Delivery needs with us</h3>
        <p>The simple 3 steps you need to get started</p>
    </div>

    <div class="container">
        <div class="left-container">
            <div class="steps">
                <div class="float">
                    1
                </div>
                <p>Download the <br> <span>Moveables</span> app.</p>
            </div>
            <div class="line"></div>
            <div class="steps">
                <div class="float">
                    2
                </div>
                <p>Get a delivery agent near you.</p>
            </div>
            <div class="line"></div>
            <div class="steps space">
                <div class="float">
                    3
                </div>
                <p>Book a delivery schedule.</p>
            </div>
            <button>Download Mobile App</button>
        </div>


        <div class="image">
            <img src="/images/couriers.svg" alt="">
        </div>
    </div>
</section>


<style>
section{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
}

.heading h3{
    font-size: 50px;
    text-align: center;
    font-family: Syne;
    padding-top: 3rem;
}

.heading p{
    text-align: center;
    font-family: Syne;
    font-weight: 600;
    padding-top: 1rem;
    font-size: 30px;
}

.container{
    display: flex;
    align-self: stretch;
    gap: 8rem;
    padding-top: 3.8rem;
}

.left-container{
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
}

.steps{
    font-size: 1.2rem;
    font-family: Manrope;
    font-weight: 400;
    border: 3px solid var(--purple);
    border-radius: 30px;
    width: 73%;
    position: relative;
}

.steps p{
    padding: 1.2rem;
    padding-right: 1.8rem;
    padding-left: 1.6rem;
    padding-top: 1.4rem;
}
.left-container span{
    color: #5E17CF;
}

.float{
    background: #8D4AFA;
    color: white;
    width: 50px; 
    height: 50px; 
    padding: 10px;
    border-radius: 100px; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    display: flex;
    position: absolute;
    top: -29%;
    left: -7%;
}

.float p{
    color: white;
    font-size: 1rem;
}

.line{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1px;
    height: 3rem;
    border-width: 0.08rem;
    border-style: solid;
    border-color: #8D4AFA;
    
}

.image img{
    width: 880px;
    height: 480px;
    box-shadow: 11px 5px 30px -5px rgba(0, 0, 0, 0.25);
    margin-top: 0.3rem;
}

.space {
    margin-bottom: 2rem;
}
button {
    color: white;
    font-weight: 600;
    font-family: Manrope;
    width: 16rem;
    border: none;
    border-radius: 50px;
    padding: 1rem 1.3rem;
    background: linear-gradient(
      180deg,
      rgba(113, 29, 249, 0.9) 0%,
      rgba(113, 29, 249, 0.28) 100%
    );
    cursor: pointer;
  }

  button:hover {
    background: var(--btn-hover, #711df9);
  }

  button:active {
    background: var(--btn-active, #8d4afa);
  }
</style>