// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is the YouTube video named by VIDEO.json; this program's
// only job is to hand that file to the grader: it copies VIDEO.json from the
// repository root (the bot directory) into the output directory.
//
// Locally, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and
// /output, e.g.:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function fail(what: string, err: unknown): never {
  console.error(`${what}: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

const sourcePath = join(botDir, "VIDEO.json");
const destPath = join(outputDir, "VIDEO.json");

// Validate before handing over: the grader reads the video address from
// this file, so a malformed VIDEO.json or one without a usable url must
// fail loudly here instead of being copied through in silence.
let raw: string;
try {
  raw = readFileSync(sourcePath, "utf8");
} catch (err) {
  fail(`could not read VIDEO.json from ${botDir}`, err);
}
let parsed: { url?: unknown };
try {
  parsed = JSON.parse(raw!) as { url?: unknown };
} catch (err) {
  fail(`VIDEO.json in ${botDir} is not valid JSON`, err);
}
if (typeof parsed!.url !== "string" || parsed!.url.length === 0) {
  console.error(`VIDEO.json in ${botDir} has no non-empty "url" string`);
  process.exit(1);
}

try {
  copyFileSync(sourcePath, destPath);
} catch (err) {
  fail(`could not copy VIDEO.json from ${botDir} to ${outputDir}`, err);
}

// Verify the handover landed intact: the copy must be byte-for-byte the
// same size as the source the validation above just read.
const copiedBytes = statSync(destPath).size;
if (copiedBytes !== Buffer.byteLength(raw!)) {
  console.error(
    `copied VIDEO.json is ${copiedBytes} bytes but the source is ${Buffer.byteLength(raw!)} bytes`,
  );
  process.exit(1);
}
