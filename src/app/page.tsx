import Image from "next/image";
import {
  CreditCard,
  KeyRound,
  Lock,
  MapPin,
  Plug,
  Radar,
  Scale,
  Shield,
  Shuffle,
} from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { IMG_ABOUT, IMG_HERO } from "@/lib/assets";

const MAP_EMBED =
  "https://www.google.com/maps?q=12849+Climbing+Ivy+Dr&output=embed";

export default function HomePage() {
  return (
    <div className="shell">
      <SiteHeader active="home" />

      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__media">
          <Image
            src={IMG_HERO}
            alt=""
            fill
            priority
            className="hero__img"
            sizes="100vw"
          />
          <div className="hero__scrim" aria-hidden />
        </div>
        <div className="hero__content">
          <div className="hero__copy">
            <h1 id="hero-heading" className="hero__title">
              Enterprise payments without noise.
            </h1>
            <p className="hero__lead">
              Routing, settlement, and risk infrastructure for growing merchant
              portfolios.
            </p>
            <div className="hero__actions">
              <button type="button" className="btn btn--primary btn--primaryLg">
                Get Started
              </button>
              <button type="button" className="btn btn--ghost btn--ghostLg">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="svc" id="services" aria-labelledby="svc-heading">
        <p className="eyebrow eyebrow--center">CAPABILITIES</p>
        <h2 id="svc-heading" className="visually-hidden">
          Capabilities
        </h2>
        <div className="svc__grid">
          <div className="svc__row">
            <article className="card" id="cap-processing">
              <CreditCard className="card__icon" strokeWidth={1.5} />
              <h3 className="card__title">Merchant Payment Processing</h3>
              <p className="card__desc">
                Accept, authorize, and reconcile card-present and
                card-not-present volume at institutional scale.
              </p>
            </article>
            <article className="card" id="cap-routing">
              <Shuffle className="card__icon" strokeWidth={1.5} />
              <h3 className="card__title">Transaction Routing &amp; Settlement</h3>
              <p className="card__desc">
                Intelligent routing with transparent settlement windows and
                exception handling your ops team can audit.
              </p>
            </article>
          </div>
          <div className="svc__row">
            <article className="card" id="cap-integrations">
              <Plug className="card__icon" strokeWidth={1.5} />
              <h3 className="card__title">Business Payment Integration</h3>
              <p className="card__desc">
                APIs, webhooks, and file-based workflows that drop into your
                finance stack without bespoke middleware.
              </p>
            </article>
            <article className="card">
              <Shield className="card__icon" strokeWidth={1.5} />
              <h3 className="card__title">Risk &amp; Compliance Infrastructure</h3>
              <p className="card__desc">
                Monitoring, screening, and policy controls aligned to PCI and
                regional regulatory expectations.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="hiw" aria-labelledby="hiw-heading">
        <p className="eyebrow" id="hiw-heading">
          HOW IT WORKS
        </p>

        <div className="hiw__mobileOnly">
          <div className="hiw__rule" />
          <div className="hiw__step">
            <span className="hiw__num">01</span>
            <h3 className="hiw__title">Onboard</h3>
            <p className="hiw__text">
              MID setup and governed technical connectivity.
            </p>
          </div>
          <div className="hiw__rule" />
          <div className="hiw__step">
            <span className="hiw__num">02</span>
            <h3 className="hiw__title">Route &amp; settle</h3>
            <p className="hiw__text">
              Live traffic, routing, and reconciliation exports.
            </p>
          </div>
          <div className="hiw__rule" />
          <div className="hiw__step">
            <span className="hiw__num">03</span>
            <h3 className="hiw__title">Monitor</h3>
            <p className="hiw__text">
              Dashboards, alerts, and audit trails for your teams.
            </p>
          </div>
        </div>

        <div className="hiw__desktopOnly">
          <div className="hiw__step">
            <span className="hiw__num">01</span>
            <h3 className="hiw__title">Onboard</h3>
            <p className="hiw__text">
              Contracted entities, MID setup, and technical connectivity in a
              governed checklist.
            </p>
          </div>
          <div className="hiw__step">
            <span className="hiw__num">02</span>
            <h3 className="hiw__title">Route &amp; settle</h3>
            <p className="hiw__text">
              Live traffic with configurable routing, settlement windows, and
              reconciliation exports.
            </p>
          </div>
          <div className="hiw__step">
            <span className="hiw__num">03</span>
            <h3 className="hiw__title">Monitor</h3>
            <p className="hiw__text">
              Operational dashboards, alerts, and audit trails for risk,
              finance, and compliance teams.
            </p>
          </div>
        </div>
      </section>

      <section className="abt" aria-labelledby="abt-heading">
        <div className="abt__text">
          <h2 id="abt-heading" className="abt__h">
            Built for regulated volume
          </h2>
          <p className="abt__p">
            Merchant Provider SRX LLC operates clearing and merchant services
            with the posture of a regulated financial institution —
            documentation, change control, and operational review are
            first-class.
          </p>
          <p className="abt__p">
            We partner with acquirers, platforms, and enterprise merchants who
            require predictable behavior under load and scrutiny.
          </p>
        </div>
        <div className="abt__photo abt__photo--desktop">
          <Image
            src={IMG_ABOUT}
            alt=""
            width={800}
            height={1067}
            sizes="(max-width: 1023px) 0px, 340px"
          />
        </div>
      </section>

      <section className="sec" id="compliance" aria-labelledby="sec-heading">
        <p className="eyebrow" id="sec-heading">
          SECURITY &amp; COMPLIANCE
        </p>
        <div className="sec__row">
          <Lock strokeWidth={1.5} aria-hidden />
          <span className="sec__label">PCI DSS</span>
          <p className="sec__desc">
            Program controls aligned to PCI DSS expectations for merchants and
            service providers.
          </p>
        </div>
        <div className="sec__row">
          <KeyRound strokeWidth={1.5} aria-hidden />
          <span className="sec__label">AES-256 Encryption</span>
          <p className="sec__desc">
            Data in transit and at rest protected with modern cryptographic
            standards and key hygiene.
          </p>
        </div>
        <div className="sec__row">
          <Radar strokeWidth={1.5} aria-hidden />
          <span className="sec__label">Fraud Prevention</span>
          <p className="sec__desc">
            Velocity checks, device intelligence, and configurable rules tuned
            to your risk appetite.
          </p>
        </div>
        <div className="sec__row">
          <Scale strokeWidth={1.5} aria-hidden />
          <span className="sec__label">Regulatory Compliance</span>
          <p className="sec__desc">
            Frameworks and attestations mapped to the jurisdictions where you and
            your customers operate.
          </p>
        </div>
      </section>

      <section className="fcta" aria-labelledby="fcta-heading">
        <h2 id="fcta-heading" className="fcta__h">
          Move money with institutional discipline.
        </h2>
        <button type="button" className="btn btn--primary btn--primaryLg">
          Get Started
        </button>
      </section>

      <section className="map" id="location" aria-labelledby="map-heading">
        <p className="eyebrow" id="map-heading">
          LOCATION
        </p>
        <h2 className="map__title">Merchant Provider SRX LLC</h2>
        <p className="map__addr">12849 Climbing Ivy Dr</p>
        <div className="map__chrome">
          <iframe
            title="Google Map — 12849 Climbing Ivy Dr"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <span className="map__badge">Google Maps embed</span>
          <MapPin className="map__pin" strokeWidth={1.5} aria-hidden />
        </div>
        <p className="map__note">
          Replace this block with your production Google Maps iframe (Share →
          Embed) if you need a stable embed URL.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
