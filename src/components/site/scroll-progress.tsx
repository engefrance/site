"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Barra de progresso de scroll fixa no topo da página.
 * Usa o gradiente Azul Elétrico → Azul Royal da marca ENGEFRANCE.
 * Fica acima do header (z-index maior).
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[#1BA9FF] via-[#5BC4FF] to-[#1028B9] shadow-[0_0_12px_rgba(27,169,255,0.6)]"
      aria-hidden="true"
    />
  );
}
