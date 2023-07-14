<script>

</script>

<div class="container">
    <img src="/images/conclusion.svg" alt="" class="conclusion">
    <p>Join us today, as we venture into 
        uncharted territory. 
        <br>As we venture into the future of logistics. As we venture into 
    </p>
    <a href="/">
        <div class="logo">
          <img src="/images/logo.svg" alt="logo" class="logo-pic"/>
          <img src="/images/logo-text.svg" alt="logo-text" class="logo-text"/>
        </div>
      </a>
    </div>

<style>
.container{
    display: flex;
    flex-direction: column;
    margin: auto;
}

.conclusion{
    width: 60%;
    margin: auto;
}

p{
    margin: 0 auto;
    color: var(--textdark, #35364B);
    font-size: clamp(30px, 10px, 40px);
    width: clamp(100%, 60%, 45%);
    text-align: center;
    font-weight: 700;
    padding: 2rem 0;
}

.logo{
    display: flex;
    gap: 18px;
    justify-content: center;
}

.logo-text{
    width: clamp(70px, 400px, 220px)
}

.logo-pic{
    width: clamp(70px, 120px, 20px);
}

@media (max-width: 767px){
    .container{
        width: 100%;
    }

    .conclusion{
        width: 350px;
        margin: auto;
    }
}
</style>