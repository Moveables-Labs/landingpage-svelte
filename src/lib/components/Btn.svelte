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

  @media (min-width: 320px) and (max-width: 727px){
   button{
      width: 50%;
      padding: 0.94rem 1.25rem;
   }
  }

   @media (min-width: 630px) and (max-width: 1110px) {
    button{
      width: 50%;
    }
  }
</style>
