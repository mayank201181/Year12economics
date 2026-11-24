// iOS home-screen icon: supply-demand equilibrium + IB Economics badge.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #92400e 100%)`,
        }}
      >
        <svg width={90} height={90} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 4 }}>
          <path d="M18 16v66h66" fill="none" stroke="#ffffff" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
          <line x1="26" y1="26" x2="78" y2="72" stroke="#fde68a" strokeWidth={6.5} strokeLinecap="round" />
          <line x1="26" y1="72" x2="78" y2="26" stroke="#ffffff" strokeWidth={6.5} strokeLinecap="round" />
          <circle cx="52" cy="49" r="7" fill="#ffffff" />
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 6,
            padding: "2px 10px",
            borderRadius: 999,
            background: "#ffffff",
            color: SUBJECT.themeColorLight,
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: 0.4,
          }}
        >
          {SUBJECT.shortName}
        </div>
      </div>
    ),
    { ...size },
  );
}
