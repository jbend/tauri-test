<script lang="ts">
  import Footer from './components/Footer.svelte';
  import Header from './components/Header.svelte';
  import ASideItem from './components/ASideItem.svelte';
  
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

<Header />
<main class="m-3 flex pt-2 gap-6">
  <aside class="min-w-48 lg:min-w-64 border border-overlay0">
    <ul class="list-none">
      {#each recentVendors as vendor}
        <ASideItem name={vendor.name}/>
      {/each}
    </ul>
  </aside>
  <div class="grow border border-overlay0">
    <h1 class="font-semibold text-4xl">Welcome to Ordo!</h1>
    <p>
      Click on the Tauri, Vite, and Svelte logos to learn more.
    </p>
    <div>
      <div class="bg-primary p-4">primary</div>
      <div class="bg-secondary p-4">secondary</div>
      <div class="bg-success p-4">success</div>
      <div class="bg-warning p-4">warning</div>
      <div class="bg-error p-4">error</div>
    </div>
  </div>
</main>
<!-- <Footer /> -->
