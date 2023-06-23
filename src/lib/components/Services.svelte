<script>

</script>

<section>
    <div class="heading">
        <h3>We Offer a Wide Range <br> Of Services.</h3>
    </div>

    <div class="carousel">
        <div class="slider">
            <div id="card-1" class="card">
                <div>
                    <img src="/images/dis-cycle.svg" alt="">
                </div>
                <div class="card-content">
                    <div class="card-content-title">
                        <img src="/images/dis-cycle-logo.svg" alt="">
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
                    <img src="/images/dis-cycle.svg" alt="">
                </div>
                <div class="card-content">
                    <div class="card-content-title">
                        <img src="/images/dis-cycle-logo.svg" alt="">
                        <h3>2.5k</h3>
                    </div>
    
                    <div class="card-content-desc">
                        <h4>Bike Delivery</h4>
                        <p>Sign up today to get access to our services as we connect you to your needs.</p>
                    </div>
                </div>
            </div>
    
            <div id="card-3" class="card">
                <div>
                    <img src="/images/dis-cycle.svg" alt="">
                </div>
                <div class="card-content">
                    <div class="card-content-title">
                        <img src="/images/dis-cycle-logo.svg" alt="">
                        <h3>2.5k</h3>
                    </div>
    
                    <div class="card-content-desc">
                        <h4>Bike Delivery</h4>
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
    font-size: 40px;
    max-width: 65%;
    text-align: center;
    font-family: Syne;
    padding-top: 3rem;
}

.carousel{
    width: 100%;
    margin-top: 1.4rem;
}

.slider{
    display: grid;
    grid-auto-flow: column;
    scroll-behavior: auto;
    gap: 10rem;
    overflow-y: scroll;
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
    font-size: 1.8rem;
    font-family: Syne;
}


.card-content-title img{
    width: 45px;
    height: 45px;
}

.card-content-desc h4{
    margin-top: 20px;
    font-size: 30px;
    font-family: Syne;
}

.card-content-desc p{
    font-family: Syne;
    max-width: 95%;
    margin-top: 10px;
    font-size: 16px
}

</style>