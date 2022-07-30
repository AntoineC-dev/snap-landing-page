<script lang="ts">
  import { navbarStore, setActiveNavItem, type NavlinkItem } from "../stores/navbar.store";
  export let link: NavlinkItem;

  $: active = $navbarStore.activeNavitem === link.id;
</script>

<a
  aria-label="Go to {link.label} page"
  on:click={() => setActiveNavItem(link.id)}
  href={link.url}
  class="flex items-center gap-4 p-2 hover:text-black cursor-pointer focus-ring rounded-2xl transition-colors"
>
  {#if link.svg}
    <img src={link.svg} alt="" class="w-4" />
  {/if}
  <span class={active ? "text-black font-semibold" : ""}>{link.label}</span>
</a>
