<script lang="ts">
  let menu: HTMLUListElement;
  export const toggle = () => {
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };
</script>

<div>
  <ul bind:this={menu} class="dropdown-label">
    <a href="#" target="_blank" class="dropdown-label-link">
      <li class="dropdown-label-target">Instagram</li>
    </a>

    <a href="#" target="_blank" class="dropdown-label-link">
      <li class="dropdown-label-target">Facebook</li>
    </a>

    <a href="#" target="_blank" class="dropdown-label-link">
      <li class="dropdown-label-target">Twitter</li>
    </a>
  </ul>
</div>

<style>
  div {
    display: flex;
  }

  ul {
    display: none;
    list-style: none;
    text-align: center;
    position: absolute;
    background-color: #DFC8FD;
    z-index: 100;
    width: 14rem;
    border-radius: 0.65rem;
    padding: 8px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    top: 4.5rem;
    right: 20rem;
    border: 1px solid #8D4AFA;
  }

  ul li{
    color: white;
    font-weight: 500;
    letter-spacing: 1px;
    font-family: Manrope;
    padding: 0.2rem 0;
  }

  .dropdown-label-target:hover,
  .dropdown-label-target:active{
  color: var(--text-hover);
  }

</style>
