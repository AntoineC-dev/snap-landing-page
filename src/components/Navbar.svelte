<script lang="ts">
  import { fade } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  import { navbarStore, NAV_DROPDOWNS, NAV_LINKS, toggleMobileMenu } from "../stores/navbar.store";
  import DropdownMenu from "./DropdownMenu.svelte";
  import NavlinkItem from "./NavlinkItem.svelte";
  import logo from "../assets/logo.svg";
  import menuOpen from "../assets/icon-menu.svg";
  import menuClose from "../assets/icon-close-menu.svg";

  let innerWidth = 0;
  $: mobileScreen = innerWidth < 768;
</script>

<svelte:window bind:innerWidth />

<header
  class="p-4 md:py-6 lg:container w-full flex justify-between md:justify-start items-center gap-8 lg:gap-16  relative"
>
  <a href="/" aria-label="Go to homepage" class="focus-ring"><img src={logo} alt="Snap logo" /></a>
  <button
    on:click={toggleMobileMenu}
    type="button"
    class="md:hidden w-8 h-8 flex justify-center items-center self-end focus-ring"
    aria-label="Open mobile navigation"
  >
    <img src={menuOpen} alt="" />
  </button>
  {#if $navbarStore.mobileMenuOpen && mobileScreen}
    <div
      on:click={toggleMobileMenu}
      transition:fade={{ duration: 300, easing: quadOut }}
      class="absolute top-0 left-0 w-full h-screen bg-black/75 md:hidden"
    />
  {/if}
  {#if $navbarStore.mobileMenuOpen || !mobileScreen}
    <nav
      transition:fade={{ duration: 300, easing: quadOut }}
      class="absolute md:static top-0 right-0 w-64 md:w-auto h-screen md:h-auto p-4 md:p-0 md:flex-1 flex flex-col md:flex-row md:justify-between bg-surface gap-8 md:gap-0"
    >
      <button
        on:click={toggleMobileMenu}
        type="button"
        class="md:hidden w-8 h-8 flex justify-center items-center self-end focus-ring"
        aria-label="Close mobile navigation"
      >
        <img src={menuClose} alt="" />
      </button>
      <ul class="flex flex-col md:flex-row md:items-center gap-2 lg:gap-4">
        {#each NAV_DROPDOWNS as dropdown (dropdown.id)}
          <li><DropdownMenu {dropdown} /></li>
        {/each}
        {#each NAV_LINKS as link (link.id)}
          <li><NavlinkItem {link} /></li>
        {/each}
      </ul>
      <div class=" flex flex-col md:flex-row items-stretch md:items-center gap-2 lg:gap-4 shrink-0">
        <button
          aria-label="Open login form"
          type="button"
          class=" px-4 py-2 rounded-2xl hover:text-black focus-ring transition-colors">Login</button
        >
        <button
          aria-label="Open register form"
          type="button"
          class="border px-4 py-2 rounded-2xl hover:text-black focus-ring hover:shadow transition-all">Register</button
        >
      </div>
    </nav>
  {/if}
</header>
