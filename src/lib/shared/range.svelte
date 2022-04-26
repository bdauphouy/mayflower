<script>
  export let label
  export let handler

  import { v4 as uuidv4 } from 'uuid'

  const id = uuidv4()

  let rangeValue = 20

  const updateRangeValue = (e) => {
    rangeValue = e.target.value
    handler(rangeValue)
  }
</script>

<div class="container">
  <label for={id}>{label}</label>
  <input
    on:input={updateRangeValue}
    style="background-size: {rangeValue}% 100%"
    value={rangeValue}
    type="range"
    step="any"
    {id}
  />
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    label {
      font-size: $text-xl;
      color: $color-white;
      font-weight: 400;
    }

    input {
      cursor: ew-resize;
      background-color: $color-black;
      background-image: linear-gradient($color-pink, $color-pink);
      background-repeat: no-repeat;
      border-radius: 1rem;
      height: 10px;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: $color-pink;
      }

      &::-moz-range-thumb {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: $color-pink;
      }

      &::-ms-thumb {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: $color-pink;
      }
    }
  }
</style>
