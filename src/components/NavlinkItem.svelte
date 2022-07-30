<script lang="ts">
  import { activeNavItem, setActiveDropdown, type NavlinkItem } from "../stores/dropdowns.store";
  export let link: NavlinkItem;

  $: active = $activeNavItem === link.id;
</script>

<a
  href={link.url}
  on:click={() => setActiveDropdown(link.id)}
  class="p-2 hover:text-black {active ? 'text-black' : 'text-current'}">{link.label}</a
>
