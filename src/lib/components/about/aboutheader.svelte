<script lang="ts">
  import Dropdown from "../dropdown/Dropdown.svelte";
  import Mobile from "../dropdown/Mobile.svelte";
  import AboutBtn from "./about-btn.svelte";

  let dropdown: Dropdown;
</script>

<nav>
  <a href="/">
    <div class="logo">
      <img src="/images/logo-white.svg" alt="logo" class="logo-pic"/>
      <img src="/images/logo-text-white.svg" alt="logo-text" class="logo-text"/>
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
          <p class="menu-link">Socials</p>
          <span><img src="/icons/ChevronDownWhite.svg" alt="chevron-down" /></span>
        </div>
        <Dropdown bind:this={dropdown} />
      </li>
      <li class="menu-item"><a href="/about" class="menu-link">About Us</a></li>
    </ul>
    <AboutBtn>Get Started</AboutBtn>
  </div>

  <div class="burger-menu">
    <!-- <img src="/icons/burger.svg" alt="" class="burger"> -->
    <Mobile />
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

  .burger-menu {
    display: none;
  }

  .menu-container {
    gap: 60px;
  }

  .nav-menu {
    gap: 20px;
    color: white;
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

  .menu-link{
    color: white;
  }

  .menu-link:hover{
    color: var(--text-hover);
    opacity: 80%;

  }

  @media (max-width: 1110px) {
    .logo-pic{
      width: 25px;
    }

    .logo-text{
      width: 100px !important;
    }
    
    .menu-container {
      display: none;
    }

    .burger-menu {
      display: block;
    }
  }
</style>
