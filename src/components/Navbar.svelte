<script lang="ts">
  import { NAV_DROPDOWNS, NAV_LINKS } from "../stores/dropdowns.store";
  import DropdownMenu from "./DropdownMenu.svelte";
  import NavlinkItem from "./NavlinkItem.svelte";
  import src from "../assets/logo.svg";
</script>

<header class="px-4 lg:container lg:mx-auto w-full flex items-center gap-8 lg:gap-16 my-8">
  <img {src} alt="Snap logo" />
  <nav class="flex-1">
    <ul class="flex items-center gap-2 lg:gap-4">
      {#each NAV_DROPDOWNS as dropdown (dropdown.id)}
        <li><DropdownMenu {dropdown} /></li>
      {/each}
      {#each NAV_LINKS as link (link.id)}
        <li><NavlinkItem {link} /></li>
      {/each}
    </ul>
  </nav>
  <div class="flex items-center gap-2 lg:gap-4 shrink-0">
    <button type="button" class=" px-4 py-2 rounded-xl hover:text-black">Login</button>
    <button type="button" class="border-2 px-4 py-2 rounded-xl hover:text-black">Register</button>
  </div>
</header>
