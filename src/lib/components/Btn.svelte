<button>
  <slot><!-- optional fallback --></slot>
</button>

<style>
  button {
    color: white;
    font-weight: 700;
    width: 12em;
    border: none;
    border-radius: 50px;
    padding: 1em 1.25em;
    background: linear-gradient(
      180deg,
      rgba(113, 29, 249, 0.9) 0%,
      rgba(113, 29, 249, 0.28) 100%
    );
  }
</style>
