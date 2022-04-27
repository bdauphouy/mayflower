<script context="module">
  export const load = async ({ fetch }) => {
    const presale = import.meta.env.VITE_PUBLIC_PRESALE === 'true'

    if (!presale) {
      return {
        status: 301,
        redirect: '/',
      }
    }

    return {}
  }
</script>

<script>
  import Input from '../lib/shared/input.svelte'
  import Button from '../lib/shared/button.svelte'
</script>

<div class="container">
  <h3>Mayflower token presale</h3>
  <div>
    <Input
      label="Enter amount"
      placeholder="MFF Amount"
      rightButtonText="MAX"
      rightButtonHandler={() => false}
      rightButtonDisabled
    />
    <Button>Buy with USDC</Button>
  </div>
</div>

<style lang="scss">
  .container {
    h3 {
      font-size: $text-2xl;
      color: $color-white;
      font-weight: 500;
    }

    div {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>
