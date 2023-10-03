<script>
import AboutBtn from "./about-btn.svelte";
</script>


<section class="hero">
<div class="content">
    <p>We are a customer driven
        company, with the ultimate goal
        of <span>revolutionizing</span>  delivery service
        in Nigeria , and Africa at large</p>
</div>

<div class="mob-show">
    <AboutBtn>Get Started</AboutBtn>
</div>
</section>

<style>
.hero{
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 20rem;
    margin-bottom: 8rem;
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
    color: #fff;
    line-height: 160%;
}

.mob-show{
        padding-bottom: 1rem;
        width: fit-content;
        margin: auto;
        margin-top: 3rem;
    }


@media (max-width: 767px){

    .hero{
        margin-top: 16rem;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
    }

     .content p{
        width: 100%;
        font-size: 28px;
        padding: 2rem 0rem;
    }

    .mob-show{
        display: block;
        padding-bottom: 1rem;
        width: fit-content;
        margin: auto;
        margin-top: 1rem;
        padding-bottom: 2rem;
    }
}
</style>