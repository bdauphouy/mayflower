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
  import { account, currency } from '../store'

  export let data

  let currentAPY = 0
  let marketCap = 0
  let price = 0
  let lifetime = 0

  account.subscribe((act) => {
    currentAPY = act.currentAPY.toLocaleString()
    lifetime = act.lifetime.toLocaleString()
    marketCap = Math.round(data.pair.fdv).toLocaleString()
    price = parseFloat(data.pair.priceUsd).toLocaleString()
  })
</script>

<div class="container">
  <div>
    <Box title="Market Cap" value="${marketCap}" />
    <Box title="${$currency} Price" value="${price}" />
    <Box title="Mayflower Lifetime" value="{lifetime} Days" />
  </div>
  <div>
    <Box title="Current APY" value="{currentAPY}%" valueSize="large" />
    <Box title="Next Rebase" value="0" valueSize="large" />
  </div>
  <div>
    <Box title="{$currency} Liquiditt Value" value="{marketCap} ${$currency}" />
    <Box title="Treasury Assets" value="? ${$currency}" />
    <Box title="RFV Market Value" value="? ${$currency}" />
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
