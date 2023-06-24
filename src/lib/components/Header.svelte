<script lang="ts">
  import Btn from "./Btn.svelte";
  import Dropdown from "./dropdown/Dropdown.svelte";

  let dropdown: Dropdown;
</script>

<nav>
  <a href="/">
    <div class="logo">
      <img src="/images/logo.svg" alt="logo" />
      <img src="/images/logo-text.svg" alt="logo-text" />
    </div>
  </a>
  <div class="menu-container">
    <ul class="nav-menu">
      <li class="menu-item"><a href="/" class="menu-link">Home</a></li>
      <li class="menu-item">
        <div
          class="dropdown-label"
          on:click={dropdown.toggle}
          on:keydown={dropdown.toggle}
        >
          <p>Socials</p>
          <span><img src="/icons/ChevronDown.svg" alt="chevron-down" /></span>
        </div>
        <Dropdown bind:this={dropdown}>
        </Dropdown>
      </li>
      <li class="menu-item"><a href="/" class="menu-link">About Us</a></li>
    </ul>
    <Btn>Get Started</Btn>
  </div>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .menu-container,
  .nav-menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-container {
    gap: 60px;
  }

  .nav-menu {
    gap: 20px;
  }

  .menu-item {
    list-style: none;
    font-size: 1rem;
  }

  .dropdown-label {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }

  .dropdown-label span {
    line-height: 0;
  }


</style>
