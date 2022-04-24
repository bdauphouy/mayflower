<script>
  import Counter from '$lib/counter.svelte'
</script>

<div class="container">
  <img src="/logo.svg" alt="svelte logo" />
  <h3>
    Template by{' '}
    <a href="https://bdph.me/github"> @baptistedph </a>
  </h3>
  <Counter />
  <p>
    To get started, edit your{' '}
    <code>src/routes/index.svelte</code> and save to reload.
  </p>
  <div>
    <a href="https://kit.svelte.dev/"> Docs </a>
    -
    <a
      href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO"
    >
      The Net Ninja
    </a>
  </div>
</div>

<style lang="scss">
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    width: 100%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    align-items: center;
    font-family: $font-sans;

    img {
      height: 80px;
    }

    h3 {
      margin-top: 1.5rem;
      text-align: center;
      font-size: $text-xxl;
      color: $color-slate-700;
      font-weight: normal;

      a {
        color: $color-blue-500;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    p {
      margin-top: 3rem;
      font-size: $text-lg;
      line-height: 1.5em;
      color: $color-slate-700;

      code {
        margin: 0 0.25rem;
        border-radius: 4px;
        background-color: $color-slate-100;
        padding: 0.5rem;
        font-family: $font-mono;
      }
    }

    div {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      a {
        text-align: center;
        font-size: $text-lg;
        color: $color-blue-500;
        text-decoration: none;
        cursor: pointer;
        line-height: 1.5em;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
