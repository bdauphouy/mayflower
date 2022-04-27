<script>
  import Box from '$lib/shared/box.svelte'
  import Input from '$lib/shared/input.svelte'
  import Range from '$lib/shared/range.svelte'

  const handleMFFAmount = () => {}

  const handlePriceAtPurchase = () => {}

  const handleFuturMFFPrice = () => {}

  const handleRange = (value) => {}
</script>

<div class="container">
  <h3>Calculator</h3>
  <div>
    <Box title="$MFF Price" value="$0" />
    <Box title="APY" value="151,631.58%" />
    <Box title="My MFF Balance" value="0 MFF" />
  </div>
  <div>
    <div>
      <Input
        label="MFF Amount"
        placeholder="MFF Amount"
        rightButtonText="MAX"
        rightButtonHandler={handleMFFAmount}
      />
      <Input label="APY (%)" placeholder="151.631" />
    </div>
    <div>
      <Input
        label="Price at purchase ($)"
        placeholder="0"
        rightButtonText="Current"
        rightButtonHandler={handlePriceAtPurchase}
      />
      <Input
        label="Futur MFF price ($)"
        placeholder="0"
        rightButtonText="Current"
        rightButtonHandler={handleFuturMFFPrice}
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
      <span>MFF rewards estimation</span>
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
        gap: .5rem;
      }
    }
  }
</style>
