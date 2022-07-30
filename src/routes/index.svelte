<script lang="ts">
  import { CLIENTS } from "../stores/clients.store";
  import mobileImg from "../assets/image-hero-mobile.png";
  import desktopImg from "../assets/image-hero-desktop.png";

  let innerWidth = 0;
  $: src = innerWidth < 1280 ? mobileImg : desktopImg;
</script>

<svelte:head>
  <title>Frontend Mentor | Intro section with dropdown navigation</title>
</svelte:head>

<svelte:window bind:innerWidth />

<main class="w-full py-4 md:p-8 xl:px-0 container xl:grid xl:grid-flow-col xl:justify-around">
  <img {src} alt="Teenager coding on a laptop" class="lg:mx-auto xl:order-2 xl:max-w-sm 2xl:max-w-md 3xl:max-w-lg" />
  <div class="mx-4 xl:flex xl:flex-col">
    <div
      class="text-center xl:text-left my-12 xl:my-0 sm:my-16 flex flex-col items-center xl:items-start gap-6 lg:gap-8  xl:flex-1 xl:justify-center"
    >
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">
        Make <span class="inline-block xl:block whitespace-nowrap">remote work</span>
      </h1>
      <p class="max-w-lg sm:text-xl">
        Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch
        productivity soar.
      </p>
      <button
        aria-label="Learn more about us"
        type="button"
        class="bg-black text-surface font-semibold px-6 py-3 text-lg rounded-2xl shadow focus-ring border border-black hover:bg-surface hover:text-black transition-colors"
        >Learn more</button
      >
    </div>
    <div class="flex justify-between items-center gap-6 xl:gap-12 lg:justify-evenly xl:justify-start">
      {#each CLIENTS as client (client.id)}
        <div><img src={client.svg} alt={client.label} class="max-w-full" /></div>
      {/each}
    </div>
  </div>
</main>
