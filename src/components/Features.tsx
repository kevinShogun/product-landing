"use client";

import React from "react";
import { Battery, Wifi, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const features = [
	{
		icon: <Battery className="w-8 h-8" />,
		title: "30-Hour Battery",
		description:
			"Enjoy uninterrupted music with our long-lasting battery that accompanies you all day long.",
	},
	{
		icon: <Wifi className="w-8 h-8" />,
		title: "Bluetooth 5.0 Connectivity",
		description:
			"Stable and high-quality connection up to 10 meters away with the latest Bluetooth technology.",
	},
	{
		icon: <Volume2 className="w-8 h-8" />,
		title: "Active Noise Cancellation",
		description:
			"Immerse yourself in your favorite music with our advanced noise cancellation technology.",
	},
];

export const Features = () => {
	return (
        <section id="caracteristicas" className="py-16 lg:py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Key Features</h3>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Discover the technological innovations that make SoundWave Pro the perfect choice
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index / .2}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4 flex justify-center">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-4">{feature.title}</h4>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
	);
};
