import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  IMG_ABOUT,
  IMG_ABOUT_GOAL,
  IMG_ABOUT_HERO,
  IMG_ABOUT_HOW,
  IMG_ABOUT_WHAT,
} from "@/lib/assets";

export const metadata: Metadata = {
  title: "About SRX Payments — Merchant Provider SRX LLC",
  description:
    "SRX Payments provides merchant services, payment processing infrastructure, and secure support for modern businesses.",
};

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="shell">
        <SiteHeader active="about" />
      </div>

      <header className="about-hero" aria-labelledby="about-hero-title">
        <div className="about-hero__media">
          <Image
            src={IMG_ABOUT_HERO}
            alt="Team collaborating in a bright modern office"
            fill
            priority
            className="about-hero__img"
            sizes="100vw"
          />
          <div className="about-hero__scrim" aria-hidden />
        </div>
        <div className="shell about-hero__copy">
          <p className="about-hero__eyebrow">About us</p>
          <h1 id="about-hero-title" className="about-hero__title">
            About SRX Payments
          </h1>
          <p className="about-hero__entity">Merchant Provider SRX LLC</p>
        </div>
      </header>

      <div className="shell about-below">
        <section className="about-intro" aria-labelledby="about-intro-heading">
          <div className="about-intro__media">
            <Image
              src={IMG_ABOUT}
              alt="Professionals working in a modern office environment"
              width={900}
              height={1200}
              className="about-intro__img"
              sizes="(max-width: 1023px) 100vw, 440px"
            />
          </div>
          <div className="about-intro__copy">
            <p className="about-intro__eyebrow">Who we are</p>
            <h2 id="about-intro-heading" className="about-intro__title">
              Built on clarity, compliance, and care
            </h2>
            <span className="about-intro__accent" aria-hidden />
            <p className="about-intro__lead">
              SRX Payments is a merchant services provider focused on helping
              businesses process online payments securely and efficiently.
            </p>
          </div>
        </section>

        <div className="about-zigzag">
          <section className="about-split" aria-labelledby="about-what-heading">
            <div className="about-split__text">
              <h2 id="about-what-heading" className="about-block__h">
                What we do
              </h2>
              <p className="about-block__p">
                We provide payment processing infrastructure and merchant support
                solutions for businesses operating in digital and service-based
                industries. Our focus is reliability, consistency, and secure
                transaction handling.
              </p>
            </div>
            <div className="about-split__media">
              <Image
                src={IMG_ABOUT_WHAT}
                alt="Merchant payment and customer service at the point of sale"
                fill
                className="about-split__img"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            </div>
          </section>

          <section
            className="about-split about-split--reverse"
            aria-labelledby="about-how-heading"
          >
            <div className="about-split__media">
              <Image
                src={IMG_ABOUT_HOW}
                alt="Business professionals collaborating on a video call"
                fill
                className="about-split__img"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            </div>
            <div className="about-split__text">
              <h2 id="about-how-heading" className="about-block__h">
                How we operate
              </h2>
              <p className="about-block__p">
                We work directly with registered businesses to facilitate payment
                flows through secure systems. We do not sell products or operate
                as a retail platform.
              </p>
            </div>
          </section>

          <section className="about-split" aria-labelledby="about-goal-heading">
            <div className="about-split__text">
              <h2 id="about-goal-heading" className="about-block__h">
                Our goal
              </h2>
              <p className="about-block__p">
                Our goal is to simplify payment processing for modern businesses
                through stable and compliant infrastructure.
              </p>
            </div>
            <div className="about-split__media">
              <Image
                src={IMG_ABOUT_GOAL}
                alt="Team reviewing data and operations on a laptop"
                fill
                className="about-split__img"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            </div>
          </section>
        </div>

        <figure className="about-quote">
          <blockquote>
            <p>
              Simplify payment processing for modern businesses through stable and
              compliant infrastructure.
            </p>
          </blockquote>
        </figure>

        <SiteFooter />
      </div>
    </div>
  );
}
