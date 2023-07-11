<script>
import Confirmation from "../dropdown/confirmation.svelte";
</script>

<section class="form-container">
    <div class="content">
        <div class="listed">
            <img src="/icons/logo-white.svg" alt="">
            <p>Every dispatch rider earns more with moveables</p>
            <div class="small-icons">
                <div class="circle"><img src="/icons/bike-white.svg" alt=""></div>
                <div class="line"></div>
                <div class="circle"><img src="/icons/van-white.svg" alt=""></div>
                <div class="line"></div>
                <div class="circle"><img src="/icons/truck-white.svg" alt=""></div>
            </div>
        </div>

        <img src="/images/delivery.png" alt="" class="customer">
    </div>

    <div class="waitlist-group mobile">
        <div class="go-back">
            <a href="/">
                <img src="/icons/backspace-icon.svg" alt="">
                <p>Go back</p>
            </a>
        </div>
        
        <form>
            <h1>Company's dispatch form</h1>
            <p>Company's Name</p>
            <input type="text" name="name" id="name" placeholder="Name">
            <p>Phone no.</p>
            <input type="tel" name="tel" id="tel" placeholder="+234">
            <p>Email</p>
            <input type="email" name="email" id="email" placeholder="example@gmail.com">
            <p>State</p>
            <div class="location">
                <select name="state" id="state">
                    <option value="" disabled selected>State</option>
                </select>
                <div>
                    Edo
                </div>
            </div>
        </form>

        <div class="delivery">
            <p>Delivery method</p>
            <div class="delivery-icons">
                <button class="delivery-buttons"><img src="/icons/bike-delivery.svg" alt="" /></button>
                <button class="delivery-buttons"><img src="/icons/car-delivery.svg" alt="" class="irr"></button>
                <button class="delivery-buttons"><img src="/icons/keke-delivery.svg" alt="" class="irr"></button>
            </div>
        </div>

        <button class="submit">
            Join waitlist
        </button>
    </div>
</section>


<div class="waitlist-group">
    <div class="go-back">
        <a href="/">
            <img src="/icons/backspace-icon.svg" alt="">
            <p>Go back</p>
        </a>
    </div>
    
    <form>
        <h1>Company's dispatch form</h1>
        <p>Company's Name</p>
        <input type="text" name="name" id="name" placeholder="Name">
        <p>Phone no.</p>
        <input type="tel" name="tel" id="tel" placeholder="+234">
        <p>Email</p>
        <input type="email" name="email" id="email" placeholder="example@gmail.com">
        <p>State</p>
        <div class="location">
            <select name="state" id="state">
                <option value="" disabled selected>State</option>
            </select>
            <div>
                Edo
            </div>
        </div>
    </form>

    <div class="delivery">
        <p>Delivery method</p>
        <div class="delivery-icons">
            <button class="delivery-buttons"><img src="/icons/bike-delivery.svg" alt="" /></button>
            <button class="delivery-buttons"><img src="/icons/car-delivery.svg" alt="" class="irr"></button>
            <button class="delivery-buttons"><img src="/icons/keke-delivery.svg" alt="" class="irr"></button>
        </div>
    </div>

    <button class="submit">
        Join waitlist
    </button>
</div>

<!-- <div class="confirmation">
    <Confirmation />
</div> -->

<style>
.form-container{
    display: flex;
    gap: 2rem;
    width: 100%;
    height: 100vh;
    position: relative;
}

.content{
    display: flex;
    flex-direction: row;
    width: 70%;
}

.listed{
    display: flex;
    flex-direction: column;
    gap: 15rem;
    width: 50%;
}

.listed img{
    width: 40px;
    margin-top: 30px;
}

.listed p{
    font-size: clamp(1rem, 35px, 30px);
    font-family: Syne !important;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    color: #fff;
    letter-spacing: 2px;
    width: 90%;
}

.small-icons{
    display: flex;
    width: 80%;
}


