<script lang="ts">
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import { quadInOut } from "svelte/easing";
  import { type DropdownMenu, navbarStore, setOpenDropdown } from "../stores/navbar.store";
  import { searchActiveNavlink } from "../helpers/searchActiveNavlink";
  import { mouseOut } from "../helpers/mouseEvents";
  import NavlinkItem from "./NavlinkItem.svelte";
  import src from "../assets/icon-arrow-down.svg";

  export let dropdown: DropdownMenu;
  let semanticId = "";
  onMount(() => {
    semanticId = `${dropdown.label.toLowerCase()}-dropdown`;
  });
  let innerWidth = 0;
  $: mobileScreen = innerWidth < 768;
  $: open = $navbarStore.openDropdown === dropdown.id;
  $: active = searchActiveNavlink({ activeNavitem: $navbarStore.activeNavitem, items: dropdown.items });
</script>

<svelte:window bind:innerWidth />

<div use:mouseOut={{ callback: () => setOpenDropdown(null), listen: open }} class="relative">
  <button
    aria-label="{open ? 'Close' : 'Open'} {dropdown.label} dropdown"
    aria-expanded={open}
    aria-controls={semanticId}
    type="button"
    on:mouseenter={() => !mobileScreen && !open && setOpenDropdown(dropdown.id)}
    on:click={() => setOpenDropdown(open ? null : dropdown.id)}
    class="flex items-center p-2 gap-2 hover:text-black transition-colors rounded-2xl focus-ring {active
      ? 'text-black font-semibold'
      : ''}"
  >
    <span>{dropdown.label}</span>
    <img {src} alt="" class="transition-transform duration-300 {open ? '-rotate-180' : 'rotate-0'}" />
  </button>
  {#if open}
    <ul
      id={semanticId}
      transition:slide={{ duration: 300, easing: quadInOut }}
      class="md:absolute min-w-max top-full {dropdown.anchor === 'left'
        ? 'left-0'
        : 'right-0'} flex flex-col md:bg-white md:shadow-lg px-8 py-4  md:p-4 rounded-xl"
    >
      {#each dropdown.items as link (link.id)}
        <li><NavlinkItem {link} /></li>
      {/each}
    </ul>
  {/if}
</div>
