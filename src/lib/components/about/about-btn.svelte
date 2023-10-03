<script>
    import Waitlist from "../Waitlist.svelte";
</script>


<button onclick="window.location.href = '/#waitlist'">
    <slot><!-- optional fallback --></slot>
  </button>

<style>
  button {
    color: white !important;
    font-weight: normal;
    letter-spacing: 1px;
    width: 10rem;
    border: none;
    border-radius: 50px;
    padding: 0.85rem 1.5rem;
    background: #030655;
    cursor: pointer;
    margin: auto;
  }

  button:hover {
    background: var(--btn-hover, #030655);
  }

  button:active {
    background: var(--btn-active, #030655);
  }

  @media (max-width: 767px){
    button{
        width: 10rem;
        padding: 0.65rem 1.3rem;
    }
  }
</style>