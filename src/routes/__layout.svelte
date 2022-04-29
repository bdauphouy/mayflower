<script>
  import '../styles/global.scss'
  import Cookies from 'js-cookie'
  import Sidebar from '$lib/layout/sidebar.svelte'
  import Header from '$lib/layout/header.svelte'
  import Footer from '$lib/layout/footer.svelte'
  import { onMount } from 'svelte'
  import { account } from '../store'

  onMount(() => {
    const cookieAccount = Cookies.get('mayflower-account-data')

    if (cookieAccount) {
      account.update((act) => {
        return {
          ...act,
          ...JSON.parse(Cookies.get('mayflower-account-data')),
        }
      })
    }
  })
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
        padding-right: 0.8rem;
        padding-left: calc(80px + 0.8rem);
      }
    }
  }
</style>
