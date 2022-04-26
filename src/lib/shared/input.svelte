<script>
  import { v4 as uuidv4 } from 'uuid'

  export let type = 'number'
  export let label
  export let placeholder
  export let rightButtonText
  export let rightButtonHandler
  export let rightButtonIconPath
  export let rightButtonDisabled = false

  const id = uuidv4()
</script>

<div class="container">
  <label for={id}>
    {label}
    <div>
      <input {type} {id} {placeholder} />
      {#if rightButtonText && rightButtonHandler}
        <button disabled={rightButtonDisabled} on:click={rightButtonHandler}>
          {#if rightButtonIconPath}
            <img src={rightButtonIconPath} alt="icon {label}" />
          {/if}
          {rightButtonText}
        </button>
      {/if}
    </div>
  </label>
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

    label:focus-within div {
      border-color: $color-white;
    }

    div {
      border: solid 1px;
      border-color: $color-gray;
      border-radius: 0.3em;
      display: flex;
      justify-content: space-between;
      margin-top: 0.8rem;
      transition: border-color 300ms;

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
        display: flex;
        align-items: center;
        gap: 1rem;
        transition: background-color 300ms;

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          background-color: rgba($color-pink, 0.6);
        }

        img {
          width: 20px;
        }
      }
    }
  }
</style>
