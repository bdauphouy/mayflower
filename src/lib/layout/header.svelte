<script>
  import Button from '../shared/button.svelte'

  const balance = 0
</script>

<header>
  <h3>$CRO Balance: {balance}</h3>
  <Button>Connect Wallet</Button>
</header>

<style lang="scss">
  header {
    display: flex;
    align-items: center;
    gap: 4rem;
    align-self: flex-end;
    margin-bottom: 3.5rem;

    h3 {
      color: $color-white;
      font-size: $text-xl;
      font-weight: 500;
    }
  }
</style>
