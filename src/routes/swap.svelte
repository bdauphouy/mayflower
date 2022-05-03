<svelte:head>
  <title>Mayflower Finance - Swap</title>
</svelte:head>
<div id="app-bogged-embed">
  <iframe
    title="swap"
    src="https://app.bogged.finance/cro/swap?chain=cronos&tokenOut=0x97749c9B61F878a880DfE312d2594AE07AEd7656&embed=1&theme=light"
  />
</div>

<style lang="scss">
  #app-bogged-embed {
    position: relative;
    width: 100%;
    height: calc(800px * (2 - $zoom));
  }

  #app-bogged-embed iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 0;
  }
</style>
