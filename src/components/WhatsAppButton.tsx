import { MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/2349126116172"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center md:bottom-8"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 fill-current" />
      <span className="absolute right-full mr-3 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        Chat with us
      </span>
    </motion.a>
  );
}
