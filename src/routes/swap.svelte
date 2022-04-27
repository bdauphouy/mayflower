<script>
  import Input from '$lib/shared/input.svelte'
  import TooltipInput from '$lib/shared/tooltip-input.svelte'
  import Button from '$lib/shared/button.svelte'
  import GasRadio from '$lib/shared/gas-radio.svelte'
  import { account, connectWallet } from '../store'

  let currentTab = 1
  let walletAddress
  let connectWalletFunction

  connectWallet.subscribe((cw) => {
    connectWalletFunction = cw
  })

  account.subscribe((act) => {
    walletAddress = act.walletAddress
  })

  const handleFrom = () => {}

  const handleTo = () => {}

  const go = (tab) => {
    currentTab = tab
  }
</script>

{#if currentTab === 2}
  <div class="container tab-2">
    <header>
      <button on:click={() => go(1)}>
        <img src="/arrow-left.svg" alt="icon arrow left" />
      </button>
      <h3>Gas Price</h3>
    </header>
    <div>
      <img src="/gas.svg" alt="icon gas" />
      <h4>
        Gas Price:
        <span>32 Gwei</span>
      </h4>
    </div>
    <ul>
      <GasRadio label="Standard" price="5" />
      <GasRadio label="Fast" price="5" />
      <GasRadio label="Fastest" price="5" />
      <GasRadio custom label="Custom" price="5" />
    </ul>
  </div>
{:else if currentTab === 3}
  <div class="container tab-3">
    <header>
      <button on:click={() => go(1)}>
        <img src="/arrow-left.svg" alt="icon arrow left" />
      </button>
      <h3>Settings</h3>
    </header>
    <ul>
      <li>
        <TooltipInput
          label="Slippage"
          helpTooltipText="lorem ipsum"
          helpTooltipTheme="dark"
          placeholder="0.0"
        />
      </li>
      <li>
        <TooltipInput
          label="Autotax"
          helpTooltipText="lorem ipsum"
          helpTooltipTheme="dark"
          type="checkbox"
        />
      </li>
      <li>
        <TooltipInput
          label="Max Auto-Tax"
          helpTooltipText="lorem ipsum"
          helpTooltipTheme="dark"
          placeholder="0.0"
        />
      </li>
      <li>
        <TooltipInput
          label="Route Refresh Time"
          helpTooltipText="lorem ipsum"
          helpTooltipTheme="dark"
          placeholder="0.0"
        />
      </li>
      <li>
        <TooltipInput
          label="Multi Tx"
          helpTooltipText="lorem ipsum"
          helpTooltipTheme="dark"
          placeholder="0.0"
        />
      </li>
      <li>
        <TooltipInput
          label="Show Swap Loading"
          helpTooltipText="lorem ipsum"
          helpTooltipTheme="dark"
          type="checkbox"
        />
      </li>
      <li>
        <TooltipInput
          label="Friendly Errors"
          helpTooltipText="lorem ipsum"
          helpTooltipTheme="dark"
          type="checkbox"
        />
      </li>
    </ul>
  </div>
{:else}
  <div class="container tab-1">
    <header>
      <h3>Swap Box</h3>
      <div>
        <span>5 Gwei</span>
        <button on:click={() => go(2)}>
          <img src="/gas.svg" alt="icon gas" />
        </button>
        <button on:click={() => go(3)}>
          <img src="/settings.svg" alt="icon settings" />
        </button>
      </div>
    </header>
    <Input
      label="From"
      placeholder="0.00"
      rightButtonText="BNB"
      rightButtonHandler={handleFrom}
      rightButtonIconPath="/bnb.svg"
      rightButtonDisabled
    />
    <button>
      <img src="/swap.svg" alt="icon swap" />
    </button>
    <Input
      label="To"
      placeholder="0.00"
      rightButtonText="MFF"
      rightButtonHandler={handleTo}
      rightButtonIconPath="/mff.svg"
      rightButtonDisabled
    />
    <div class="tooltip-inputs-container">
      <TooltipInput
        type="checkbox"
        label="Autotax"
        helpTooltipText="lorem ipsum"
      />
      <TooltipInput label="Slippage" helpTooltipText="lorem ipsum" />
    </div>
    <div class="button-container">
      <Button on:click={connectWalletFunction}
        >{walletAddress || 'Connect Wallet'}</Button
      >
    </div>
    <div class="summary-container">
      <h3>Summary</h3>
      <ul>
        <li>
          <span>BNB Price</span>
          <span>$409.10</span>
        </li>
        <li>
          <span>MFF Price</span>
          <span>$0.15550</span>
        </li>
      </ul>
    </div>
  </div>
{/if}

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    background: $color-dark-gray;
    border-radius: 0.3rem;
    padding: 2.5rem;

    @media (max-width: 768px) {
      padding: 1.5rem;
    }

    h3 {
      font-size: $text-2xl;
      color: $color-white;
      font-weight: 500;
    }

    header {
      display: flex;
      gap: 1.5rem;

      button {
        cursor: pointer;
      }
    }

    &.tab-3 {
      header + ul {
        background-color: $color-black;
        display: flex;
        flex-direction: column;
        padding: 2.5rem;
        border-radius: 0.3rem;
        margin-top: 1.25rem;
        gap: 2rem;

        @media (max-width: 768px) {
          padding: 0;
          background-color: transparent;
        }
      }
    }

    &.tab-2 {
      header + div {
        display: flex;
        gap: 1.5rem;
        margin-top: 1rem;

        img {
          filter: brightness(0.77);
          width: 30px;
        }

        h4 {
          color: $color-gray;
          font-weight: 400;
          font-size: $text-xl;

          span {
            color: $color-pink;
          }
        }

        + ul {
          background-color: $color-black;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          padding: 2.5rem;
          border-radius: 0.3rem;
          margin-top: 1.25rem;

          @media (max-width: 768px) {
            padding: 0;
            background-color: transparent;
          }
        }
      }
    }

    &.tab-1 header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      div {
        display: flex;
        gap: 1.5rem;

        span {
          background-color: $color-gray;
          padding: 0.4rem 0.8rem;
          border-radius: 0.3rem;
        }

        button {
          width: 20px;
          cursor: pointer;

          &:hover img {
            filter: brightness(1);
          }

          img {
            filter: brightness(0.77);
            transition: filter 300ms;
          }
        }
      }
    }

    > button {
      background-color: $color-black;
      align-self: center;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 0.5rem;
      margin-bottom: -1.5rem;
      border: solid 1px;
      border-color: transparent;
      transition: border-color 300ms;
      cursor: pointer;

      @media (max-width: 768px) {
        width: 40px;
        height: 40px;

        img {
          width: 50%;
          height: 50%;
        }
      }

      &:hover,
      &:active {
        border-color: $color-gray;
      }
    }

    .button-container {
      align-self: center;
      margin: 1rem 0;
    }

    .summary-container {
      background-color: $color-black;
      padding: 1.5rem 2rem;
      border-radius: 0.3rem;
      display: flex;
      flex-direction: column;

      @media (max-width: 768px) {
        padding: 0;
        background-color: transparent;
      }

      h3 {
        font-size: $text-xl;
        align-self: center;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 2.5rem;

        li {
          font-weight: 400;
          font-size: $text-lg;
          color: $color-white;
          display: flex;
          justify-content: space-between;
          gap: 0.5rem;
        }
      }
    }

    .tooltip-inputs-container {
      display: flex;
      gap: 2rem;
      justify-content: flex-end;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
</style>
