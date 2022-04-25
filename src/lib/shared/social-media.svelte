<script>
  export let title
  export let href
  export let iconPath
</script>

<li>
  <a {href}>
    <img src={iconPath} alt="icon {title}" {title} />
  </a>
</li>

<style lang="scss">
  li {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: solid 1px $color-gray;
    cursor: pointer;
    transition: transform 300ms;

    &:hover {
      transform: translate3d(0, -0.3rem, 0);
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;

      img {
        width: 20px;
      }
    }
  }
</style>
