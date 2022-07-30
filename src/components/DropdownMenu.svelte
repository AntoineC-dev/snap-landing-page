<script lang="ts">
  import { slide } from "svelte/transition";
  import { quadInOut } from "svelte/easing";
  import { type DropdownMenu, navbarStore, setOpenDropdown } from "../stores/navbar.store";
  import { clickOutside } from "../helpers/clickOutsideEvent";
  import NavlinkItem from "./NavlinkItem.svelte";
  import src from "../assets/icon-arrow-down.svg";

  export let dropdown: DropdownMenu;
  $: open = $navbarStore.openDropdown === dropdown.id;
  $: active = $navbarStore.activeDropdown === dropdown.id;
</script>

<div class="relative">
  <button
    type="button"
    on:click|stopPropagation={() => setOpenDropdown(open ? null : dropdown.id)}
    class="flex items-center p-2 gap-2 hover:text-black {active ? 'text-black font-semibold' : ''}"
  >
    <span>{dropdown.label}</span>
    <img {src} alt="" class="transition-transform duration-300 {open ? '-rotate-180' : 'rotate-0'}" />
  </button>
  {#if open}
    <div
      transition:slide={{ duration: 300, easing: quadInOut }}
      use:clickOutside={() => open && setOpenDropdown(null)}
      class="md:absolute min-w-max top-[calc(100%+0.5rem)] flex flex-col md:bg-white md:shadow-lg px-8 py-4  md:p-4 rounded-xl"
    >
      {#each dropdown.items as link (link.id)}
        <NavlinkItem {link} />
      {/each}
    </div>
  {/if}
</div>
