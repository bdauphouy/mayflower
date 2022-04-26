<script>
  import SidebarItem from '../shared/sidebar-item.svelte'
  import SocialMedia from '../shared/social-media.svelte'

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

  const socialLinks = [
    {
      title: 'Discord',
      href: 'https://discord.com',
      iconPath: '/discord.svg',
    },
    {
      title: 'Télégram',
      href: 'https://telegram.com',
      iconPath: '/telegram.svg',
    },
    {
      title: 'Twitter',
      href: 'https://twitter.com',
      iconPath: '/twitter.svg',
    },
  ]
</script>

<aside>
  <img src="/logo.svg" alt="logo mayflower finance" />

  <ul class="sidebar-items">
    {#each sidebarItems as { title, route, iconPath }}
      <SidebarItem {title} {route} {iconPath} />
    {/each}
  </ul>

  <ul class="social-links">
    {#each socialLinks as { title, href, iconPath }}
      <SocialMedia {title} {href} {iconPath} />
    {/each}
  </ul>
</aside>

<style lang="scss">
  aside {
    min-width: 300px;
    border-right: solid 1px $color-gray-2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    padding: 3.5rem 0;

    .sidebar-items {
      display: flex;
      flex-direction: column;
      margin-left: 30px;
      gap: 4rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }
  }
</style>
