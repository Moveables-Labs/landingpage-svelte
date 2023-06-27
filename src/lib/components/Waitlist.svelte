<script>

</script>

<section>
    <p class="launch"><span><img src="/icons/space.svg" alt=""></span>Launching soon!!!!!</p>
    <div class="heading">
        <h3>Join our waitlist</h3>
        <p>Connect with delivery agents and service providers to transport your goods with.</p>
    </div>

    <div class="content">
        <div class="left-content">
            <p>Join waitlist for to access your go to delivery service</p>
            <div class="email">
                <input type="email" placeholder="Email Address">
            </div>
            <button class="left-btn">Join</button>
        </div>

        <div class="line"></div>

        <div class="right-content">
            <p>Join our delivery agent waitlist</p>
            <button>Independent Dispatcher</button>
            <p class="center">Or</p>
            <button>Company Dispatcher</button>
        </div>
    </div>
</section>

<style>

section{
    background: #5E17CF;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding-bottom: 2rem;
    border-radius: 14px;
    font-family: Manrope;
}

.launch{
    text-align: end;
    justify-content: flex-end;
    width: 100%;
    padding-right: 1.3rem;
    padding-top: 1rem;
    display: inline-flex;
    gap: 2px;
}

.heading h3{
    font-size: 3rem;
    text-align: center;
    font-family: Syne;
    padding-top: 3rem;
}

.heading p{
    text-align: start;
    font-family: Syne;
    font-weight: 500;
    padding-top: 1rem;
    font-size: 1.4rem;
}

.content{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding-top: 2rem;
}

.left-content{
    width: 49.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 2rem;
    gap: 0.5rem;
}

.line{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1px;
    height: 12rem;
    border-width: 0.08rem;
    border-style: solid;
    border-color: #fff;
}

.right-content{
    width: 49.4%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding-left: 2rem;
}

.left-content, .right-content p{
    font-size: 1rem;
}

.email{
    width: 90%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7px;
    border-radius: 4px;
    margin-top: 5%;
}

input{
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding: 16px;
    padding-left: 14px;
}

button.left-btn{
    width: 90%;
    padding: 0.94rem 1.2rem;
    border-radius: 4px;
    outline: none;
    border: none;
    background: linear-gradient(180deg, rgba(113, 29, 249, 0.90) 0%, rgba(113, 29, 249, 0.28) 100%);
    box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 1px;
    line-height: 1.25rem;
}

.center{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin:auto;
    padding-top: 1rem;
    font-size: 1.2rem;
    padding-right: 3rem;
}

button{
    width: 90%;
    margin-top: 3%;
    padding: 0.94rem 1.2rem;
    border-radius: 4px;
    outline: none;
    border: none;
    background: #fff;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
}

button:hover{
    background-color: var(--btn-hover);
    color: white;
    transition: ease-in-out 200ms;
    cursor: pointer;
}

button:active{
    background-color: var(--btn-active);
    color: white;
    cursor: pointer;
}


@media (max-width: 850px) {
    .content {
      flex-direction: column;
      align-items: center;
    }

    .line {
      width: 85%;
      height: 1px;
      margin: 1.5rem 0;
    }

    .left-content,
    .right-content {
      width: 100%;
      margin: auto;
      text-align: center;
    }

    button, .email{
        border-radius: 10px !important;
    }

    .left-content, .right-content p{
    font-size: 1rem;
    text-align: start;
    }

    .right-content p{
        padding-bottom: 1rem;
    }

    .left-content p{
        padding-right: 1rem;
    }

    .heading h3{
        margin: auto;
        font-size: 2.5rem;
    }

    .heading p{
        font-weight: normal;
        font-size: 1rem;
        text-align: center;
        padding: 2px 5px;
    }

    .launch{
        font-size: 1.2rem;
    }

    .content{
        padding-bottom: 1rem;
    }

    .center{
        text-align: start;
        padding-right: 3rem;
        margin-top: 1rem;
    }
}



</style>