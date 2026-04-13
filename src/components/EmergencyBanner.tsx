import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <div className="bg-primary py-3 overflow-hidden relative">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap items-center gap-10"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 text-primary-foreground font-black uppercase tracking-widest text-sm md:text-base">
            <AlertCircle className="w-5 h-5" />
            24-Hour Emergency Electrical Service Available
            <AlertCircle className="w-5 h-5" />
            Call Now: 09126116172
          </div>
        ))}
      </motion.div>
    </div>
  );
}
