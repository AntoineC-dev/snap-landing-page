<script lang="ts">
  import { navbarStore, setActiveNavItem, type NavlinkItem } from "../stores/navbar.store";
  export let link: NavlinkItem;

  $: active = $navbarStore.activeNavitem === link.id;
</script>

<a
  on:click={() => setActiveNavItem(link.id)}
  href={link.url}
  class="flex items-center gap-4 p-2 hover:text-black cursor-pointer"
>
  {#if link.svg}
    <img src={link.svg} alt="" class="w-4" />
  {/if}
  <span class={active ? "text-black font-semibold" : ""}>{link.label}</span>
</a>
