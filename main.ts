// u-daring-gecko-25-one-line-laugh-sprint-cda708b2 — variant vB
// Writes exactly one original one-line joke about everyday life
// to /output/entry.txt. Deterministic, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I set five alarms to wake up early; my phone now thinks I'm a morning person and my bed thinks I'm a liar.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
