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
  import { currency, account, round } from '../store'
  import { onDestroy, onMount } from 'svelte'

  export let data

  let price = 0
  let balance = 0
  let currentAPY = 0
  let interestRate = 0

  const unsubscribe = account.subscribe((act) => {
    if (act.balance || act.balance === 0) {
      balance = act.balance.toLocaleString()
    }

    currentAPY = act.currentAPY
    interestRate = act.interestRate

    price = parseFloat(data.pair.priceUsd)
  })

  let amount = 0
  let priceAtPurchase = 0
  let futurePrice = 0
  let days = 30

  const handleAmount = () => {
    amount = balance
    calculate()
  }

  const handlePriceAtPurchase = () => {
    priceAtPurchase = price
    calculate()
  }

  const handleFuturPrice = () => {
    futurePrice = price
    calculate()
  }

  let initialInvestment = 0
  let currentWealth = 0
  let rewardsEstimation = 0
  let potentialReturn = 0

  const calculate = () => {
    initialInvestment = $round(priceAtPurchase * amount)
    currentWealth = $round(priceAtPurchase * amount)
    rewardsEstimation = $round(
      Math.pow(1 + interestRate, 48 * days) * amount - amount
    )
    potentialReturn = $round(
      Math.max(rewardsEstimation * futurePrice, 0) + amount * priceAtPurchase
    )
  }

  onMount(() => {
    calculate()
  })

  onDestroy(() => {
    unsubscribe()
  })
</script>

<svelte:head>
  <title>Mayflower Finance - Calculator</title>
</svelte:head>
<div class="container">
  <h3>Calculator</h3>
  <div>
    <Box title="${$currency} Price" value="${price.toLocaleString()}" />
    <Box title="APY" value="{currentAPY.toLocaleString()}%" />
    <Box title="My {$currency} Balance" value="{balance} {$currency}" />
  </div>
  <div>
    <div>
      <Input
        label="{$currency} Amount"
        placeholder="{$currency} Amount"
        rightButtonText="MAX"
        bind:value={amount}
        on:change={calculate}
        on:rightButtonClick={handleAmount}
      />
      <Input disabled label="APY (%)" value={currentAPY} />
    </div>
    <div>
      <Input
        label="Price at purchase ($)"
        placeholder="0"
        rightButtonText="Current"
        bind:value={priceAtPurchase}
        on:change={calculate}
        on:rightButtonClick={handlePriceAtPurchase}
      />
      <Input
        label="Future {$currency} price ($)"
        placeholder="0"
        rightButtonText="Current"
        bind:value={futurePrice}
        on:change={calculate}
        on:rightButtonClick={handleFuturPrice}
      />
    </div>
  </div>
  <Range
    label="{days} Days"
    max="365"
    bind:value={days}
    on:change={calculate}
  />
  <ul>
    <li>
      <span>Your initial investment</span>
      <span>${initialInvestment.toLocaleString()}</span>
    </li>
    <li>
      <span>Current wealth</span>
      <span>${currentWealth.toLocaleString()}</span>
    </li>
    <li>
      <span>{$currency} rewards estimation</span>
      <span>${rewardsEstimation.toLocaleString()}</span>
    </li>
    <li>
      <span>Potential return</span>
      <span>${potentialReturn.toLocaleString()}</span>
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
