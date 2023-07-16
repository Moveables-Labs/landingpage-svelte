<script>
import AboutBtn from "./about-btn.svelte";
</script>


<section class="hero">

<div  class="pana">
    <img src="/images/pana.svg" alt="">
</div>
<div class="content">
    <p>We are a customer driven
        company, with the ultimate goal
        of <span>revolutionizing</span>  delivery service
        in Nigeria , and Africa at large</p>
</div>

<img src="/images/rafiki.svg" alt="" class="rafiki">

<div class="mob-show">
    <AboutBtn>Get Started</AboutBtn>
</div>
</section>

<style>
.hero{
    width: 100%;
    height: 100%;
    position: relative;
}

.pana{
    padding-bottom: 0;
    display: flex;
    justify-content: flex-end;
    margin-right: 80px;
}

.content{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0rem;
}

.content p{
    font-family: Syne;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    width: 47rem;
    text-align: center;
    color: #35364B;
}

.content span{
    color: var(--text-hover);
}

.rafiki{
    width: 350px;
    padding-bottom: 0;
}

.mob-show{
    display: none;
}


@media (max-width: 767px){
    .pana{
        display: none;
    }

    .content p{
        width: 100%;
        font-size: 28px;
        padding: 2rem 0rem;
    }

    .rafiki{
        margin: auto;
        display: flex;
        width: 300px;
    }

    .mob-show{
        display: block;
        padding-bottom: 1rem;
        width: fit-content;
        margin: auto;
        margin-top: 1rem;
    }
}
</style>