import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

// Archivo 800 for the headline. Falls back to the built-in font if Google Fonts
// is unreachable at build time.
async function loadArchivo() {
  try {
    const css = await (
      await fetch("https://fonts.googleapis.com/css2?family=Archivo:wght@800&display=swap", {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1)" },
      })
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export async function renderOg({ background, label, title }) {
  const [bg, font] = await Promise.all([readFile(join(process.cwd(), "public", background)), loadArchivo()]);
  const src = `data:image/jpeg;base64,${bg.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#0b0c0e" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={1200} height={630} style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, objectFit: "cover" }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            background: "linear-gradient(180deg, rgba(11,12,14,0.55) 0%, rgba(11,12,14,0.92) 100%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 64, gap: 22, width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#8e8b84" }}>
            <div style={{ width: 12, height: 12, borderRadius: 99, background: "#f0a23a" }} />
            <span>ALFA Drone Solutions · {label}</span>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: font ? "Archivo" : undefined,
              fontWeight: 800,
              fontSize: 84,
              lineHeight: 0.92,
              letterSpacing: -3,
              textTransform: "uppercase",
              color: "#f2f0ec",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: font ? [{ name: "Archivo", data: font, weight: 800, style: "normal" }] : undefined }
  );
}
