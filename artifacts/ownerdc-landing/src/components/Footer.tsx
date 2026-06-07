import { Server, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  Solutions: ["Colocation", "Cloud Connectivity", "Managed Services", "Network Solutions", "Disaster Recovery", "Security Services"],
  Company: ["About Us", "Leadership Team", "Careers", "News & Insights", "Sustainability", "Partners"],
  Resources: ["Documentation", "SLA & Legal", "Status Page", "Case Studies", "Blog", "Contact Support"],
};

const certifications = ["ISO 27001", "Tier III Certified", "PCI-DSS", "SOC 2 Type II", "APCC Member"];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">OwnerDC</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-xs">
              Australia's premier carrier-neutral data centre operator. Enterprise colocation, cloud connectivity, and managed services — built for uptime, designed for growth.
            </p>

            {/* Newsletter */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-white mb-3">Stay updated</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  data-testid="input-email-newsletter"
                  className="flex-1 bg-background border border-white/10 rounded-l-lg px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                />
                <button
                  data-testid="button-newsletter-subscribe"
                  className="bg-primary hover:bg-primary/90 text-white px-4 rounded-r-lg transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="mt-14 pt-10 border-t border-white/6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Sydney HQ", value: "150 Pacific Highway, St Leonards NSW 2065", sub: "+61 2 8000 1234" },
              { label: "Melbourne", value: "17 Salmon Street, Port Melbourne VIC 3207", sub: "+61 3 9000 5678" },
              { label: "Brisbane", value: "11 Logan Road, Woolloongabba QLD 4102", sub: "+61 7 3000 9012" },
            ].map((loc) => (
              <div key={loc.label} className="text-sm">
                <div className="text-primary font-semibold mb-1">{loc.label}</div>
                <div className="text-muted-foreground">{loc.value}</div>
                <div className="text-white/60 mt-0.5">{loc.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap gap-3 mb-10">
          {certifications.map((cert) => (
            <span key={cert} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-white/50 text-xs font-medium">
              {cert}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6 relative z-10">
        <div className="container mx-auto px-4 md:px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} OwnerDC Pty Ltd. All rights reserved. ABN 12 345 678 901
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Acceptable Use"].map((link) => (
                <a key={link} href="#" className="text-muted-foreground hover:text-white text-xs transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
