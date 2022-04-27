import { writable } from 'svelte/store'

export const account = writable({
  currentAPY: 69420,
  mffLifetime: Math.ceil(
    (new Date() - new Date('2022/04/30')) / (1000 * 60 * 60 * 24)
  ),
  nextRewardYield: 0.06335
})
