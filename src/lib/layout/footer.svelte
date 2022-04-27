<script>
  import FooterList from '../shared/footer-list.svelte'
  import Button from '../shared/button.svelte'
</script>

<footer>
  <div class="footer-lists">
    <FooterList
      title="Socials"
      links={[
        {
          title: 'Discord',
          href: 'https://discord.com',
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
          title: 'DAO',
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
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 8rem;

    @media (max-width: 1024px) {
      width: calc(100% - 80px);
      margin-left: 80px
    }

    .footer-lists {
      display: flex;
      gap: 8rem;
      flex-wrap: wrap;

      @media (max-width: 1024px) {
        justify-content: space-between;
        width: 100%;
        gap: 4rem;
      }
    }

    @media (max-width: 1024px) {
      justify-content: space-between;
      gap: 4rem;
    }

    @media (max-width: 768px) {
      padding: 2rem;
    }
  }
  
</style>
