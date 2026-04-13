import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://picsum.photos/seed/electrician-pro/800/800" 
                  alt="Kennethtronics Professional" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-2xl">
                <div className="text-4xl font-black text-primary-foreground">8+</div>
                <div className="text-sm font-bold text-primary-foreground/80 uppercase tracking-wider">Years of <br />Experience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary text-primary-foreground">About Kennethtronics</Badge>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Your Trusted Partner for <br />
                <span className="text-primary italic">Electrical Excellence</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Kennethtronics is a licensed industrial electrician with over 8 years of 
                  experience delivering reliable electrical solutions across residential, 
                  commercial, and industrial sectors.
                </p>
                <p>
                  Based in Lagos, Nigeria, we specialize in safe, efficient, and high-quality 
                  installations and repairs. We understand the unique electrical challenges 
                  faced in our environment and provide solutions that are built to last.
                </p>
                <p className="font-semibold text-foreground italic border-l-4 border-primary pl-4">
                  "Only The Best Is Good" — This isn't just our tagline; it's the standard 
                  we bring to every job site, every day.
                </p>
                <p>
                  We are committed to excellence and available 24/7 for emergency services, 
                  ensuring that your home or business never stays in the dark.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
