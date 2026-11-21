// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is the YouTube video named by VIDEO.json; this program's
// only job is to hand that file to the grader: it copies VIDEO.json from the
// repository root (the bot directory) into the output directory.
//
// Locally, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and
// /output, e.g.:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
} catch (err) {
  console.error(
    `could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`,
  );
  process.exit(1);
}
