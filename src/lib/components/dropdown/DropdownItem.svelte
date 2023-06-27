<script lang="ts">
    let menu;
    export const toggle = () => {
        const list = menu.querySelector("ul")
      if (list.style.display === "none") {
        list.style.display = "block";
      } else {
        list.style.display = "none";
      }
    };
  </script>
  
  <div bind:this={menu} >
    <ul class="dropdown-label">
      <a href="#" target="_blank" class="dropdown-label-link">
        <li class="dropdown-label-target one">Instagram</li>
      </a>
  
      <a href="#" target="_blank" class="dropdown-label-link">
        <li class="dropdown-label-target two">Facebook</li>
      </a>
  
      <a href="#" target="_blank" class="dropdown-label-link">
        <li class="dropdown-label-target three">Twitter</li>
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
      background-color: #DFC8FD;
      width: 90%;
      border-radius: 0.65rem;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border: 1px solid #8D4AFA;
      position: absolute;
      
    }
  
    ul li{
      color: white;
      font-weight: 500;
      font-family: Manrope;
      width: 100%;
      font-size: 1rem;
      padding: 0.4rem 0;
    }
  
    .one:hover{
        background-color: #8D4AFA;
        border-top-left-radius: 0.65rem;
        border-top-right-radius: 0.65rem;
        width: 100%;
    }

    .two:hover{
        background-color: #8D4AFA;
    }

    .three:hover{
        background-color: #8D4AFA;
        border-bottom-left-radius: 0.65rem;
        border-bottom-right-radius: 0.65rem;
    }
  
</style>
  