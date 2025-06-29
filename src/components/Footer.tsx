"use client";

import { motion } from "framer-motion"
import { Headphones, Mail, Phone, MapPin } from "lucide-react"

export const Footer = () => {
	return (
		<footer
			id="contacto"
			className="bg-black/40 border-t border-white/10 py-12"
		>
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
				>
					<div className="col-span-2">
						<div className="flex items-center space-x-2 mb-4">
							<Headphones className="w-8 h-8 text-purple-400" />
							<h5 className="text-2xl font-bold text-white">SoundWave Pro</h5>
						</div>
						<p className="text-white/70 mb-6 max-w-md">
							Revolutionizing the audio experience with cutting-edge technology
							and premium design for music lovers.
						</p>
					</div>

					<div>
						<h6 className="text-lg font-semibold text-white mb-4">Contact</h6>
						<div className="space-y-3">
							<div className="flex items-center space-x-3 text-white/70">
								<Mail className="w-5 h-5 text-purple-400" />
								<span>info@soundwavepro.com</span>
							</div>
							<div className="flex items-center space-x-3 text-white/70">
								<Phone className="w-5 h-5 text-purple-400" />
								<span>+1 (555) 123-4567</span>
							</div>
							<div className="flex items-center space-x-3 text-white/70">
								<MapPin className="w-5 h-5 text-purple-400" />
								<span>San Francisco, CA</span>
							</div>
						</div>
					</div>

					<div>
						<h6 className="text-lg font-semibold text-white mb-4">Follow Us</h6>
						<div className="space-y-2">
							<a
								href="https://facebook.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="block text-white/70 hover:text-purple-400 transition-colors"
							>
								Facebook
							</a>
							<a
								href="https://twitter.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="block text-white/70 hover:text-purple-400 transition-colors"
							>
								Twitter
							</a>
							<a
								href="https://instagram.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="block text-white/70 hover:text-purple-400 transition-colors"
							>
								Instagram
							</a>
							<a
								href="https://youtube.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="block text-white/70 hover:text-purple-400 transition-colors"
							>
								YouTube
							</a>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true }}
					className="border-t border-white/10 mt-8 pt-8 text-center"
				>
					<p className="text-white/50">
						© 2024 SoundWave Pro. All rights reserved.
					</p>
				</motion.div>
			</div>
		</footer>
	);
};
