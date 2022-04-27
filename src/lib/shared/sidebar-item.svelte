<script>
  import { page } from '$app/stores'

  export let title
  export let route
  export let iconPath
</script>

<li class:active={$page.url.pathname === route}>
  <a href={route}>
    <img src={iconPath} alt="icon {title}" />
    <h3>{title}</h3>
  </a>
</li>

<style lang="scss">
  li {
    cursor: pointer;
    position: relative;
    padding: 0 1.5rem;

    @media (max-width: 1024px) {
      padding-right: 0;
    }

    &.active,
    &:hover {
      a {
        color: $color-white;

        img {
          filter: brightness(1);
        }
      }
    }

    &.active {
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to right,
          rgba($color-blue, 0.3),
          transparent,
          transparent
        );
        top: 0;
        left: 0;
        filter: blur(4px);
        z-index: -1;
      }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 0.3rem;
        height: 100%;
        background-color: $color-pink;
        border-radius: 1rem;
      }
    }

    a {
      display: flex;
      align-items: center;
      color: $color-gray;
      font-size: $text-xl;
      gap: 1.5rem;
      font-weight: 400;
      transition: color 300ms;

      h3 {
        @media (max-width: 1024px) {
          width: 0;
          overflow: hidden;
        }
      }

      img {
        filter: brightness(0.77);
        transition: filter 300ms;
      }
    }
  }
</style>
