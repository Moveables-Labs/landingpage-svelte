<script>
  import Btn from "./about-btn.svelte";
</script>

<div class="container">
    <img src="/images/conclusion.svg" alt="" class="conclusion">
    <p>Join us today, as we venture into the <span class="purple">future</span> of logistics.
    </p>
    <div class="mob-hide">
        <Btn>Get Started</Btn>
    </div>
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
    font-size: clamp(40px, 30px, 20px);
    width: clamp(100%, 60%, 45%);
    text-align: center;
    font-weight: 700;
    padding: 2rem 0;
}

a{
    width: fit-content;
    margin: auto;
    padding-bottom: 1rem;
}

.mob-hide{
    margin: auto;
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

.purple{
    color: var(--text-hover);
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