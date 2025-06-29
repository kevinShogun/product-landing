
"use client";

import { motion } from "framer-motion"
import Image from "next/image"

export const Hero = () => {
	return (
		<section id="producto" className="container mx-auto px-4 py-16 lg:py-24">
			<div className="grid lg:grid-cols-2 gap-12 items-center">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center lg:text-left"
				>
					<h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
						SoundWave Pro {" "}
						<span className="block text-2xl lg:text-3xl text-purple-400 font-normal mt-2">
							Premium Wireless Headphones
						</span>
					</h2>
					<p className="text-xl text-white/80 mb-8 leading-relaxed">
						Experience music like never before with our next-generation
						headphones. Designed for audiophiles who seek perfection in every
						note, combining advanced technology with elegant and comfortable
						design.
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
					>
						Buy Now - $299
					</motion.button>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="relative"
				>
					<div className="relative z-10">
						<Image
							src="/assets/04.png"
							alt="SoundWave Pro Auriculares"
							width={600}
							height={600}
							className="w-full max-w-md mx-auto drop-shadow-2xl"
						/>
					</div>
					{/* Decorative elements */}
					<div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
					<motion.div
						animate={{ rotate: 360 }}
						transition={{
							duration: 20,
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear",
						}}
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-400/30 rounded-full"
					></motion.div>
				</motion.div>
			</div>
		</section>
	);
};
