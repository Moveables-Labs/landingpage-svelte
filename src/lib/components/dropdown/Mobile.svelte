<script lang="ts">
  import Dropdown from "./DropdownItem.svelte";

  const _icon_close = "/icons/burger.svg";
  const _icon_open = "/icons/close.svg";

  let burger: HTMLDivElement;
  let menu: HTMLUListElement;

  let dropdown: Dropdown;

  let isOpen = false;
  let icon = _icon_close;

  function toggle_menu() {
    if (isOpen) {
      burger.style.visibility = "hidden";
      icon = _icon_close;
    } else {
      burger.style.visibility = "visible";
      icon = _icon_open;
    }
    isOpen = !isOpen;
  }
</script>

<div class="burger" bind:this={burger}>
  <div class="burger-icon">
    <img src={icon} alt="" id="close"  on:click={toggle_menu} on:keydown={toggle_menu}/>
  </div>
  <ul class="nav-menu" bind:this={menu}>
    <a href="/"><li>Home</li></a>
    <li>
      <div
        class="dropdown-label"
        on:click={dropdown.toggle}
        on:keydown={dropdown.toggle}
      >
        <p>Socials</p>
        <span
          ><img
            src="/icons/ChevronDown2.svg"
            alt="chevron-down"
            class="icon"
          /></span
        >
      </div>
      <Dropdown bind:this={dropdown} />
    </li>
    <a href="/about"><li>About Us</li></a>
  </ul>
</div>

<style>
  .burger {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #f2e9ff;
    width: 59%;
    height: 100%;
    z-index: 100;
    display: flex;
    flex-direction: column;
    transition: width 0.5s ease-in-out;
    visibility: hidden;
  }

  .burger-icon {
    display: flex;
    justify-content: flex-end;
    visibility: visible;
  }

  .burger-icon img,
  .dropdown-label img {
    width: 30px;
    height: 30px;
    margin-top: 1rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    list-style-type: none;
    gap: 1rem;
    font-size: 1rem;
    margin-top: 3rem;
    margin-left: 1rem;
  }

  .dropdown-label {
    display: flex;
    width: 100%;
    gap: 0.5rem;
    margin-top: 0.2rem;
    position: relative;
    cursor: pointer;
    justify-content: flex-end;
  }

  .icon {
    width: 1rem !important;
    height: 1rem;
    margin-top: -0.5rem !important;
    margin-bottom: -0.5rem;
  }
</style>

