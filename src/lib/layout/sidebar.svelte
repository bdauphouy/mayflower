<script>
  import SidebarItem from '../shared/sidebar-item.svelte'
  import SocialMedia from '../shared/social-media.svelte'
  import { socialLinks } from '../../store'

  const presale = import.meta.env.VITE_PUBLIC_PRESALE === 'true'

  const sidebarItems = [
    {
      title: 'Dashboard',
      route: '/',
      iconPath: '/sidebar-icons/dashboard.svg',
    },
    {
      title: 'Account',
      route: '/account',
      iconPath: '/sidebar-icons/account.svg',
    },
    {
      title: 'Calculator',
      route: '/calculator',
      iconPath: '/sidebar-icons/calculator.svg',
    },
    {
      title: 'Swap',
      route: '/swap',
      iconPath: '/sidebar-icons/swap.svg',
    },
    {
      title: 'Chart',
      route: '/chart',
      iconPath: '/sidebar-icons/chart.svg',
    },
  ]

  if (presale) {
    sidebarItems.push({
      title: 'Presale',
      route: '/presale',
      iconPath: '/sidebar-icons/presale.svg',
    })
  }
</script>

<aside>
  <a href="/">
    <img src="/logo.svg" alt="logo mayflower finance" />
  </a>

  <ul class="sidebar-items">
    {#each sidebarItems as { title, route, iconPath }}
      <SidebarItem {title} {route} {iconPath} />
    {/each}
  </ul>

  <ul class="social-links">
    {#each $socialLinks as { title, href, iconPath }}
      {#if iconPath}
        <SocialMedia {title} {href} {iconPath} />
      {/if}
    {/each}
  </ul>
</aside>

<style lang="scss">
  aside {
    min-width: 300px;
    min-height: 100vh;
    border-right: solid 1px $color-gray-2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    padding: 3.5rem 0;

    img {
      @media (max-width: 1024px) {
        width: 50px;
      }
    }

    @media (max-width: 1024px) {
      position: fixed;
      background-color: $color-black;
      height: 100%;
      min-width: auto;
      width: 80px;
      z-index: 99;
      gap: 3rem;
      padding: 3rem 0;
      overflow: auto;
    }

    .sidebar-items {
      display: flex;
      flex-direction: column;
      margin-left: 30px;
      gap: 4rem;

      @media (max-width: 1024px) {
        margin-left: 0;
      }
    }

    .social-links {
      display: flex;
      gap: 1rem;

      @media (max-width: 1024px) {
        flex-direction: column;
      }
    }
  }
</style>
