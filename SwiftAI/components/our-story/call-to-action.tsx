import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function CTA() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge>Leadership Excellence</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Ready to Work with Industry Leaders?
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Connect with our visionary leadership team and discover how our collective expertise can drive your enterprise transformation forward.
            </p>
          </div>
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-[13px] tracking-[0.08em] uppercase font-medium px-6 py-3 rounded-none bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
            >
              Meet Our Leaders <MoveRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 text-[13px] tracking-[0.08em] uppercase font-medium px-6 py-3 rounded-none bg-emerald-400 text-gray-900 hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300"
            >
              Explore Solutions <PhoneCall className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
