import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/80 backdrop-blur-md border-t p-4">
      <Button asChild className="w-full h-14 text-lg font-bold">
        <a href="tel:09126116172">
          <Phone className="w-5 h-5 mr-2" />
          Call Now: 09126116172
        </a>
      </Button>
    </div>
  );
}
