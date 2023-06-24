<button>
  <slot><!-- optional fallback --></slot>
</button>

<style>
  button {
    color: white;
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
  }

  button:hover {
    background: var(--btn-hover, #711df9);
  }

  button:active {
    background: var(--btn-active, #8d4afa);
  }
</style>
