import { OG_SIZE, renderOg } from "../lib/og";

export const alt = "ALFA Drone Solutions — construction progress documentation, land documentation and RTK mapping";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ background: "og/construction-bg.jpg", label: "Documentation", title: "A record of every change on site" });
}
