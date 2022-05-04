<script>
  import FooterList from '../shared/footer-list.svelte'
  import Button from '../shared/button.svelte'
  import { currency, socialLinks } from '../../store'
  import { goto } from '$app/navigation'

  const getHref = (title) => {
    return $socialLinks.find((link) => link.title === title)?.href
  }

  const handleClick = () => {
    goto(
      'https://mm.finance/swap?outputCurrency=0x97749c9b61f878a880dfe312d2594ae07aed7656'
    )
  }
</script>

<footer>
  <div class="footer-lists">
    <FooterList
      title="Socials"
      links={[
        {
          title: 'Discord',
          href: getHref('Discord'),
        },
        {
          title: 'Twitter',
          href: getHref('Twitter'),
        },
      ]}
    />
    <FooterList
      title="Learn"
      links={[
        {
          title: 'Gitbook',
          href: getHref('Gitbook'),
        },
        {
          title: 'Medium',
          href: getHref('Medium'),
        },
      ]}
    />
    <FooterList
      title="Products"
      links={[
        {
          title: 'NFT (coming...)',
          href: getHref('NFT'),
        },
        {
          title: 'DAO',
          href: getHref('DAO'),
        },
      ]}
    />
  </div>
  <Button on:click={handleClick}>Buy ${$currency}</Button>
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
      margin-left: 80px;
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
