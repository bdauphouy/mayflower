<script>
  import FooterList from '../shared/footer-list.svelte'
  import Button from '../shared/button.svelte'
</script>

<footer>
  <div />
  <div class="footer-lists">
    <FooterList
      title="Socials"
      links={[
        {
          title: 'Discord',
          href: 'https://discord.com',
        },
        {
          title: 'Telegram',
          href: 'https://telegram.com',
        },
        {
          title: 'Twitter',
          href: 'https://twitter.com',
        },
      ]}
    />
    <FooterList
      title="Learn"
      links={[
        {
          title: 'Gitbook',
          href: 'https://gitbook.com',
        },
        {
          title: 'Medium',
          href: 'https://medium.com',
        },
      ]}
    />
    <FooterList
      title="Products"
      links={[
        {
          title: 'NFT (coming...)',
          href: 'https://google.com',
        },
        {
          title: 'DAO (coming...)',
          href: 'https://google.com',
        },
      ]}
    />
  </div>
  <Button>Buy $CRO</Button>
</footer>

<style lang="scss">
  footer {
    padding: 3rem 6rem;
    left: 0;
    bottom: 0;
    background-color: $color-dark-gray;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .footer-lists {
      display: flex;
      gap: 8rem;
    }
  }
</style>
