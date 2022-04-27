<script>
  export let title
  export let links
</script>

<div>
  <h3>{title}</h3>
  <ul>
    {#each links as { title, href }}
      <li>
        <a {href}>{title}</a>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    h3 {
      color: $color-white;
      font-size: $text-lg;
      font-weight: 500;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;

      a {
        color: $color-gray;
        font-weight: 400;
        font-size: $text-md;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
