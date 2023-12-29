<script lang="ts">
  import Inventory from './components/svg/Inventory.svelte';
  import RequestQuote from './components/svg/RequestQuote.svelte';
  import Settings from './components/svg/Settings.svelte';
  
  const recentVendors = [
    {
      name: 'Tauri',
    },
    {
      name: 'Vite',
    },
    {
      name: 'Svelte',
    }
  ];

</script>

<header class="p-4 bg-mantle">
  <div class="flex gap-4">
    <Inventory size="48" />
  </div>
</header>
<div class="h-full flex flex-auto items-stretch">
  <aside class="flex flex-col items-center bg-base">
    <div class="p-6 hover:bg-surface0">
      <RequestQuote size="36" />
    </div>
    <div class="p-6 hover:bg-surface0">
      <Inventory size="36" />
    </div>
    <div class="p-6 grow">
    </div>
    <div class="p-6 hover:bg-surface0">
      <Settings size="36" />
    </div>
  </aside>
  <main class="grow flex">
    <div class="">
      <p>
        Click on the Tauri, Vite, and Svelte logos to learn more.
      </p>
    </div>
  </main>
</div>
