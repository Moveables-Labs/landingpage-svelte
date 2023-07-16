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
    background: linear-gradient(
      180deg,
      rgba(113, 29, 249, 0.9) 0%,
      rgba(113, 29, 249, 0.28) 100%
    );
    cursor: pointer;
    margin: auto;
  }

  button:hover {
    background: var(--btn-hover, #711df9);
  }

  button:active {
    background: var(--btn-active, #8d4afa);
  }

  @media (max-width: 767px){
    button{
        width: 10rem;
        padding: 0.65rem 1.3rem;
    }
  }
</style>