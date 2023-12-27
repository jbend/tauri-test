<script lang="ts">
  import Header from './components/Header.svelte'
  import Greet from './lib/Greet.svelte'

</script>

<Header />
<main class="flex flex-col items-center pt-10 gap-6">
  <h1 class="font-semibold text-4xl">Welcome to Ordo!</h1>

  <p>
    Click on the Tauri, Vite, and Svelte logos to learn more.
  </p>

  <div class="row">
    <Greet />
  </div>


</main>
