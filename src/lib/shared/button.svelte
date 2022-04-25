<button><slot /></button>

<style lang="scss">
  button {
    background: linear-gradient(to right, $color-blue, $color-purple);
    border-radius: 2rem;
    padding: 0.8rem 2rem;
    color: $color-white;
    font-weight: 500;
    font-size: $text-xl;
    cursor: pointer;
  }
</style>
