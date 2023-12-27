<script lang="ts">
  import Footer from './components/Footer.svelte';
import Header from './components/Header.svelte'
  import Greet from './lib/Greet.svelte'

</script>

<Header />
<main class="m-3 flex flex-col items-center pt-10 gap-6">

  <h1 class="font-semibold text-4xl">Welcome to Ordo!</h1>

  <p>
    Click on the Tauri, Vite, and Svelte logos to learn more.
  </p>

</main>
<Footer />
