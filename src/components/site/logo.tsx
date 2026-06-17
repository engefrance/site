"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "light" | "mark";
  withText?: boolean;
}

export function Logo({ className, withText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0">
        <Image
          src="/uploads/logotipo.png"
          alt="ENGEFRANCE"
          fill
          className="object-contain"
          priority
        />
      </div>
      {withText && (
        <div className="flex flex-col leading-none">
          <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-white">
            ENGE<span className="text-[#1BA9FF]">FRANCE</span>
          </span>
          <span className="font-body text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-white/55 mt-0.5">
            Engenharia &middot; Construção
          </span>
        </div>
      )}
    </div>
  );
}
