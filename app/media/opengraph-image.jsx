import { OG_SIZE, renderOg } from "../lib/og";

export const alt = "ALFA Drone Solutions — drone media: FPV fly-throughs, listings, events and brand content";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ background: "og/media-bg.jpg", label: "Media", title: "Content that elevates your brand" });
}
