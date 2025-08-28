import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <div className="flex items-center justify-center h-screen bg-black overflow-hidden">
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Stylish Text */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 text-transparent bg-clip-text drop-shadow-lg"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Welcome to
        </motion.h1>

        {/* Animated Logo */}
        <motion.img
          src="/logo.png"
          alt="Hirrd Logo"
          className="h-16 sm:h-20 lg:h-28 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          initial={{ rotate: -20, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 120 }}
        />
      </motion.div>

      {/* Background floating particles */}
      <motion.div
        className="absolute w-64 h-64 bg-pink-500 rounded-full blur-3xl opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
      />
    </div>
  );
}
