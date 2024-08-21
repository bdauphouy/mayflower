import { readable, writable } from 'svelte/store'

export const currency = readable('MFF')

export const account = writable({
  currentAPY: 69420,
  lifetime: Math.ceil(
    (new Date() - new Date('2022/04/30')) / (1000 * 60 * 60 * 24)
  ),
  nextRewardYield: 0.06335,
  interestRate: 0.0006365,
})

export const connectWallet = readable(async () => {
  let balance
  let walletAddress

  const unsubscribe = account.subscribe((act) => {
    balance = act.balance
    walletAddress = act.walletAddress
  })

  unsubscribe()

  if (walletAddress && balance) {
    document.cookie =
      'mayflower-account-data=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    balance = 0
    walletAddress = null
    account.update((act) => {
      return {
        ...act,
        walletAddress,
        balance,
      }
    })
    return
  }

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
    params: [accounts[0], 'latest'],
    // params: ['0xB7e390864a90b7b923C9f9310C6F98aafE43F707', 'latest'],
  })

  balance = parseInt(balance.toString(10)) / 10e17

  walletAddress = accounts[0]

  document.cookie = `mayflower-account-data=${JSON.stringify({
    walletAddress,
    balance,
  })}`

  account.update((act) => {
    return {
      ...act,
      walletAddress,
      balance,
    }
  })
})

export const formatSeconds = readable((fullSeconds) => {
  if (fullSeconds === null) return

  const minutes = Math.floor(fullSeconds / 60)
  const seconds = (fullSeconds - minutes * 60).toString().padStart(2, '0')

  return `${minutes}:${seconds}`
})

export const round = readable(
  (n, d = 2) => Math.round(n * Math.pow(10, d)) / Math.pow(10, d)
)

export const socialLinks = readable([
  {
    title: 'Discord',
    href: 'https://discord.gg/Ej4SwpxJVR',
    iconPath: '/discord.svg',
  },
  {
    title: 'Gitbook',
    href: 'https://mayflowerfinance.gitbook.io/mayflower-finance1/',
    iconPath: '/gitbook.svg',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/MayFFinance',
    iconPath: '/twitter.svg',
  },
  {
    title: 'Medium',
    href: ' https://medium.com/@mayflowerfinance1',
  },
  {
    title: 'NFT',
    href: 'https://twitter.com/UNKNOWNSDAO',
  },
  {
    title: 'DAO',
    href: 'https://twitter.com/UNKNOWNSDAO',
  },
])
