<script>
  import "$lib/assets/styles/global.css";
  import Individual from "$lib/components/forms/individual.svelte";
</script>


<section class="form">
<Individual />
</section>

<style>
.form{
  padding: 2rem 2rem !important;
  height: 100vh;
  background: linear-gradient(
    60deg,
    #3C0F84 21.46%,
    #200846 45%,
    white 40%,
    white 100%
  );
   display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1110px){
    .form{
      background: #fff;
      padding: 0rem 2rem !important;
    }
  }
</style>