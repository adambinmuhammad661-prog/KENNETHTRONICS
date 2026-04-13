import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Olawale Johnson",
    role: "Homeowner in Lekki",
    content: "Kennethtronics fixed a persistent wiring issue in my house that two other electricians couldn't solve. Professional, punctual, and very knowledgeable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Chioma Okoro",
    role: "Restaurant Manager",
    content: "We had an emergency power failure during peak hours. Kenneth arrived within 30 minutes and got our kitchen back up and running. His 24/7 service is a lifesaver for businesses.",
    rating: 5,
  },
  {
    name: "Engr. Tunde Bakare",
    role: "Facility Manager",
    content: "I've worked with many electricians, but Kennethtronics stands out for their industrial expertise. Their work on our ATS and panel upgrades was flawless. Truly the best.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's why Lagosians trust Kennethtronics 
            for all their electrical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-white/5 bg-background relative overflow-hidden group">
                <CardContent className="p-8">
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg mb-8 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
