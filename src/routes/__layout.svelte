<script>
  import '../styles/global.scss'
  import Sidebar from '$lib/layout/sidebar.svelte'
  import Header from '$lib/layout/header.svelte'
  import Footer from '$lib/layout/footer.svelte'
</script>

<div class="container">
  <Sidebar />
  <main>
    <Header />
    <slot />
  </main>
</div>
<Footer />

<style lang="scss">
  .container {
    display: flex;

    main {
      flex: 1;
      padding: 3rem 6rem;
      display: flex;
      flex-direction: column;

      @media (max-width: 1024px) {
        padding-right: .8rem;
        padding-left: calc(80px + .8rem);
      }
    }
  }
</style>
