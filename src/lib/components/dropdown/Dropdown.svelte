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
  <ul bind:this={menu}>
    <slot />
  </ul>
</div>

<style>
  div {
    display: flex;
  }

  ul {
    list-style: none;
    position: absolute;
    background-color: white;
    z-index: 100;
    width: 5rem;
    border-radius: 0.75rem;
    padding: 3px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    top: 4.5rem;
    right: 24rem;
  }
</style>
