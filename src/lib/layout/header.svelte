<script>
  import Button from '../shared/button.svelte'
  import { account } from '../../store'

  let croBalance = 0
  let walletAdress

  const connectWallet = async () => {
    if (!window.ethereum) {
      return
    }

    const accounts = await window.ethereum
      .request({
        method: 'eth_requestAccounts',
      })
      .catch((err) => alert(err.message))

    if (!accounts) return

    croBalance = await window.ethereum.request({
      method: 'eth_getBalance',
      params: ['0xB7e390864a90b7b923C9f9310C6F98aafE43F707', 'latest'],
    })

    // 0xB7e390864a90b7b923C9f9310C6F98aafE43F707

    croBalance = parseInt(croBalance.toString(10)) / 10e17

    walletAdress = accounts[0]

    account.update((account) => {
      return {
        ...account,
        walletAdress,
        croBalance,
      }
    })
  }
</script>

<header>
  <h3>
    $CRO Balance: <span>{Math.round(croBalance * 1000) / 1000}</span>
  </h3>
  <Button on:click={connectWallet}>{walletAdress || 'Connect Wallet'}</Button>
</header>

<style lang="scss">
  header {
    display: flex;
    align-items: center;
    gap: 4rem;
    align-self: flex-end;
    margin-bottom: 3.5rem;

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
