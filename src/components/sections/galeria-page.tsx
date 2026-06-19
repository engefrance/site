"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, Calendar, Tag } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import {
  GALLERY_PHOTOS,
  GALLERY_CATEGORIES,
  type GalleryCategory,
  type GalleryPhoto,
} from "@/lib/galeria-data";
import { cn } from "@/lib/utils";

export function GaleriaPage() {
  const [filter, setFilter] = useState<"Todas" | GalleryCategory>("Todas");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visible =
    filter === "Todas"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === filter);

  // Lightbox navigation — useCallback para manter referência estável
  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const prevPhoto = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + visible.length) % visible.length
      ),
    [visible.length]
  );
  const nextPhoto = useCallback(
    () =>
      setActiveIndex((i) => (i === null ? null : (i + 1) % visible.length)),
    [visible.length]
  );

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, closeLightbox, prevPhoto, nextPhoto]);

  const activePhoto: GalleryPhoto | null =
    activeIndex !== null ? visible[activeIndex] : null;

  return (
    <>
      <PageHero
        eyebrow="Galeria de Fotos"
        title={
          <>
            Nossa história em <span className="gradient-text">imagens</span>
          </>
        }
        subtitle="Registro visual das obras, equipe, equipamentos e momentos institucionais da ENGEFRANCE."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-20" />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {GALLERY_CATEGORIES.map((f) => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => {
                    setFilter(f);
                    setActiveIndex(null);
                  }}
                  className={cn(
                    "relative px-5 py-2.5 rounded-full text-sm font-heading font-semibold tracking-wide transition-all",
                    isActive
                      ? "text-white"
                      : "text-white/55 hover:text-white glass-light border border-white/10 hover:border-white/20"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="gallery-filter-active"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1BA9FF] to-[#1028B9] shadow-[0_8px_24px_-8px_rgba(16,40,185,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{f}</span>
                </button>
              );
            })}
          </div>

          {/* Counter */}
          <p className="text-center text-xs text-white/45 uppercase tracking-[0.18em] font-heading mb-8">
            {visible.length}{" "}
            {visible.length === 1 ? "foto" : "fotos"}
            {filter !== "Todas" && ` em ${filter}`}
          </p>

          {/* Masonry grid */}
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {visible.map((photo, idx) => (
                <motion.button
                  layout
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveIndex(idx)}
                  className="group relative w-full block text-left rounded-2xl overflow-hidden glass-light border border-white/10 hover:border-[#1BA9FF]/40 transition-all mb-4"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                    {/* Zoom icon */}
                    <div className="absolute top-3 right-3 h-9 w-9 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="h-4 w-4 text-[#1BA9FF]" />
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full glass-strong text-[10px] font-heading font-semibold uppercase tracking-[0.15em] text-white">
                        {photo.category}
                      </span>
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-heading text-sm font-bold text-white mb-1 line-clamp-1 group-hover:text-[#1BA9FF] transition-colors">
                        {photo.title}
                      </h3>
                      {photo.description && (
                        <p className="text-[11px] text-white/55 line-clamp-1">
                          {photo.description}
                        </p>
                      )}
                      {photo.year && (
                        <p className="mt-1 text-[10px] text-[#1BA9FF] flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {photo.year}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state (just in case) */}
          {visible.length === 0 && (
            <div className="text-center py-16 text-white/45">
              Nenhuma foto nesta categoria ainda.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#050505]/95 backdrop-blur-md"
              onClick={closeLightbox}
            />

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 h-11 w-11 rounded-full glass-strong flex items-center justify-center text-white/80 hover:text-white"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev button */}
            {visible.length > 1 && (
              <button
                onClick={prevPhoto}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full glass-strong flex items-center justify-center text-white/80 hover:text-white"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}

            {/* Next button */}
            {visible.length > 1 && (
              <button
                onClick={nextPhoto}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full glass-strong flex items-center justify-center text-white/80 hover:text-white"
                aria-label="Próxima foto"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}

            {/* Photo */}
            <motion.div
              key={activePhoto.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl max-h-[85vh] flex flex-col"
            >
              <div className="relative flex-1 min-h-0 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  className="object-contain"
                  sizes="(max-width:1024px) 100vw, 1024px"
                />
              </div>

              {/* Caption bar */}
              <div className="mt-4 glass-strong rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#1BA9FF]/15 border border-[#1BA9FF]/30 text-[10px] font-heading font-semibold uppercase tracking-[0.15em] text-[#1BA9FF]">
                      <Tag className="h-3 w-3" />
                      {activePhoto.category}
                    </span>
                    {activePhoto.year && (
                      <span className="text-[11px] text-white/55 flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-[#1BA9FF]" />
                        {activePhoto.year}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-white">
                    {activePhoto.title}
                  </h3>
                  {activePhoto.description && (
                    <p className="text-sm text-white/60 mt-1">
                      {activePhoto.description}
                    </p>
                  )}
                </div>
                <p className="text-xs text-white/40 uppercase tracking-[0.15em] font-heading sm:text-right">
                  {activeIndex! + 1} / {visible.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
