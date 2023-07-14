<script>

</script>


<section>
    <div class="heading">
        <h3>Latest Posts</h3>
    </div>

    <div class="container">
        <div class="blog1">
            <div class="content">
                <p>How to grow your business with Moveables</p>
                <a href="#">Read More</a>
            </div>
        </div>

        <div class="blog2">
            <div class="content">
                <p>How to grow your business with Moveables</p>
                <a href="#">Read More</a>
            </div>
        </div>

        <div class="blog3">
            <div class="content">
                <p>How to grow your business with Moveables</p>
                <a href="#">Read More</a>
            </div>
        </div>
        <div></div>
        <div></div>
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
.heading{
    display: flex;
    justify-content: flex-start;
    align-items: start;
    width: 100%;
}
.heading h3{
    font-size: 2.25rem;
    text-align: start;
    font-family: Syne;
    font-weight: 600;
    padding-top: 3rem;
}

.container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1.4rem;
    width: 100%;
    min-height: 40vh;
    margin-top: 4%;
}

.blog1{
    background:linear-gradient(180deg, rgba(199, 161, 249, 0.00) 1.56%, #C7A1F9 96.88%),
                url('/images/blog1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
}

.blog2{
    background:linear-gradient(180deg, rgba(199, 161, 249, 0.00) 1.56%, #C7A1F9 96.88%),
                url('/images/blog2.jpg') no-repeat center center / cover;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
}

.blog3{
    background:linear-gradient(180deg, rgba(199, 161, 249, 0.00) 1.56%, #C7A1F9 96.88%),
                url('/images/blog3.jpg') no-repeat center center / cover;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
}

.content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
}

.content p{
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
    line-height: 1.7rem;
    font-family: Syne;
    letter-spacing: 2px;
    padding-bottom: 0.5rem;
}

a{
    font-size: 0.95rem;
    font-weight: bold;
    color: var(--text-hover);
}

@media (min-width: 320px) and (max-width: 727px){
    .container {
    grid-template-columns: 1fr; /* Set to a single column */
    grid-template-rows: 0fr;
    }
}
</style>