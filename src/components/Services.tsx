import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, 
  Building2, 
  Factory, 
  Zap, 
  Settings, 
  Lightbulb, 
  Wrench, 
  Truck, 
  Search, 
  Wind, 
  AlertTriangle,
  RefreshCw
} from "lucide-react";

const services = [
  {
    title: "Residential Installations",
    description: "Complete electrical setup for homes, ensuring safety and efficiency for your family.",
    icon: Home,
  },
  {
    title: "Commercial Installations",
    description: "Tailored electrical solutions for offices, shops, and commercial buildings.",
    icon: Building2,
  },
  {
    title: "Industrial Installations",
    description: "Heavy-duty electrical systems designed for factories and industrial plants.",
    icon: Factory,
  },
  {
    title: "Wiring & Rewiring",
    description: "Safe and modern wiring solutions for new builds or old property upgrades.",
    icon: Zap,
  },
  {
    title: "AC/DC Panel Upgrades",
    description: "Installation and maintenance of distribution boards and control panels.",
    icon: Settings,
  },
  {
    title: "Lighting & Automation",
    description: "Smart lighting controls and automated systems for modern convenience.",
    icon: Lightbulb,
  },
  {
    title: "Generator Servicing",
    description: "Professional installation and routine maintenance for backup power systems.",
    icon: Wrench,
  },
  {
    title: "ATS Installation",
    description: "Automatic Transfer Switch setup for seamless transition to backup power.",
    icon: RefreshCw,
  },
  {
    title: "Heavy-Duty Truck Electrical",
    description: "Specialized electrical repairs and maintenance for industrial vehicles.",
    icon: Truck,
  },
  {
    title: "Fault Finding & Repairs",
    description: "Quick diagnosis and safe repair of all electrical faults and issues.",
    icon: Search,
  },
  {
    title: "Air Conditioning Wiring",
    description: "Dedicated circuit installation for AC units to prevent overloads.",
    icon: Wind,
  },
  {
    title: "Emergency Services",
    description: "Available 24/7 for urgent electrical repairs and safety checks.",
    icon: AlertTriangle,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expert Services</h2>
          <p className="text-lg text-muted-foreground">
            From simple home repairs to complex industrial installations, we provide 
            comprehensive electrical solutions across Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full border-white/5 bg-background/50 hover:bg-background hover:border-primary/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
