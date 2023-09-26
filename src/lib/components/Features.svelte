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
                <img class="left-card-img" src="/images/geotracking.png" alt="Card image cap">
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
                <img class="left-card-img" src="/images/time.png" alt="Card image cap">
                <div class="left-card-body">
                  <div class="left-card-text">
                        <h3 class="titles">TIMELY</h3>
                        <p>Receive your orders exactly at stipulated times with no avoidable delays.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="right-cards">
            <div class="right-top-card right-card">
                <img class="right-top-card-img" src="/images/communication.svg" alt="Card image cap">
                <div class="right-card-body">
                  <div class="right-card-text">
                        <h3 class="titles">QUICK COMMUNICATION</h3>
                        <p>Quick and easy in-app communication between drivers and clients.</p>
                    </div>
                </div>
            </div>

            <div class="right-bottom-card right-card">
                <img class="right-bottom-card-img" src="/images/thumbs.svg" alt="Card image cap">
                <div class="right-card-body">
                  <div class="right-card-text">
                        <h3 class="titles">RELIABLE</h3>
                        <p>Guaranteed assurance that deliveries make it to destinations without any mishaps.</p>
                    </div>
                </div>
            </div>

            <div class="right-top-card right-card-mob">
              <img class="right-top-card-img" src="/images/communication.png" alt="Card image cap">
              <div class="right-card-body">
                <div class="right-card-text">
                      <h3 class="titles">QUICK COMMUNICATION</h3>
                      <p>Quick and easy in-app communication between drivers and clients.</p>
                  </div>
              </div>
          </div>

          <div class="right-bottom-card right-card-mob">
              <img class="right-bottom-card-img" src="/images/thumbs.png" alt="Card image cap">
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
    padding-bottom: 1rem;
}

.heading h3{
    font-size: 2.25rem;
    text-align: center;
    font-family: Syne;
    padding-top: 3rem;
}

.heading p{
    text-align: start;
    font-family: Syne;
    font-weight: 500;
    padding-top: 1rem;
    font-size: 1.45rem;
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
    gap: 5rem;
    flex: 1 0 0;
    padding-top: 3rem;
}

.left-cards{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    gap: 2rem;
    width: 41.5%;
}

.left-card{
  width: 97%;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

.left-card-mob{
  display: none;
}

.right-card-mob{
  display: none;
}

.left-card-img {
  width: 100%;
  border-radius: 0.625rem 0.625rem 0rem 0rem
}

.left-card-body {
  margin-top: -2%;
  padding: 1rem;
  background-color: #fff;
}

.left-card-text {
  font-size: 0.95rem;
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
    width: 41%;
    margin-top: -1rem;
    margin-bottom: -1rem;
}

.right-top-card{
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.right-top-card-img {
  width: 111%;
  margin-top: -0.1rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 10px;
  
}

.right-bottom-card{
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 18px;
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
  font-size: 0.95rem;
  line-height: 1.5;
  color: #333;
}

@media (min-width: 320px) and (max-width: 670px){

  .heading h3{
    font-size: 1.8rem !important;
    margin-top: -10% !important;
  }

  .heading p{
    font-size: 0.89rem !important;
    line-height: 1.35rem;
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

  .right-card{
    display: none;
    
  }

  .right-card-mob{
    display: block;
    border-bottom-right-radius: 14px;
    border-bottom-left-radius: 14px;
  }

  .left-card-body{
    border-bottom-right-radius: 14px;
    border-bottom-left-radius: 14px;
  }

  .container {
    gap: 1.2rem;
    padding-top: 1.15rem;
  }

  .left-cards{
    gap: 1rem;
    width: 50%;
  }

  .right-cards{
    width: 50%;
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
    font-size: 2rem;
  }
}
</style>