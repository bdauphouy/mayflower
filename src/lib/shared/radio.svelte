<script>
  import { v4 as uuidv4 } from 'uuid'

  export let name
  export let label

  const id = uuidv4()
</script>

<div class="container">
  <input type="radio" {id} {name} />
  {#if label}
    <label for={id}>{label}</label>
  {/if}
</div>

<style lang="scss">
  .container {
    display: flex;
    gap: 1.25rem;

    input {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: solid 1px;
      background-color: transparent;
      border-color: $color-gray;
      transition-property: background-color, border-color;
      transition-duration: 300ms;

      &:checked {
        border-color: $color-pink;
        background-color: $color-pink;
      }
    }

    label {
      color: $color-white;
      font-size: $text-lg;
      font-weight: 400;
    }
  }
</style>
