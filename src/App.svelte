<script lang="ts">
  import Inventory from './components/svg/Inventory.svelte';
  import RequestQuote from './components/svg/RequestQuote.svelte';
  import Settings from './components/svg/Settings.svelte';
  
  const recentVendors = [
    {
      name: 'Tauri',
      logo: 'https://avatars.githubusercontent.com/u/52050269?s=200&v=4',
      url: 'https://tauri.studio'
    },
    {
      name: 'Vite',
      logo: 'https://avatars.githubusercontent.com/u/22247014?s=200&v=4',
      url: 'https://vitejs.dev'
    },
    {
      name: 'Svelte',
      logo: 'https://avatars.githubusercontent.com/u/23617963?s=200&v=4',
      url: 'https://svelte.dev'
    }
  ];

</script>

<!-- <Header /> -->
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
<!-- <Footer /> -->
