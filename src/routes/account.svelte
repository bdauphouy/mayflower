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
  import { account, currency, nextRebase, formatSeconds } from '../store'
  import { onDestroy } from 'svelte'

  export let data

  let balance = 0
  let nextRewardYield = 0
  let nextRewardValue = 0
  let yourEarningsFiveDays = 0
  let currentAPY = 0
  let price = 0
  let nextRebaseSeconds

  const unsubscribeAccount = account.subscribe((act) => {
    if (act.balance || act.balance === 0) {
      balance = act.balance.toLocaleString()
    }

    nextRewardYield = act.nextRewardYield.toLocaleString()
    nextRewardValue = (act.nextRewardYield * balance).toLocaleString()
    yourEarningsFiveDays = (
      act.nextRewardYield *
      balance *
      48 *
      5
    ).toLocaleString()
    currentAPY = act.currentAPY.toLocaleString()
    price = parseFloat(data.pair.priceUsd)
  })

  const unsubscribeNextRebase = nextRebase.subscribe((nr) => {
    nextRebaseSeconds = nr.seconds
  })

  onDestroy(() => {
    unsubscribeAccount()
    unsubscribeNextRebase()
  })
</script>

<svelte:head>
  <title>Mayflower Finance - Account</title>
</svelte:head>
<div class="container">
  <div>
    <Box
      title="${$currency} Balance"
      value="{balance} (${(balance * price).toLocaleString()})"
    />
    <Box title="${$currency}" value="${price.toLocaleString()}" />
  </div>
  <div>
    <Box title="Current APY" value="{currentAPY}%" valueSize="large" />
    <Box
      title="Next Rebase"
      value={$formatSeconds(nextRebaseSeconds) || '...'}
      valueSize="large"
    />
  </div>
  <div>
    <Box title="Next Reward Yield" value="{nextRewardYield}%" />
    <Box
      title="Next Reward Value"
      value="{nextRewardValue} (${(nextRewardValue * price).toLocaleString()})"
    />
    <Box
      title="Your Earnings/5 Days"
      value="{yourEarningsFiveDays} (${(
        yourEarningsFiveDays * price
      ).toLocaleString()})"
    />
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    div {
      display: flex;
      flex-wrap: wrap;

      @media (max-width: 768px) {
        flex-direction: column;
      }

      &:first-child {
        background: $color-dark-gray;
        border-radius: 0.3rem;
      }

      &:not(&:first-child) {
        gap: 1.25rem;
      }
    }
  }
</style>
