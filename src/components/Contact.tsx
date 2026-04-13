import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Have an electrical emergency or need a quote for a project? 
            Contact us today and we'll get back to you immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              <Card className="border-white/5 bg-secondary/20">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Call Us</h3>
                    <a href="tel:09126116172" className="text-xl font-bold hover:text-primary transition-colors">09126116172</a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/5 bg-secondary/20">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">WhatsApp</h3>
                    <a href="https://wa.me/2349126116172" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-primary transition-colors">Chat with us now</a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/5 bg-secondary/20">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Email Us</h3>
                    <a href="mailto:kennethtronics@gmail.com" className="text-xl font-bold hover:text-primary transition-colors">kennethtronics@gmail.com</a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/5 bg-secondary/20">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Location</h3>
                    <p className="text-xl font-bold">Lagos, Nigeria</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-white/10 bg-background/50 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider">Name</label>
                      <Input placeholder="Your Name" className="bg-secondary/20 border-white/10 h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-wider">Phone</label>
                      <Input placeholder="Your Phone Number" className="bg-secondary/20 border-white/10 h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider">Message</label>
                    <Textarea placeholder="How can we help you?" className="bg-secondary/20 border-white/10 min-h-[150px]" />
                  </div>
                  <Button className="w-full h-14 text-lg font-bold">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
