<script>
  import { v4 as uuidv4 } from 'uuid'

  export let label
  export let placeholder
  export let rightButtonText
  export let rightButtonHandler
  export let type = 'number'

  const id = uuidv4()
</script>

<div class="container">
  <label for={id}>{label}</label>
  <div>
    <input {type} {id} {placeholder} />
    {#if rightButtonText && rightButtonHandler}
      <button on:click={rightButtonHandler}>{rightButtonText}</button>
    {/if}
  </div>
</div>

<style lang="scss">
  .container {
    flex: 1;

    label,
    input {
      font-size: $text-lg;
      color: $color-white;
      font-weight: 400;
    }

    div {
      border: solid 1px $color-gray;
      border-radius: 0.3em;
      display: flex;
      justify-content: space-between;
      margin-top: 0.8rem;

      input {
        padding: 0.8rem 1.2rem;
        flex: 1;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        &[type='number'] {
          -moz-appearance: textfield;
        }
      }

      button {
        font-size: $text-lg;
        font-weight: 400;
        color: $color-black;
        padding: 0 1.2rem;
        background-color: $color-pink;
        border-radius: 0.3rem;
        cursor: pointer;
        transition: background-color 300ms;

        &:hover {
          background-color: rgba($color-pink, 0.8);
        }
      }
    }
  }
</style>
