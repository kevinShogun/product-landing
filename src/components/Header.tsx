"use client";

import { motion } from "framer-motion";
import { Headphones } from "lucide-react";

export const Header = () => {
	return (
		<motion.header
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="bg-black/20 backdrop-blur-md border-b border-white/10"
		>
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<Headphones className="w-8 h-8 text-purple-400" />
						<h1 className="text-2xl font-bold text-white">SoundWave Pro</h1>
					</div>
					<nav className="hidden md:flex space-x-6">
						<a
							href="#producto"
							className="text-white/80 hover:text-white transition-colors"
						>
							Product
						</a>
						<a
							href="#caracteristicas"
							className="text-white/80 hover:text-white transition-colors"
						>
							Features
						</a>
						<a
							href="#contacto"
							className="text-white/80 hover:text-white transition-colors"
						>
							Contact
						</a>
					</nav>
				</div>
			</div>
		</motion.header>
	);
};
