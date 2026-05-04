"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const easeOutSoft = [0.22, 1, 0.36, 1] as const;

export type RevealProps = HTMLMotionProps<"section">;

export function Reveal({ children, ...rest }: RevealProps) {
  const reduce = usePrefersReducedMotion();

  return (
    <motion.section
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -48px 0px" }}
      transition={{
        duration: reduce ? 0.01 : 0.42,
        ease: easeOutSoft,
      }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
