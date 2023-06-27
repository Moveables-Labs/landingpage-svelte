<script lang="ts">

    import Dropdown from "./DropdownItem.svelte";

  let dropdown:  Dropdown;

</script>


<div class="burger">
    <div>
        <img src="/icons/close.svg" alt="" id="close">
    </div>
    <ul class="nav-menu">
        <li>Home</li>
        <li>
            <div class="dropdown-label"
            on:click={dropdown.toggle}
            on:keydown={dropdown.toggle}>
            <p>Socials</p>
            <span><img src="/icons/ChevronDown2.svg" alt="chevron-down"  class="icon" /></span>
        </div>
        <Dropdown bind:this={dropdown}>
        </Dropdown>
        </li>
        <li>About Us</li>
    </ul>
</div>

<style>
    .burger{
        position: absolute;
        top: 0;
        right: 0;
        background-color: #F2E9FF;
        width: 70%;
        height: 100%;
        z-index: 100;
        display: flex;
        flex-direction: column;
        transition: width 0.5s ease-in-out;
    }

    .burger div{

        display: flex;
        justify-content: flex-end;
    }

    .burger div img{
        width: 50px;
        height: 50px;
        margin-top: 1rem;
        margin-right: 1rem;
    }

  .nav-menu {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    list-style-type: none;
    gap: 1rem;
    font-size: 1.4rem;
    margin-top: 3rem;
    margin-left: 1rem;
  }

  .dropdown-label{
    display: flex;
    width: 100%;
    gap: 0.5rem;
    margin-top: 0.2rem;
    position: relative;
    cursor: pointer;
  }

  .icon{
    width: 1rem !important;
    height: 1rem;
    margin-top: -0.5rem !important;
    margin-bottom: -0.5rem;
  }
</style>