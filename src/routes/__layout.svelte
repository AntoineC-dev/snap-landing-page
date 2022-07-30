<script lang="ts">
  import "../app.css";
  import { navbarStore } from "../stores/navbar.store";
  import { setDocumentScroll } from "../helpers/documentScrollHandler";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";

  $: setDocumentScroll($navbarStore.mobileMenuOpen);
</script>

<div class="min-h-screen flex flex-col">
  <Navbar />
  <slot />
  <Footer />
</div>
