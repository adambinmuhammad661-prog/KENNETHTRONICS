import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageSquare, ShieldCheck, Award, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/electrical/1920/1080')] bg-cover bg-center opacity-10 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 py-1 px-4 text-sm font-medium border-primary/20 bg-primary/10 text-primary">
              <Award className="w-4 h-4 mr-2" />
              8+ Years Experience | Licensed Electrician
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
          >
            Professional Electrical <br />
            <span className="text-primary italic">Services in Lagos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Reliable, Safe & Certified Electrical Solutions – Available 24/7 for Residential, Commercial & Industrial needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button size="lg" className="text-lg font-bold h-14 px-8" asChild>
              <a href="tel:09126116172">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg font-bold h-14 px-8 border-2" asChild>
              <a href="https://wa.me/2349126116172" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Now
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Licensed & Certified</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">24/7 Emergency</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">8+ Years Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Fast Response</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
