import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "SoundWave Pro - Premium Wireless Headphones"
export const size = {
  width: 1200,
  height: 600,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)",
        padding: "60px",
      }}
    >
      {/* Left side - Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          flex: 1,
          paddingRight: "40px",
        }}
      >
        {/* Logo and brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "linear-gradient(135deg, #a855f7, #ec4899)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "15px",
            }}
          >
            <svg
              width="30"
              height="30"
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
          </div>
          <div
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "white",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            SoundWave Pro
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: "24px",
            color: "#a855f7",
            marginBottom: "15px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Premium Wireless Headphones
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "18px",
            color: "rgba(255, 255, 255, 0.8)",
            lineHeight: "1.4",
            marginBottom: "25px",
            maxWidth: "400px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Experience music like never before with cutting-edge technology
        </div>

        {/* Price */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "white",
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            padding: "12px 24px",
            borderRadius: "25px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          $299
        </div>
      </div>

      {/* Right side - Visual element */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          position: "relative",
        }}
      >
        {/* Background circle */}
        <div
          style={{
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
            position: "absolute",
          }}
        />

        {/* Headphones illustration */}
        <div
          style={{
            width: "200px",
            height: "200px",
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
            <path d="M21 14h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z" />
            <path d="M12 2v20" />
            <path d="M8 6l4-4 4 4" />
            <path d="M16 18l-4 4-4-4" />
          </svg>
        </div>

        {/* Feature indicators */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(168, 85, 247, 0.5)",
              borderRadius: "15px",
              padding: "6px 12px",
              color: "#a855f7",
              fontSize: "14px",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            30H Battery
          </div>
          <div
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(168, 85, 247, 0.5)",
              borderRadius: "15px",
              padding: "6px 12px",
              color: "#a855f7",
              fontSize: "14px",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Bluetooth 5.0
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
