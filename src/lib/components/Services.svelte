<script>

</script>

<section>
    <div class="heading">
        <h3>We Offer a Wide Range Of Services.</h3>
    </div>
    <!--Web Slider Starts Here-->
    <div class="carousel">
        <div class="slider">
            <div id="card-1" class="card">
                <div>
                    <img src="/images/dis-cycle.svg" alt="">
                </div>
                <div class="card-content">
                    <div class="card-content-title">
                        <img src="/icons/dis-cycle-logo.svg" alt="">
                        <h3>2.5k</h3>
                    </div>
    
                    <div class="card-content-desc">
                        <h4>Bike Delivery</h4>
                        <p>Sign up today to get access to our services as we connect you to your needs.</p>
                    </div>
                </div>
            </div>
    
    
            <div id="card-2" class="card">
                <div>
                    <img src="/images/bus.svg" alt="">
                </div>
                <div class="card-content">
                    <div class="card-content-title">
                        <img src="/icons/truck.svg" alt="">
                        <h3>1k</h3>
                    </div>
    
                    <div class="card-content-desc">
                        <h4>Truck Delivery</h4>
                        <p>Sign up today to get access to our services as we connect you to your needs.</p>
                    </div>
                </div>
            </div>
    
            <div id="card-3" class="card">
                <div class="irr">
                    <img src="/images/bicycle.svg" alt="">
                </div>
                <div class="card-content">
                    <div class="card-content-title">
                        <img src="/icons/person.svg" alt="">
                        <h3>200+</h3>
                    </div>
    
                    <div class="card-content-desc">
                        <h4>Door to Door Delivery</h4>
                        <p>Sign up today to get access to our services as we connect you to your needs.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Web Slider ends here-->
    <!--Mobile starts here-->

    <div class="caro-sel">
        <div class="slider">
            <div class="card-mob card-mob1">
                <div>
                    <img src="/images/Dispatch1.png" alt="">
                </div>
                <div class="card-mob-content">
                    <div class="card-content-title">
                        <img src="/icons/dis-cycle-logo.svg" alt="">
                        <h3>2.5k</h3>
                    </div>

                    <div class="card-content-desc">
                        <h4>Bike Delivery</h4>
                        <p>Sign up today to get access to our services as we connect you to your needs.</p>
                    </div>
                </div>
            </div>

            <div class="card-mob">
                <div>
                    <img src="/images/dispatch-truck.png" alt="">
                </div>
                <div class="card-mob-content">
                    <div class="card-content-title">
                        <img src="/icons/truck.svg" alt="">
                        <h3>1k</h3>
                    </div>

                    <div class="card-content-desc">
                        <h4>Truck Delivery</h4>
                        <p>Sign up today to get access to our services as we connect you to your needs.</p>
                    </div>
                </div>
            </div>

            <div class="card-mob">
                <div class="irr">
                    <img src="/images/dispatch-cycle.png" alt="">
                </div>
                <div class="card-mob-content">
                    <div class="card-content-title">
                        <img src="/icons/person.svg" alt="">
                        <h3>200+</h3>
                    </div>

                    <div class="card-content-desc">
                        <h4>Door to Door Delivery</h4>
                        <p>Sign up today to get access to our services as we connect you to your needs.</p>
                    </div>
                </div>
            </div>
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
}

.heading{
    font-size: 1.8rem;
    line-height: 2.5rem;
    max-width: 65%;
    text-align: center;
    font-family: Syne;
    margin-bottom: 1rem;
}

.carousel{
    width: 100%;
    margin-top: 1.4rem;
}

.caro-sel{
    width: 100%;
    margin-top: 1.4rem;
    display: none;
}

.slider{
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

.slider::-webkit-scrollbar{
    display: none;
}

.card{
    display: flex;
    width: 44rem;
    height: 22rem;
    border-radius: 13px;
    background: #5E17CF;
    transition: 2s;
}

.card img{
    height: 22rem;
    margin-left: -2%;
    justify-content: flex-start;
}

.irr img{
    height: 22.5rem;
    margin-top: -2%;
}

.card-content{
    width: 50%;
    flex-direction: column;
    color: var(--text-light);
    margin-top: 0%;
    margin-left: 2%;
    margin-bottom: 10%;
}

.card-content-title{
    display: flex;
    width: 95%;
    max-height: 30%;
    margin-top: 30%;
    align-items: center;
    gap: 3%;
    border-bottom: 1px solid #fff;
    padding-bottom: 1rem;
}


.card-content-title h3{
    font-size: 1.5rem;
    font-family: Syne;
}


.card-content-title img{
    width: 45px;
    height: 45px;
}

.card-content-desc h4{
    margin-top: 20px;
    font-size: 1.3rem;
    font-family: Syne;
    letter-spacing: 0.15rem;
    font-weight: 500;
    line-height: 1.5rem;
}

.card-content-desc p{
    font-family: Syne;
    max-width: 95%;
    margin-top: 10px;
    font-size: 0.95rem;
}

.card-mob{
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 30rem;
    border-radius: 22px;
    background: #5E17CF;
    transition: 2s;
    box-shadow: 2.530280590057373px 4.217134475708008px 8.434268951416016px 0px rgba(0, 0, 0, 0.30);
}

.card-mob img{
    width: 17.02rem;
    height: 16rem;
    margin-left: -0.2%;
}

.card-mob-content{
    width: 95%;
    color: var(--text-light);
    margin-bottom: 10%;
    margin-left: 2%;
}



@media (min-width: 320px) and (max-width: 670px){
    .heading{
        font-size: 1.05rem;
        max-width: 95%;
        padding-top: 1rem;
        line-height: 2rem;
        letter-spacing: 1px;
    }

    .card-content-title img{
    width: 35px;
    height: 35px;
    }

    .card-content-title{
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 3%;
    border-bottom: 1px solid #fff;
    padding-bottom: 1rem;
    margin-top: 10%;
    }

    .card-content-desc h4{
    margin-top: 15px;
    font-size: 1.1rem;
    font-family: Syne;
    letter-spacing: 0.1rem;
    font-weight: 500;
    margin-left: 0.4rem;
    }

    .card-content-desc p{
        margin-left: 0.4rem;
        font-size: 0.8rem;
        line-height: 1.2rem;
    }

    .irr img{
        width: 17.42rem;
        margin-left: -0.42rem;
    }

    .slider{
        gap: 2rem;
    }

    .card-mob1{
        margin-left: -3rem;
    }

    .carousel{
        display: none;
    }

    .caro-sel{
        display: block;
    }
}

</style>