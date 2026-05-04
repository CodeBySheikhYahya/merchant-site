import type { CSSProperties } from "react";
import {
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const ORBIT_MS = 48_000;

const nodes: { Icon: typeof MapPin; label: string }[] = [
  { Icon: MapPin, label: "Location" },
  { Icon: Clock, label: "Hours" },
  { Icon: Phone, label: "Phone" },
  { Icon: Mail, label: "Email" },
  { Icon: Headphones, label: "Live support" },
  { Icon: MessageCircle, label: "Messages" },
];

export function ContactOrbit() {
  return (
    <section
      className="contact-orbit"
      aria-label="Support channels overview"
      style={
        { "--orbit-duration": `${ORBIT_MS}ms` } as CSSProperties
      }
    >
      <p className="visually-hidden">
        Illustration of support channels: location, hours, phone, email, live
        help, and messaging.
      </p>
      <div className="contact-orbit__track" aria-hidden />
      <div className="contact-orbit__spinWrap">
        <ul className="contact-orbit__spinner">
          {nodes.map(({ Icon, label }, i) => (
            <li
              key={label}
              className="contact-orbit__node"
              style={{ "--orbit-deg": `${i * 60}deg` } as CSSProperties}
            >
              <span className="contact-orbit__nodeInner">
                <Icon
                  className="contact-orbit__ico"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="visually-hidden">{label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="contact-orbit__hub">Support</div>
    </section>
  );
}
