<script lang="ts">
  import "../app.css";
  import { navbarStore } from "../stores/navbar.store";
  import { setDocumentScroll } from "../helpers/documentScrollHandler";
  import Navbar from "../components/Navbar.svelte";

  $: setDocumentScroll($navbarStore.mobileMenuOpen);
</script>

<Navbar />
<slot />
