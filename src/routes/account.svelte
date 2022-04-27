<script>
  import Box from '$lib/shared/box.svelte'
  import { account } from '../store'

  let croBalance = 0

  account.subscribe((value) => {
    if (value) {
      croBalance = value.croBalance
    }
  })
</script>

<div class="container">
  <div>
    <Box title="$CRO Balance" value="{croBalance} ($0)" />
    <Box title="$CRO" value="$0" />
  </div>
  <div>
    <Box title="Current APY" value="300.001%" valueSize="large" />
    <Box title="Next Rebase" value="..." valueSize="large" />
  </div>
  <div>
    <Box title="Next Reward Yield" value="0.04189%" />
    <Box title="Next Reward Value" value="0 ($0)" />
    <Box title="Your Earnings/5 Days" value="0 ($0)" />
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
