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

  let currentAPY = 0
  let marketCap = 0
  let croPrice = 0
  let mffLifetime = 0

  account.subscribe((act) => {
    currentAPY = act.currentAPY.toLocaleString()
    mffLifetime = act.mffLifetime.toLocaleString()
    marketCap = Math.round(data.pair.fdv).toLocaleString()
    croPrice = parseFloat(data.pair.priceUsd).toLocaleString()
  })
</script>

<div class="container">
  <div>
    <Box title="Market Cap" value="${marketCap}" />
    <Box title="$CRO Price" value="${croPrice}" />
    <Box title="Mayflower Lifetime" value="{mffLifetime} Days" />
  </div>
  <div>
    <Box title="Current APY" value="{currentAPY}%" valueSize="large" />
    <Box title="Next Rebase" value="0" valueSize="large" />
  </div>
  <div>
    <Box title="Metis Liquiditt Value" value="{marketCap} $METIS" />
    <Box title="Treasury Assets" value="? $METIS" />
    <Box title="RFV Market Value" value="? $METIS" />
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
