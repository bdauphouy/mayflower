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
  import { account, currency, nextRebase, formatSeconds, round } from '../store'
  import { onDestroy } from 'svelte'

  export let data

  let currentAPY = 0
  let marketCap = 0
  let price = 0
  let lifetime = 0
  let balance = 0
  let nextRebaseSeconds

  const unsubscribeAccount = account.subscribe((act) => {
    if (act.balance || act.balance === 0) {
      balance = act.balance.toLocaleString()
    }

    currentAPY = act.currentAPY.toLocaleString()
    lifetime = act.lifetime.toLocaleString()
    marketCap = $round(data.pair.fdv, 0).toLocaleString()
    price = parseFloat(data.pair.priceUsd).toLocaleString()
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
  <title>Mayflower Finance - Dashboard</title>
</svelte:head>
<div class="container">
  <div>
    <Box title="Market Cap" value="${marketCap}" />
    <Box title="${$currency} Price" value="${price}" />
    <Box title="Mayflower Lifetime" value="{lifetime} Days" />
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
    <Box title="{$currency} Liquiditt Value" value="{marketCap} ${$currency}" />
    <Box title="Treasury Assets" value="{balance} ${$currency}" />
    <Box title="RFV Market Value" value="{balance} ${$currency}" />
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
