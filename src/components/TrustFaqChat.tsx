"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { COMPANY_BRAND_NAME, COMPANY_LEGAL_NAME } from "@/lib/company";

const easeOutSoft = [0.22, 1, 0.36, 1] as const;

type ChatRole = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
};

const FAQ_ITEMS = [
  {
    id: "what-is",
    question: `What is ${COMPANY_BRAND_NAME}?`,
    answer: `${COMPANY_LEGAL_NAME} (${COMPANY_BRAND_NAME}) is a merchant payment service provider that helps businesses process transactions securely.`,
  },
  {
    id: "sell-products",
    question: "Do you sell products?",
    answer: `No. ${COMPANY_LEGAL_NAME} does not sell any products. The company provides payment processing services to businesses.`,
  },
  {
    id: "what-company-does",
    question: "What does your company do?",
    answer: `${COMPANY_LEGAL_NAME} helps businesses accept and manage online payments through secure merchant infrastructure.`,
  },
  {
    id: "registered",
    question: `Is ${COMPANY_BRAND_NAME} a registered company?`,
    answer: `Yes. ${COMPANY_BRAND_NAME} operates as ${COMPANY_LEGAL_NAME}.`,
  },
  {
    id: "refunds",
    question: "Do you handle refunds?",
    answer: `Refunds are handled by the business that receives the payment. ${COMPANY_LEGAL_NAME} only processes transactions.`,
  },
  {
    id: "contact",
    question: "How can I contact you?",
    answer: `You can reach ${COMPANY_LEGAL_NAME} through the contact form on this website or the official business email shown on the Contact page.`,
  },
  {
    id: "data-secure",
    question: "Is my data secure?",
    answer: `Yes. ${COMPANY_LEGAL_NAME} uses standard security practices to protect transaction information.`,
  },
] as const;

function newId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function TrustFaqChat() {
  const titleId = useId();
  const reduceMotion = usePrefersReducedMotion();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: "intro",
      role: "assistant",
      text: "Choose a question below for a quick, verified answer.",
    },
  ]);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => launcherRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    if (!open || typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 639px)");
    if (!mq.matches) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useLayoutEffect(() => {
    const el = threadRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  const pickQuestion = (question: string, answer: string) => {
    setMessages((prev) => [
      ...prev,
      { id: newId(), role: "user", text: question },
      { id: newId(), role: "assistant", text: answer },
    ]);
  };

  return (
    <div className="trustFaq">
      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              key="trust-faq-backdrop"
              type="button"
              className="trustFaq__backdrop"
              aria-label="Close quick answers"
              onClick={close}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.2,
                ease: easeOutSoft,
              }}
            />
            <motion.div
              key="trust-faq-panel"
              id="trust-faq-panel"
              className="trustFaq__panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              initial={
                reduceMotion
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 28, scale: 0.99 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.99 }
              }
              transition={{
                duration: reduceMotion ? 0.01 : 0.3,
                ease: easeOutSoft,
              }}
            >
              <div className="trustFaq__head">
                <div className="trustFaq__headText">
                  <p className="trustFaq__eyebrow">Trust &amp; clarity</p>
                  <h2 id={titleId} className="trustFaq__title">
                    Quick answers
                  </h2>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  className="trustFaq__iconBtn"
                  onClick={close}
                  aria-label="Close"
                >
                  <X strokeWidth={1.75} size={20} aria-hidden />
                </button>
              </div>

              <div
                ref={threadRef}
                className="trustFaq__thread"
                data-lenis-prevent
                role="log"
                aria-relevant="additions"
                aria-live="polite"
              >
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={
                      m.role === "user"
                        ? "trustFaq__row trustFaq__row--user"
                        : "trustFaq__row"
                    }
                  >
                    <p
                      className={
                        m.role === "user"
                          ? "trustFaq__bubble trustFaq__bubble--user"
                          : "trustFaq__bubble"
                      }
                    >
                      {m.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="trustFaq__picker">
                <p className="trustFaq__pickerLabel">Select a question</p>
                <div className="trustFaq__chips" data-lenis-prevent>
                  {FAQ_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="trustFaq__chip"
                      onClick={() => pickQuestion(item.question, item.answer)}
                    >
                      {item.question}
                    </button>
                  ))}
                </div>
                <p className="trustFaq__hint">
                  Preset questions only — there is no chat box here, by design.
                </p>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

      <motion.button
        ref={launcherRef}
        type="button"
        className={`trustFaq__launcher${open ? " trustFaq__launcher--open" : ""}`}
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-controls={open ? "trust-faq-panel" : undefined}
        aria-haspopup="dialog"
        aria-label={open ? "Close quick answers" : "Open quick answers"}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="faq-close"
              className="trustFaq__launcherIcon"
              aria-hidden
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.16,
                ease: easeOutSoft,
              }}
            >
              <X strokeWidth={1.75} size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="faq-open"
              className="trustFaq__launcherIcon"
              aria-hidden
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.16,
                ease: easeOutSoft,
              }}
            >
              <MessageCircle strokeWidth={1.65} size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
