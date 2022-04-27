<script>
  import Radio from './radio.svelte'

  export let label
  export let price
  export let custom = false
</script>

<li>
  <Radio {custom} {label} name="gas-price" />
  <span>{price} Gwei</span>
</li>

<style lang="scss">
  li {
    display: flex;
    justify-content: space-between;

    span {
      color: $color-gray;
      font-weight: 500;
      font-size: $text-xl;

      @media (max-width: 768px) {
        font-size: $text-lg;
      }
    }
  }
</style>
