<script>

</script>

<section id="features">
    <div class="heading">
        <h3>Why choose us?</h3>
        <p>Moveables is committed to making your everyday delivery experience alot easier by providing the following features:</p>
    </div>

    <div class="container">
        <div class="left-cards">
            <div class="left-card">
                <img class="left-card-img" src="/images/geotracking.svg" alt="Card image cap">
                <div class="left-card-body">
                  <div class="left-card-text">
                        <h3 class="titles">GPS TRACKING & GEO LOCATION</h3>
                        <p>Never lose track of orders as real time locations of your delivery is broadcast live on your device. You can also navigate live locations to reach clients/customers in new places.</p>
                    </div>
                </div>
            </div>
            <div class="left-card left-card-mob">
                <img class="left-card-img" src="/images/geotracking.svg" alt="Card image cap">
                <div class="left-card-body">
                  <div class="left-card-text">
                        <h3 class="titles">GPS TRACKING & GEO LOCATION</h3>
                        <p>Never lose track of orders as real time locations of your delivery is broadcast live on your device. You can also navigate live locations..</p>
                    </div>
                </div>
            </div>

            <div class="left-card">
                <img class="left-card-img" src="/images/time.svg" alt="Card image cap">
                <div class="left-card-body">
                  <div class="left-card-text">
                        <h3 class="titles">TIMELY</h3>
                        <p>Receive your orders exactly at stipulated times with no avoidable delays.</p>
                    </div>
                </div>
            </div>
            <div class="left-card left-card-mob">
                <img class="left-card-img" src="/images/time.svg" alt="Card image cap">
                <div class="left-card-body">
                  <div class="left-card-text">
                        <h3 class="titles">TIMELY</h3>
                        <p>Receive your orders exactly at stipulated times with no avoidable delays.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="right-cards">
            <div class="right-top-card">
                <img class="right-top-card-img" src="/images/communication.svg" alt="Card image cap">
                <div class="right-card-body">
                  <div class="right-card-text">
                        <h3 class="titles">QUICK COMMUNICATION</h3>
                        <p>Quick and easy in-app communication between drivers and clients.</p>
                    </div>
                </div>
            </div>

            <div class="right-bottom-card">
                <img class="right-bottom-card-img" src="/images/thumbs.svg" alt="Card image cap">
                <div class="right-card-body">
                  <div class="right-card-text">
                        <h3 class="titles">RELIABLE</h3>
                        <p>Guaranteed assurance that deliveries make it to destinations without any mishaps.</p>
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
    padding-bottom: 2rem;
}

.heading h3{
    font-size: 3.5rem;
    text-align: center;
    font-family: Syne;
    padding-top: 3rem;
}

.heading p{
    text-align: start;
    font-family: Syne;
    font-weight: 500;
    padding-top: 1rem;
    font-size: 1.65rem;
}

.titles{
  letter-spacing: 2px;
  font-weight: 900;
  font-family: Syne;
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    flex: 1 0 0;
    padding-top: 3rem;
}

.left-cards{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap: 2rem;
    width: 50%;
}

.left-card{
  width: 97%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

.left-card-mob{
  display: none;
}

.left-card-img {
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.left-card-body {
  margin-top: -2%;
  padding: 1rem;
  background-color: #fff;
}

.left-card-text {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}

/* right card */

.right-cards{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap: 1rem;
    width: 51%;
    margin-top: -1rem;
    margin-bottom: -1rem;
}

.right-top-card{
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

.right-top-card-img {
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  
}

.right-bottom-card{
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

.right-bottom-card-img {
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.right-card-body {
  margin-top: -2%;
  padding: 1rem;
  background-color: #fff;
}

.right-card-text {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}

@media (min-width: 320px) and (max-width: 670px){

  .heading h3{
    font-size: 2rem !important;
    margin-top: -10% !important;
  }

  .heading p{
    font-size: 1.1rem !important;
  }

  .left-card-text, .right-card-text{
    line-height: 0.8rem !important;
    letter-spacing: normal !important;
  }
  .left-card-text{
    font-size: 0.7rem;
  }

  .right-card-text{
    font-size: 0.7rem;
  }

  .left-card{
    display: none;
    
  }

  .left-card-mob{
    display: block;
    border-bottom-right-radius: 14px;
    border-bottom-left-radius: 14px;
  }

  .left-card-body{
    border-bottom-right-radius: 14px;
    border-bottom-left-radius: 14px;
  }

  .left-cards{
    gap: 1rem;
  }

  .left-card-img {
  width: 100%;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  }

  .right-top-card-img{
    width: 100%;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }

  .right-bottom-card-img{
    width: 100%;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }
  .right-card-body{
    border-bottom-right-radius: 14px;
    border-bottom-left-radius: 14px;
  }

  .right-bottom-card{
    border-bottom-right-radius: 14px;
    border-bottom-left-radius: 14px;
  }

  .right-top-card{
    border-bottom-right-radius: 14px;
    border-bottom-left-radius: 14px;
  }

  .titles{
    margin-bottom: 2px;
  }

  .heading h3{
    font-size: 3rem;
  }
}
</style>