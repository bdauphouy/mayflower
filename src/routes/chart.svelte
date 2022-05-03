<svelte:head>
  <title>Mayflower Finance - Chart</title>
</svelte:head>
<div id="dexscreener-embed">
  <iframe
    title="chart"
    src="https://dexscreener.com/cronos/0xbA452A1c0875D33a440259B1ea4DcA8f5d86D9Ae?embed=1&theme=dark"
  />
</div>

<style>
  #dexscreener-embed {
    position: relative;
    width: 100%;
    padding-bottom: 125%;
  }

  @media (min-width: 1400px) {
    #dexscreener-embed {
      padding-bottom: 65%;
    }
  }

  #dexscreener-embed iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 0;
  }
</style>
