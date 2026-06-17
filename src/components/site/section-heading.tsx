"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className={cn(
            "inline-flex items-center gap-2 mb-4",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#1BA9FF]" />
          <span className="text-[#1BA9FF] text-xs font-heading font-semibold uppercase tracking-[0.25em]">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#1BA9FF]" />
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-base sm:text-lg text-white/60 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
