<script>
  export let title
  export let value
  export let valueSize = 'normal'
</script>

<div class="box {valueSize}">
  <h3>{title}</h3>
  <h4>{value}</h4>
</div>

<style lang="scss">
  .box {
    flex: 1;
    background: $color-dark-gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    padding: 2.5rem;
    border-radius: 0.3rem;

    h3 {
      color: $color-pink;
      font-weight: 400;
      font-size: $text-md;
      text-align: center;
    }

    h4 {
      color: $color-white;
      font-weight: 500;
      text-align: center;
    }

    &.normal {
      h4 {
        font-size: $text-2xl;
      }
    }

    &.large {
      h4 {
        font-size: $text-3xl;
      }
    }
  }
</style>
