// Browser-tab icon: warm amber square with crisp supply-demand equilibrium glyph.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #92400e 100%)`,
          borderRadius: 8,
        }}
      >
        <svg width={22} height={22} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 16v66h66" fill="none" stroke="#ffffff" strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
          <line x1="26" y1="26" x2="78" y2="72" stroke="#fde68a" strokeWidth={7} strokeLinecap="round" />
          <line x1="26" y1="72" x2="78" y2="26" stroke="#ffffff" strokeWidth={7} strokeLinecap="round" />
          <circle cx="52" cy="49" r="7" fill="#ffffff" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
