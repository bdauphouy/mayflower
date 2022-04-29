<script context="module">
  export const load = async ({ fetch }) => {
    const res = await fetch(
      'https://api.dexscreener.io/latest/dex/pairs/cronos/0xa68466208F1A3Eb21650320D2520ee8eBA5ba623'
    )

    const data = await res.json()

    if (res.ok) {
      return {
        props: {
          data,
        },
      }
    }

    return {
      status: res.status,
      error: new Error('Error fetching the data'),
    }
  }
</script>

<script>
  import Box from '$lib/shared/box.svelte'
  import Input from '$lib/shared/input.svelte'
  import Range from '$lib/shared/range.svelte'
  import { currency, account } from '../store'
  import { onDestroy } from 'svelte'

  export let data

  let price = 0
  let balance = 0
  let currentAPY = 0

  const unsubscribe = account.subscribe((act) => {
    if (act.balance || act.balance === 0) {
      balance = act.balance.toLocaleString()
    }
    currentAPY = act.currentAPY.toLocaleString()
    price = parseFloat(data.pair.priceUsd).toLocaleString()
  })

  const handleAmount = () => {}

  const handlePriceAtPurchase = () => {}

  const handleFuturPrice = () => {}

  const handleRange = (value) => {}

  onDestroy(() => {
    unsubscribe()
  })
</script>

<div class="container">
  <h3>Calculator</h3>
  <div>
    <Box title="${$currency} Price" value="${price}" />
    <Box title="APY" value="{currentAPY}%" />
    <Box title="My {$currency} Balance" value="{balance} {$currency}" />
  </div>
  <div>
    <div>
      <Input
        label="{$currency} Amount"
        placeholder="{$currency} Amount"
        rightButtonText="MAX"
        rightButtonHandler={handleAmount}
      />
      <Input label="APY (%)" value={currentAPY} />
    </div>
    <div>
      <Input
        label="Price at purchase ($)"
        placeholder="0"
        rightButtonText="Current"
        rightButtonHandler={handlePriceAtPurchase}
      />
      <Input
        label="Futur {$currency} price ($)"
        placeholder="0"
        rightButtonText="Current"
        rightButtonHandler={handleFuturPrice}
      />
    </div>
  </div>
  <Range label="30 Days" handler={handleRange} />
  <ul>
    <li>
      <span>Your initial investment</span>
      <span>$0.00</span>
    </li>
    <li>
      <span>Current wealth</span>
      <span>$0.00</span>
    </li>
    <li>
      <span>{$currency} rewards estimation</span>
      <span>$0.00</span>
    </li>
    <li>
      <span>Potential return</span>
      <span>$0.00</span>
    </li>
  </ul>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    background: $color-dark-gray;
    border-radius: 0.3rem;
    padding: 2.5rem;

    @media (max-width: 768px) {
      padding: 1.5rem;
    }

    div {
      display: flex;
      flex-wrap: wrap;
    }

    h3 {
      color: $color-white;
      font-size: $text-2xl;
      font-weight: 500;

      + div + div {
        margin-bottom: 1.25rem;
        flex-direction: column;
        gap: 2.5rem;

        div {
          gap: 2.5rem;
        }
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-top: 1.25rem;

      li {
        font-weight: 400;
        font-size: $text-lg;
        color: $color-white;
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
      }
    }
  }
</style>
