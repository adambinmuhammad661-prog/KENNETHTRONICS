import { motion } from "motion/react";
import { CheckCircle2, Clock, ShieldCheck, Zap, DollarSign, Award } from "lucide-react";

const reasons = [
  {
    title: "8+ Years Experience",
    description: "Proven track record in residential, commercial, and industrial electrical work.",
    icon: Award,
  },
  {
    title: "Licensed & Certified",
    description: "Fully qualified industrial electrician ensuring all work meets safety standards.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Response Time",
    description: "We understand electrical emergencies can't wait. We arrive quickly.",
    icon: Clock,
  },
  {
    title: "24/7 Emergency Service",
    description: "Electrical issues don't follow a schedule. Neither do we.",
    icon: Zap,
  },
  {
    title: "Transparent Pricing",
    description: "Affordable rates with no hidden costs. You know what you're paying for.",
    icon: DollarSign,
  },
  {
    title: "Right the First Time",
    description: "Quality workmanship that lasts. We don't cut corners on safety.",
    icon: CheckCircle2,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why Lagos Trusts <br />
              <span className="text-primary">Kennethtronics</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We pride ourselves on delivering excellence in every project. Our commitment 
              to safety, reliability, and customer satisfaction has made us a leading 
              choice for electrical services in Lagos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-primary/20">
              <img 
                src="https://picsum.photos/seed/electrician-work/800/1000" 
                alt="Electrician at work" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
