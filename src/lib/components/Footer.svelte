<script>
let date = new Date().getFullYear();
</script>

<footer class="footer">
    <div class="footer-row">
        <div class="footer-column text">
            <div class="logo">
                <a href="/">
                    <div class="logo">
                      <img src="/images/logo.svg" alt="logo" />
                      <img src="/images/logo-text.svg" alt="logo-text" />
                    </div>
                  </a>
            </div>

            <p>We are committed to giving you the best delivery service.</p>

            <div class="socials">
                <a href="#"><img src="/icons/twitter.svg" alt=""></a>
                <a href="#"><img src="/icons/facebook.svg" alt=""></a>
                <a href="#"><img src="/icons/linkedin.svg" alt=""></a>
                <a href="#"><img src="/icons/instagram.svg" alt=""></a>
            </div>

        </div>
        <div class="footer-column sec-col"></div>
        <div class="footer-column col about">
            <h4>About Us</h4>
            <ul>
                <a href="#"><li>About Us</li></a>
                <a href="#"><li>Join Waitlist</li></a>
            </ul>
        </div>
        <div class="footer-column col">
            <h4>Blog</h4>
            <ul>
                <a href="#"><li>Blog Post</li></a>
                <a href="#"><li>Blog Post</li></a>
                <a href="#"><li>Blog Post</li></a>
            </ul>
        </div>
        <div class="footer-column col">
            <h4>Contact Us</h4>
            <ul>
                <a class="contact" href="#">
                    <img src="/icons/mail.svg" alt="">
                    <li>moveables@gmail.com</li></a>

                <a class="contact" href="#">
                    <img src="/icons/phone.svg" alt="">
                    <li>+234 554 665 7778</li></a>

                <a class="contact" href="#">
                    <img src="/icons/location.svg" alt="">
                    <li>Benin City, Edo State.</li></a>

            </ul>
        </div>
    </div>
</footer>
<div class="copyright">
    <p>&#169 {date} All rights reserved. Moveables.</p>
</div>

<style>
footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5rem 0rem;
    width: 100%;
    font-family: Manrope;
}

.footer-row{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
}

.footer-column{
    flex: 1 1 20%;
    max-width: 20%;
    margin-bottom: 1.5rem;
}

.text{
    max-width: 25%;
}

.sec-col{
    max-width: 10%;
}

.logo{
    display: inline-flex;
    gap: 10px;
}

.text p{
    font-size: 1rem;
    padding: 3rem 0;
    color: var(--footer-text);
    letter-spacing: 1px;
    line-height: 1.4rem;
}

.socials{
    display: inline-flex;
    gap: 2rem;
}

.col{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 1rem;
}

.col h4{
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--footer-text);
    font-weight: 600;
}

.col ul li{
    list-style-type: none;
    padding-bottom: 1rem;
}

.contact{
    display: inline-flex;
    gap: 1rem;
}

.contact img{
    width: 1.4rem;
    padding-bottom: 14px;
}

.copyright{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: end;
    border-top: 1px solid #686565;
}

.copyright p{
    padding-top: 1rem;
    color: var(--footer-text);
    letter-spacing: 1px;
    font-weight: 600;
    font-family: Manrope;
}

  /* Media Queries */
  @media (max-width: 768px) {

    footer{
        padding: 1.5rem 0;
    }
    .footer-row {
      flex-direction: column;
      align-items: flex-start;
      text-align: start;
    }

    .sec-col{
        display: none;
    }

    .footer-column {
      max-width: 20%;
      margin-bottom: 0;
    }

    .contact{
        margin-left: 7rem;
    }

    .text {
      max-width: 100%;
    }

    .text p{
        padding: 1rem 0;
    }

    .socials {
      justify-content: center;
    }

    h4{
        letter-spacing: normal;
        align-self: flex-start;
        font-size: 0.8rem;
    }

    .col {
      align-items: center;
      text-align: start;
      padding-top: 0;
    }

    .col ul li{
    padding-bottom: 1rem;
    }

    .col ul{
        margin-top: -0.1rem;
    }
  }
 
</style>