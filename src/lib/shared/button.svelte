<button><span><slot /></span></button>

<style lang="scss">
  button {
    background-image: linear-gradient(to right, $color-blue, $color-purple);
    border-radius: 2rem;
    padding: 0.8rem 2rem;

    cursor: pointer;
    text-align: center;
    position: relative;
    overflow: hidden;

    span {
      color: $color-white;
      font-weight: 500;
      font-size: $text-xl;
      position: relative;
      z-index: 1;
    }

    &:hover {
      &::before,
      &::after {
        opacity: 0;
      }
    }

    &::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: linear-gradient(to right, $color-purple, transparent);
      transition: opacity 700ms;
    }

    &::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 100%;
      top: 0;
      right: 0;
      background-image: linear-gradient(to right, transparent, $color-blue);
      transition: opacity 700ms;
    }
  }
</style>
