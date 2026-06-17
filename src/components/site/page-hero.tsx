"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image: string;
  align?: "left" | "center";
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  align = "center",
}: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/85 via-[#050505]/75 to-[#050505]" />
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-30" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-[80%] rounded-full bg-[#1028B9]/25 blur-3xl pointer-events-none" />

      <div
        className={`relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        <div className={align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center gap-2 mb-5 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#1BA9FF]" />
            <span className="text-[#1BA9FF] text-xs font-heading font-semibold uppercase tracking-[0.25em]">
              {eyebrow}
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#1BA9FF]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-5 text-base sm:text-lg text-white/65 leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