.circle img{
    width: 33px;
    border: 1px solid white;
    border-radius: 30px;
    padding: 5px;
}

.line{
    width: 30px;
    height: 1px;
    background: white;
    margin-top: 45px;
}

.customer{
    position: absolute;
    bottom: 4%;
    left: -2%;
    width: 75rem;
    height: 48rem;
    z-index: 0;
}

.waitlist-group{
    display: flex;
    flex-direction: column;
    gap: 20px;
}


.go-back a{
    cursor: pointer !important;
    display: flex;
    gap: 0.4rem;
    padding-top: 2rem;
    z-index: 99;
    font-size: 1rem;
    font-weight: normal;
}

.go-back a img{
    width: 10px;
}

form{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
}

form h1{
    font-size: 40px;
    font-family: Syne;
    font-weight: bold;
    line-height: normal;
    width: 80%;
}

form input{
    outline: none;
    border: 0.834px solid #F8F3FF;
    border-radius: 12px;
    background: #ECECEC;
    padding: 1rem 1.35rem;
}

.location{
    display: flex;
    justify-content: space-between;
}

.location select{
    outline: none;
    border: 0.834px solid #F8F3FF;
    border-radius: 12px;
    background: #ECECEC;
    padding: 1rem 1.35rem;
}

.location div{
    outline: none;
    border: 0.834px solid #F0F0F0;
    border-radius: 12px;
    padding: 1rem 2.2rem;
}

.delivery-icons{
    display: flex;
    justify-content: space-around;
    margin-top: 5px;
    width: 100%;
    gap: 40px;
}

.delivery-buttons{
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    padding-bottom: -2%;
    border-radius: 10.336px;
    border: 0.738px solid #C8C8C8;
    background: #F5F5F5;
}

.delivery-buttons:hover{
    border: 1px solid #711DF9;
    border-radius: 10.336px;
    transform: scale(1.1);
    transition: transform ease-in 400ms;
}

.delivery-buttons:active, .delivery-buttons:focus{
    border: 1px solid #711DF9;
}

.delivery-icons img{
    padding: 0px 25px;
}

.irr{
    padding: 15px 30px !important;
}

.submit{
    width: 100%;
    padding: 0.94rem 1.2rem;
    border-radius: 4px;
    outline: none;
    border: none;
    background: #711DF9;
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
    
    .submit:hover{
        background-color: #5f18d1;
        transition: ease-in-out 200ms;
    }
    
    .mobile{
        display: none;
    }

    .confirmation{
    position: absolute;
    margin: auto;
    display: flex;
    width: 480px;
    height: 470px;
    border-radius: 25px;
    background: rgba(199, 161, 249, 0.80);
    backdrop-filter: blur(20px);
    }
    
    @media (max-width: 1110px) {
        .mobile{
            display: block;
            width: 100% !important;
            height: 100%;
            margin: 0px auto !important;
        }
    
        form h1{
            font-size: 1.85rem;
            width: 100%;
            padding-top: 10px;
            margin-bottom: 12px;
        }
    
        .waitlist-group{
            width: 100%;
        }
    
        .go-back{
            padding-top: 0rem !important;
        }
    
        form{
            width: 100% !important;
        }
    
        section{
            display: none !important;
        }
    
        .delivery-icons{
            margin: auto;
            justify-content: center;
            gap: 2rem;
            padding-top: 10px;
        }
    
        .delivery-buttons:hover{
            transform: none;
        }
        
        .delivery-icons img{
        padding: 0px 17px;
        }
        .irr{
        padding: 15px 22px !important;
        }
    
        .submit{
            width: 80%;
            border-radius: 10.336px;
            margin: 0 auto;
            margin-top: 12px;
            margin-bottom: 22px;
        }

        .confirmation{
        position: absolute;
        width: 100%;
        height: 100%;
        background: #451297;
        }
    }   
</style>