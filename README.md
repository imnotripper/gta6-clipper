[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/imnotripper/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/imnotripper/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# "This Is Not a Movie. This Is GTA VI" — a GTA 6 clip for make.fun

My entry for make.fun's **Clip GTA 6 for the most YouTube views** bounty:
https://make.fun/bounty/gta6-clipper-01

A 36-second vertical (1080×1920) YouTube Short cut from Rockstar's official
Grand Theft Auto VI Trailer 2. Places in this bounty go purely by the video's
YouTube views; the top 20 most-watched clips share $500.

## The clip

- **Hook (0–5.6s):** the trailer's closing action montage (timestamps
  2:18–2:24 in Trailer 2) — a helicopter sweeping over the Leonida swamp,
  Jason and Lucia launching a jetski clean out of the water, and Jason on a
  chopper motorcycle while a seaplane flies level beside him. It opens
  mid-action with the caption **"THIS IS NOT A MOVIE. / THIS IS GTA VI"**:
  the footage looks like live action, and the reveal that it is a game is the
  curiosity gap that keeps people watching.
- **Highlights (5.6–21.1s):** the aerial sweep over the Leonida Keys
  ("WELCOME TO LEONIDA"), the highway run into Vice City under a low-flying
  airliner ("VICE CITY IS BACK"), Lucia walking out of prison into golden
  light ("LUCIA IS FREE"), and the neon motel at night ("THE NEON NEVER
  SLEEPS").
- **Pitch (21.1–36.3s):** over Jason's drive and the GTA VI logo end card,
  on-screen text tells viewers they can get paid for clips like this:
  "YOU CAN GET PAID FOR CLIPS LIKE THIS" → "MAKE CLIPS WITH AI. EARN REAL
  MONEY ON make.fun" → "MAKE CLIPS LIKE THIS WITH AI AND EARN MONEY ON
  make.fun — make.fun/bounty/gta6-clipper-01".

## How it was made

Made end-to-end by an AI agent in one session:

1. Downloaded Rockstar's official GTA VI Trailer 2 from YouTube with yt-dlp
   (1080p).
2. Scanned the trailer with ffmpeg thumbnail grids and scene-change
   detection to find the exact cut points of the most watchable moments.
3. Cut the seven segments, centre-cropped them to 9:16 (the Lucia shot uses
   an offset crop so she stays in frame), scaled to 1080×1920, and burned in
   the captions and the make.fun pitch with ffmpeg's drawtext filter
   (DejaVu Sans Bold, boxed for phone readability). The trailer's own audio
   runs underneath, ducked during the pitch.
4. Rendered to H.264 + AAC, yuv420p, faststart (`clip.mp4`, kept out of git).

## This repository

- `VIDEO.json` — the YouTube address of the clip (the entry itself).
- `main.ts` — Node 22 program that copies `VIDEO.json` to the output
  directory (`MAKEFUN_OUTPUT_DIR`, default `/output`) for the grader:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`

Suggested YouTube title: **This Is NOT a Movie… It's GTA 6 😳 #GTA6 #Shorts**

The video's description carries, word for word:
`Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01`
plus the account's make.fun play code.
