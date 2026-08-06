import type { UpgradeData } from "./types"

export const hegota = {
  name: "Hegotá",
  slug: "hegota",
  "consensus-layer": "Heze",
  "execution-layer": "Bogotá",
  "meta-eip": 8081,
  phase: "planning",
  // Forkcast records the target as the year only, and nothing is confirmed:
  // the meta EIP is still Draft and no activation has been scheduled.
  "mainnet-target": { when: { year: 2027 }, confirmed: false },
  // Deliberately empty. No devnet or testnet fork has a date, and `phase`
  // already encodes where the upgrade sits in the sequence — see README.
  milestones: [],
  // Only FOCIL has a section on the page. Frame Transaction (EIP-8141) is CFI
  // and the ~20 PFI proposals are listed in the meta EIP; none are documented
  // here, so none are recorded here.
  eips: [{ id: 7805, status: "sfi", headliner: true }],
  "facts-verified": "2026-08-06",
  "source-url": "https://forkcast.org/upgrade/hegota",
} satisfies UpgradeData
