/** Extract YouTube video id from common URL shapes or a bare id string. */
export function getYouTubeVideoId(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;

  try {
    const u = new URL(trimmed.startsWith("//") ? `https:${trimmed}` : trimmed);
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      return id && /^[\w-]{11}$/.test(id) ? id : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com" || host === "music.youtube.com") {
      const v = u.searchParams.get("v");
      if (v && /^[\w-]{11}$/.test(v)) return v;

      const embed = u.pathname.match(/^\/embed\/([\w-]{11})/);
      if (embed) return embed[1];

      const shorts = u.pathname.match(/^\/shorts\/([\w-]{11})/);
      if (shorts) return shorts[1];
    }
  } catch {
    return null;
  }

  return null;
}

export function toYouTubeEmbedSrc(youtubeUrl: string): string | null {
  const id = getYouTubeVideoId(youtubeUrl);
  if (!id) return null;
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

export function youtubeThumbnailUrl(youtubeUrl: string, quality: "hq" | "mq" = "hq"): string | null {
  const id = getYouTubeVideoId(youtubeUrl);
  if (!id) return null;
  return quality === "hq"
    ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
    : `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
}
