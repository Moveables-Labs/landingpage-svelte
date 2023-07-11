<script>

</script>

<section class="confirm-popup">
    <img src="/icons/cancel-icon.svg" alt="" class="cancel">

    <div class="confirm-content">
        <img src="/icons/approve.svg" alt="" class="confirm-approve">
        <h3>You’ve been added to the waiting list</h3>
        <p>We’ll let you know when Moveables is ready.</p>

        <div class="card">
            <div class="email">
                <img src="/icons/email.svg" alt="">
                <p>hello@moveables.co</p>
            </div>
            <p class="text">Moveables is coming to you soon.</p>
            <p class="text">You’ve now joined our mailing list to get updates.</p>
        </div>
    </div>
</section>


<!--Mobile view popup-->
<div class="popup">
    <img src="/icons/close-con.svg" alt="" class="close">

    <div class="confirmation">
        <img src="/icons/complete.svg" alt="" class="complete">
        <h3>You’ve been added to the waiting list</h3>
        <p>We’ll let you know when Moveables is ready.</p>

        <div class="card">
            <div class="email">
                <img src="/icons/email.svg" alt="">
                <p>hello@moveables.co</p>
            </div>
            <p class="text">Moveables is coming to you soon.</p>
            <p class="text">You’ve now joined our mailing list to get updates.</p>
        </div>
    </div>
</div>

<style>
.cancel{
    width: 35px;
    position: absolute;
    right: 0;
    top: 5%;
    margin-right: 1rem;
    cursor: pointer;
}

.confirm-content{
    display: flex;
    flex-direction: column;
    width: 480px;
    gap: 0.8rem;
}

.confirm-approve{
    margin: 0 auto;
    margin-top: 10% !important;
}
    
.popup{
    display: none;
}
.confirm-content h3{
    margin: auto;
    width: 72%;
    text-align: center;
    font-size: 1.6rem;
    font-family: Syne;
    color: #fff;
    font-weight: normal;
}

.confirm-content p{
    margin: auto;
    font-size: 0.93rem;
    color: #fff;
}

.card{
    width: 80%;
    height: 130px;
    border-radius: 6.998px;
    opacity: 0.8;
    background: #727383;
    margin: auto;
    display: flex;
    flex-direction: column;
}

.email{
    width: 90%;
    height: 50px;
    border-radius: 3.768px;
    background: #AAABBE;
    display: flex;
    margin: 0 auto;
    margin-top: 14px;
    gap: 0;
    margin-bottom: 14px;
}

.email img{
    width: 30px;
    margin-left: 10px;
}

.email p{
    font-size: 1rem;
    margin-left: 14px;
}

.text{
    font-size: 0.95rem !important;
    margin: 0 auto !important;
}



@media (max-width: 1110px){
.confirm-popup{
    display: none;
}

.popup{
    display: block;
}

.close{
    width: 42px;
    position: absolute;
    right: 0;
    top: 5%;
    margin-right: 1rem;
    cursor: pointer;
}

.confirmation{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.complete{
    width: 120px;
    margin: auto;
    margin-top: 50%;
}

.confirmation h3{
    margin: auto;
    width: 72%;
    text-align: center;
    font-size: 1.6rem;
    font-family: Syne;
    color: #fff;
    font-weight: normal;
}

.confirmation p{
    margin: auto;
    font-size: 0.93rem;
    color: #fff;
}

.card{
    width: 280px;
    height: 100px;
    border-radius: 6.998px;
    opacity: 0.8;
    background: rgba(127, 130, 168, 0.52);
    margin: auto;
    display: flex;
    flex-direction: column;
}

.email{
    width: 90%;
    height: 40px;
    border-radius: 3.768px;
    background: rgba(146, 148, 173, 0.35);
    display: flex;
    margin: 0 auto;
    margin-top: 14px;
    gap: 0;
}

.email img{
    width: 30px;
    margin-left: 10px;
}

.email p{
    font-size: 0.75rem;
    margin-left: 14px;
}

.text{
    font-size: 0.68rem !important;
    margin: 0 auto !important;
    margin-top: 5px !important;
}

}
</style>