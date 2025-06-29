import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "SoundWave Pro - Premium Wireless Headphones"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)",
        fontSize: 32,
        fontWeight: 600,
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Main content container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px",
          background: "rgba(0, 0, 0, 0.3)",
          borderRadius: "24px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Logo/Icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #a855f7, #ec4899)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
            }}
          >
            <svg
					width="90"
					height="90"
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M3 18v-6a9 9 0 0 1 18 0v6" />
					<path d="M21 18a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
					<path d="M3 18a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3" />
				</svg>
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "white",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            SoundWave Pro
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "#a855f7",
            marginBottom: "20px",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Premium Wireless Headphones
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "20px",
            color: "rgba(255, 255, 255, 0.8)",
            maxWidth: "600px",
            lineHeight: "1.4",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Experience music like never before with 30-hour battery, Bluetooth 5.0, and active noise cancellation
        </div>

        {/* Features badges */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              background: "rgba(168, 85, 247, 0.2)",
              border: "1px solid rgba(168, 85, 247, 0.5)",
              borderRadius: "20px",
              padding: "8px 16px",
              color: "#a855f7",
              fontSize: "16px",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            30H Battery
          </div>
          <div
            style={{
              background: "rgba(168, 85, 247, 0.2)",
              border: "1px solid rgba(168, 85, 247, 0.5)",
              borderRadius: "20px",
              padding: "8px 16px",
              color: "#a855f7",
              fontSize: "16px",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Bluetooth 5.0
          </div>
          <div
            style={{
              background: "rgba(168, 85, 247, 0.2)",
              border: "1px solid rgba(168, 85, 247, 0.5)",
              borderRadius: "20px",
              padding: "8px 16px",
              color: "#a855f7",
              fontSize: "16px",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            Noise Cancellation
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
