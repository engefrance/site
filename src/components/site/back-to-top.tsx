"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * Botão "voltar ao topo" que aparece após o usuário rolar 600px.
 * Some automaticamente quando o usuário está no topo.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 10 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleClick}
          aria-label="Voltar ao topo"
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 h-12 w-12 rounded-full glass-strong border border-[#1BA9FF]/40 flex items-center justify-center text-white hover:border-[#1BA9FF] hover:bg-[#1BA9FF]/15 transition-colors group shadow-[0_8px_30px_-8px_rgba(16,40,185,0.5)]"
        >
          <ArrowUp className="h-5 w-5 text-[#1BA9FF] transition-transform group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
