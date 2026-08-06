import { glamsterdam } from "./glamsterdam"
import { hegota } from "./hegota"
import type { UpgradeData } from "./types"

export * from "./types"

export const upgrades: Record<string, UpgradeData> = {
  glamsterdam,
  hegota,
}
