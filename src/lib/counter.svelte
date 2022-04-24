<script>
  let count = 0
</script>

<button on:click={() => count++}> Click to increment {count} </button>

<style lang="scss">
  button {
    margin-top: 1.5rem;
    border-radius: 4px;
    background-color: $color-blue-500;
    padding: 0.5rem 1rem;
    line-height: 1.5em;
    font-size: $text-lg;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: $color-blue-400;
    }
  }
</style>
