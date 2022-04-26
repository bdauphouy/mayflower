<script>
  import { v4 as uuidv4 } from 'uuid'

  export let type = 'number'
  export let label
  export let helpTooltipText
  export let placeholder

  const id = uuidv4()
</script>

<div class="container">
  <div>
    <label for={id}>
      {label}
    </label>
    {#if helpTooltipText}
      <div>
        <img src="/help.svg" alt="icon help tooltip" />
      </div>
      <div class="tooltip">
        <p>
          {helpTooltipText}
        </p>
      </div>
    {/if}
  </div>
  <div>
    <input {type} {id} {placeholder} />
    {#if type === 'number'}
      <span>%</span>
    {/if}
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    margin-top: 1.25rem;

    > div {
      &:first-child {
        display: flex;
        gap: 1rem;
        position: relative;

        label {
          font-size: $text-md;
          color: $color-gray;
          font-weight: 400;
        }

        > div:not(.tooltip) {
          width: 24px;
          height: 24px;
          background-color: $color-gray;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: help;

          &:hover + .tooltip {
            visibility: visible;
            opacity: 1;
            transition: opacity 300ms 0ms, visibility 0ms 0ms;
          }
        }

        .tooltip {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          width: 150px;
          background-color: $color-black;
          bottom: 40px;
          border-radius: 0.3rem;
          padding: 1rem;
          right: 0;
          transform: translateX(63px);
          transition: opacity 300ms 0ms, visibility 0ms 300ms;

          &::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: -20px;
            width: 20px;
            height: 20px;
            background-color: $color-black;
            border-radius: 0.3rem;
            transform: translate(-50%, -12px) rotate(45deg);
          }

          p {
            color: $color-white;
            font-weight: 400;
            font-size: $text-sm;
          }
        }
      }

      &:last-child {
        border: solid 1px;
        border-color: $color-gray;
        border-radius: 0.3em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: border-color 300ms;

        input {
          &[type='checkbox'] {
            width: 30px;
            height: 30px;

            &:checked {
              background-image: url('/check-mark.svg');
              background-repeat: no-repeat;
              background-position: center;
            }
          }

          &[type='number'] {
            -moz-appearance: textfield;
            padding: 0.8rem 1.2rem;
            width: 100px;
            flex: 1;
            font-size: $text-lg;
            color: $color-white;
            font-weight: 400;

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }

            + span {
              font-size: $text-lg;
              color: $color-gray;
              margin-right: 1.2rem;
            }
          }
        }
      }
    }
  }
</style>
