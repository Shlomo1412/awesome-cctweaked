import { readFile, writeFile } from "node:fs/promises";

const README_PATH = "README.md";
const JAM_SLUG = "pinejam2026";
const JAM_URL = `https://pinestore.cc/api/jam/${JAM_SLUG}`;
const BADGE_URL = `https://img.shields.io/badge/dynamic/json?url=${encodeURIComponent(
  JAM_URL
)}&query=%24.jam.contestant_count&label=PineJam%202026%20joined&suffix=%20participants&color=00C853`;
const START_MARKER = "<!-- PINEJAM_NOTICE_START -->";
const END_MARKER = "<!-- PINEJAM_NOTICE_END -->";

async function fetchJamData() {
  const response = await fetch(JAM_URL, {
    headers: {
      "User-Agent": "awesome-cctweaked-readme-updater"
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch jam data (${response.status})`);
  }

  const data = await response.json();
  if (!data?.success || !data?.jam) {
    throw new Error("Invalid jam API response.");
  }

  return data.jam;
}

function parseJamData(jam) {
  const endMs = Number(jam.date_end);
  const nowMs = Date.now();
  const endDate = Number.isFinite(endMs) ? new Date(endMs) : null;

  return {
    title: jam.title || "PineJam",
    endsAtText: endDate ? endDate.toUTCString() : null,
    isOngoing: Number.isFinite(endMs) ? nowMs < endMs : false
  };
}

function buildNotice({ title, endsAtText }) {
  const endText = endsAtText ? ` Ends: ${endsAtText}.` : "";

  return [
    START_MARKER,
    "> [!IMPORTANT]",
    `> ${title} is currently live.`,
    `> ![Participants joined](${BADGE_URL})`,
    `> This notice updates automatically and disappears when the jam ends.${endText}`,
    END_MARKER
  ].join("\n");
}

function updateReadme(readme, notice, isOngoing) {
  const markerBlockRegex = new RegExp(
    `${START_MARKER}[\\s\\S]*?${END_MARKER}`,
    "m"
  );

  if (markerBlockRegex.test(readme)) {
    if (isOngoing) {
      return readme.replace(markerBlockRegex, notice);
    }

    return readme
      .replace(markerBlockRegex, "")
      .replace(/\n{3,}/g, "\n\n")
      .trimEnd() + "\n";
  }

  if (!isOngoing) {
    return readme;
  }

  const introRegex = /(A curated list[^\n]*\n)/;
  if (introRegex.test(readme)) {
    return readme.replace(introRegex, `$1\n${notice}\n`);
  }

  return `${notice}\n\n${readme}`;
}

async function main() {
  const [readme, jam] = await Promise.all([
    readFile(README_PATH, "utf8"),
    fetchJamData()
  ]);

  const jamData = parseJamData(jam);
  const notice = buildNotice(jamData);
  const updated = updateReadme(readme, notice, jamData.isOngoing);

  if (updated !== readme) {
    await writeFile(README_PATH, updated, "utf8");
    console.log("README.md updated.");
  } else {
    console.log("No README changes needed.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
