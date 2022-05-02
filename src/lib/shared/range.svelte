<script>
  import { createEventDispatcher } from 'svelte'
  import { v4 as uuidv4 } from 'uuid'

  export let label
  export let value
  export let max = 100
  export let step = 1

  const dispatch = createEventDispatcher()

  const id = uuidv4()

  const handleInput = (e) => {
    value = +e.target.value
    dispatch('change', {
      value,
    })
  }
</script>

<div class="container">
  <label for={id}>{label}</label>
  <input
    on:input={handleInput}
    style="background-size: {value / (max * 0.01)}% 100%"
    type="range"
    {step}
    {max}
    {value}
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
