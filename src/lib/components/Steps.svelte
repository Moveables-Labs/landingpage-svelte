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
                <div class="float float-mol">
                    1
                </div>
                <p>Download the <span>Moveables</span> app.</p>
            </div>
            <div class="line"></div>
            <div class="steps">
                <div class="float float-mol">
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
            <!-- <button>Download Mobile App</button> -->
        </div>


        <div class="image">
            <img src="/images/couriers.svg" alt="">
        </div>
        <div class="image-mob">
            <img src="/images/couriers-mol.png" alt="">
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
    margin-left: 1rem;
}

.heading h3{
    font-size: 2.35em;
    text-align: center;
    font-family: Syne;
    padding-top: 0rem;
}

.heading p{
    text-align: center;
    font-family: Syne;
    font-weight: 500;
    padding-top: 1rem;
    font-size: 1.2rem;
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
    font-size: 1rem;
    font-family: Manrope;
    font-weight: 400;
    border: 2px solid var(--purple);
    border-radius: 10px;
    width: 73%;
    position: relative;
}

.steps p{
    padding: 1.15rem;
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
    width: 30px; 
    height: 30px; 
    padding: 10px;
    border-radius: 100px; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    display: flex;
    position: absolute;
    top: -25%;
    left: -8%;
}

.line{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1px;
    height: 4rem;
    border-width: 0.08rem;
    border-style: solid;
    border-color: #8D4AFA;
    
}

.image img{
    width: 50vw;
    min-height: 70vh;
    box-shadow: 11px 5px 30px -5px rgba(0, 0, 0, 0.25);
    margin-top: 0.3rem;
}

.image-mob img{
    display: none;
}

.space {
    margin-bottom: 2rem;
}
button {
    color: white;
    font-weight: normal;
    letter-spacing: 1px;
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

  @media (min-width: 413px){
    .float-mol{
        top: -17%;
    }
  }

  @media (min-width: 320px) and (max-width: 1110px){

    section{
    margin-left: 0 !important;
    }

    .container {
    flex-direction: column;
    gap: 2rem;
    }

    .heading h3{
        font-size: 1.36rem;
        padding-top: 0.8rem;
    }

    .heading p{
        font-size: 0.86rem;
    }

    .left-container{
        width: 100%;
    }

    .float{
        font-size: 0.86rem;
        width: 35px;
        height: 35px;
        top: -17%;
        left: -6%;
    }

    .steps{
        width: 90%;
    }

    .steps p{
        font-size: 1rem;
        padding-right: 1rem;
    }

    .image img{
        display: none;
    }

    .image-mob img{
        display: block;
        width: 100%;
        box-shadow: 11px 5px 30px -5px rgba(0, 0, 0, 0.25);
    }

    button{
        border-radius: 5px;
    }

    .container{
        padding-top: 1.6rem;
    }
  }

</style>