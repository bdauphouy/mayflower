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
  import { account } from '../store'

  export let data

  let croBalance = 0
  let nextRewardYield = 0
  let nextRewardValue = 0
  let yourEarningsFiveDays = 0
  let currentAPY = 0
  let croPrice = 0


  account.subscribe(act => {
    if (act.croBalance) {
      croBalance = act.croBalance.toLocaleString()
    }

    nextRewardYield = act.nextRewardYield.toLocaleString()
    nextRewardValue = (act.nextRewardYield * croBalance).toLocaleString()
    yourEarningsFiveDays = (act.nextRewardYield * croBalance * 48 * 5).toLocaleString()
    currentAPY = act.currentAPY.toLocaleString()
    croPrice = parseFloat(data.pair.priceUsd)
  })
</script>

<div class="container">
  <div>
    <Box title="$CRO Balance" value="{croBalance} (${(croBalance * croPrice).toLocaleString()})" />
    <Box title="$CRO" value="$0" />
  </div>
  <div>
    <Box title="Current APY" value="{currentAPY}%" valueSize="large" />
    <Box title="Next Rebase" value="..." valueSize="large" />
  </div>
  <div>
    <Box title="Next Reward Yield" value="{nextRewardYield}%" />
    <Box title="Next Reward Value" value="{nextRewardValue} (${(nextRewardValue * croPrice).toLocaleString()})" />
    <Box title="Your Earnings/5 Days" value="{yourEarningsFiveDays} (${(yourEarningsFiveDays * croPrice).toLocaleString()})" />
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    div {
      display: flex;

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
