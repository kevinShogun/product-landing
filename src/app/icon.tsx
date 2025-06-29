import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "linear-gradient(135deg, #a855f7, #ec4899)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "6px",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
        <path d="M21 14h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z" />
        <path d="M12 2v20" />
        <path d="M8 6l4-4 4 4" />
        <path d="M16 18l-4 4-4-4" />
      </svg>
    </div>,
    {
      ...size,
    },
  )
}
