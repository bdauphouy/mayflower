<script>
  import Button from '../shared/button.svelte'
  import { account, connectWallet } from '../../store'

  let croBalance = 0
  let walletAddress
  let connectWalletFunction

  connectWallet.subscribe((cw) => {
    connectWalletFunction = cw
  })

  account.subscribe((act) => {
    if (act.croBalance) {
      croBalance = act.croBalance
    }

    walletAddress = act.walletAddress
  })
</script>

<header>
  <h3>
    $CRO Balance: <span>{Math.round(croBalance * 1000) / 1000}</span>
  </h3>
  <Button on:click={connectWalletFunction}
    >{walletAddress || 'Connect Wallet'}</Button
  >
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
