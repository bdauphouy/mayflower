import { writable, readable } from 'svelte/store'

export const currency = readable('MFF')

export const account = writable({
  currentAPY: 69420,
  lifetime: Math.ceil(
    (new Date() - new Date('2022/04/30')) / (1000 * 60 * 60 * 24)
  ),
  nextRewardYield: 0.06335,
})

export const connectWallet = readable(async () => {
  let balance
  let walletAddress

  if (!window.ethereum) {
    return
  }

  const accounts = await window.ethereum
    .request({
      method: 'eth_requestAccounts',
    })
    .catch((err) => alert(err.message))

  if (!accounts) return

  balance = await window.ethereum.request({
    method: 'eth_getBalance',
    // params: [accounts[0], 'latest'],
    params: ['0xB7e390864a90b7b923C9f9310C6F98aafE43F707', 'latest'],
  })

  balance = parseInt(balance.toString(10)) / 10e17

  walletAddress = accounts[0]

  account.update((account) => {
    return {
      ...account,
      walletAddress,
      balance,
    }
  })
})
