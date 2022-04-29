<script>
  import Button from '../shared/button.svelte'
  import { account, connectWallet, currency } from '../../store'
  import { onDestroy } from 'svelte'

  let balance = 0
  let walletAddress

  const unsubscribe = account.subscribe((act) => {
    if (act.balance || act.balance === 0) {
      balance = act.balance
      walletAddress = act.walletAddress
    }
  })

  onDestroy(() => {
    unsubscribe()
  })
</script>

<header>
  <h3>
    ${$currency} Balance: <span>{Math.round(balance * 1000) / 1000}</span>
  </h3>
  <Button on:click={$connectWallet}>{walletAddress || 'Connect Wallet'}</Button>
</header>

<style lang="scss">
  header {
    display: flex;
    align-items: center;
    gap: 4rem;
    align-self: flex-end;
    margin-bottom: 3.5rem;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
      width: 100%;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    h3 {
      color: $color-white;
      font-size: $text-xl;
      font-weight: 500;

      span {
        display: inline-block;
      }
    }
  }
</style>
