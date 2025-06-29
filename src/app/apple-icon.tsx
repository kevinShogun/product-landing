import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
	width: 180,
	height: 180,
};
export const contentType = "image/png";

export default function Icon() {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 24,
					background: "linear-gradient(135deg, #a855f7, #ec4899)",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "20px",
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-headphones-icon lucide-headphones"
				>
					<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
				</svg>
			</div>
		),
		{
			...size,
		}
	);
}
