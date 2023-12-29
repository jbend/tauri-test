<script lang="ts">
  import Inventory from './components/svg/Inventory.svelte';
  import RequestQuote from './components/svg/RequestQuote.svelte';
  import Settings from './components/svg/Settings.svelte';
  import BasicTable from './components/BasicTable.svelte';

  import { Button } from './components/ui/button';
  
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
  <main class="grow p-4">
    <div class="h-full overflow-hidden box-border bg-base">
      <div class="max-h-full overflow-y-auto">

        <p class="m-2 p-4">
          Click on the Tauri, Vite, and Svelte logos to learn more.
        </p>
        
        <div class="py-12 flex flex-col items-center gap-2">
          <p>There are no order requests</p>
          <RequestQuote size="96" />
        </div>
        
        <div class="py-4 flex justify-around gap-2">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        
        <div class="py-12 flex flex-col items-center gap-2">
          <BasicTable />
        </div>
        
      </div>

    </div>
  </main>
</div>
