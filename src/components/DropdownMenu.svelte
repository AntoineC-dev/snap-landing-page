<script lang="ts">
  import { type DropdownMenu, activeNavItem, toggleActiveDropdown, setActiveDropdown } from "../stores/dropdowns.store";
  import { clickOutside } from "../helpers/clickOutsideEvent";
  import src from "../assets/icon-arrow-down.svg";

  export let dropdown: DropdownMenu;
  $: open = $activeNavItem === dropdown.id;
  $: dropdownClasses = open ? "opacity-100" : "pointer-events-none opacity-0";
</script>

<div class="relative">
  <button
    type="button"
    on:click|stopPropagation={() => toggleActiveDropdown(dropdown.id)}
    class="flex items-center p-2 gap-2 hover:text-black {open && 'text-black'}"
  >
    <span>{dropdown.label}</span>
    <img {src} alt="" class="transition-transform duration-300 {open ? '-rotate-180' : 'rotate-0'}" />
  </button>
  <div
    use:clickOutside={() => open && setActiveDropdown()}
    class="absolute min-w-max top-[calc(100%+0.5rem)] flex flex-col gap-3 bg-white shadow-lg p-8 rounded-xl transition-opacity duration-300 {dropdownClasses}"
  >
    {#each dropdown.items as item (item.id)}
      <a href={item.url} class="flex items-center gap-4 hover:text-black cursor-pointer">
        {#if item.svg}
          <img src={item.svg} alt="" class="w-4" />
        {/if}
        <span>{item.label}</span>
      </a>
    {/each}
  </div>
</div>
