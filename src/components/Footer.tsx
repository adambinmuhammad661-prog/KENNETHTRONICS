import { Zap, Phone, Mail, MapPin, MessageSquare, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/40 pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <Zap className="w-6 h-6 text-primary-foreground fill-current" />
              </div>
              <span className="text-2xl font-bold tracking-tighter uppercase">
                Kenneth<span className="text-primary">tronics</span>
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Licensed industrial electrician with 8+ years of experience delivering 
              reliable electrical solutions across Lagos, Nigeria.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-primary">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="text-muted-foreground hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-primary">Services</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground">Residential Installations</li>
              <li className="text-muted-foreground">Commercial Installations</li>
              <li className="text-muted-foreground">Industrial Installations</li>
              <li className="text-muted-foreground">24/7 Emergency Repairs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-primary">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <a href="tel:09126116172" className="text-muted-foreground hover:text-primary transition-colors">09126116172</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-primary mt-1" />
                <a href="https://wa.me/2349126116172" className="text-muted-foreground hover:text-primary transition-colors">WhatsApp Chat</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <a href="mailto:kennethtronics@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">kennethtronics@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-muted-foreground">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Kennethtronics. All rights reserved. Licensed Industrial Electrician.</p>
        </div>
      </div>
    </footer>
  );
}
