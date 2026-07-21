"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { artPieces, ArtPieceMeta } from "@/data/artPieces";

function Lightbox({ piece, onClose }: { piece: ArtPieceMeta; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors bg-black/50 rounded-full p-2 border border-white/10"
        aria-label="Close"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image — stop click from bubbling to backdrop */}
      <div className="flex flex-col items-center gap-4 max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={piece.imageUrl}
          alt={piece.title}
          className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
        />
        <div className="text-center">
          <p className="text-white font-medium">{piece.title}</p>
          {piece.altTitle && (
            <p className="text-zinc-400 text-sm italic">&ldquo;{piece.altTitle}&rdquo;</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ArtPage() {
  const [lightboxPiece, setLightboxPiece] = useState<ArtPieceMeta | null>(null);
  const dragOrigin = useRef<{ x: number; y: number } | null>(null);
  const openLightbox = useCallback((piece: ArtPieceMeta) => setLightboxPiece(piece), []);
  const closeLightbox = useCallback(() => setLightboxPiece(null), []);

  return (
    <div className="flex flex-col flex-1 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 font-sans">
      {lightboxPiece && <Lightbox piece={lightboxPiece} onClose={closeLightbox} />}
      {/* Background orbs — consistent with rest of site */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <main className="relative z-10 flex flex-1 w-full max-w-4xl mx-auto flex-col gap-10 pt-6 pb-16 px-8 sm:px-16">

        {/* ── Page heading ── */}
        <section className="flex flex-col gap-2">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Art
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Collage works by{" "}
            <span className="text-white font-medium">Etienne Philippe Jacquot</span>
          </p>
        </section>

        {/* ── Open Call notice ── */}
        <section className="flex flex-col gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                Upcoming Exhibition
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Philadelphia Collage — Open Call
              </h2>
              <p className="text-zinc-300 text-sm mt-1">
                August 7, 2026
              </p>
            </div>

            {/* Venue links */}
            <div className="flex flex-col gap-2 text-sm shrink-0">
              <a
                href="https://www.collagephiladelphia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-zinc-200 hover:bg-white/10 hover:border-white/30 transition-colors whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                </svg>
                Collage Philadelphia
              </a>
              <a
                href="https://www.theartsleague.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-zinc-200 hover:bg-white/10 hover:border-white/30 transition-colors whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                </svg>
                The Arts League
              </a>
            </div>
          </div>

          {/* Timeline */}
          <div className="border-t border-white/10 pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-zinc-400">
            <div className="flex flex-col gap-0.5">
              <span className="text-zinc-500 uppercase tracking-wide">Submission Due</span>
              <span className="text-zinc-200 font-medium">July 26, 2026</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-zinc-500 uppercase tracking-wide">Acceptance</span>
              <span className="text-zinc-200 font-medium">July 28, 2026</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-zinc-500 uppercase tracking-wide">Drop-off</span>
              <span className="text-zinc-200 font-medium">August 3, 2026</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-zinc-500 uppercase tracking-wide">Show Opens</span>
              <span className="text-zinc-200 font-medium">August 7, 2026</span>
            </div>
          </div>

          {/* Poster link */}
          <a
            href="https://www.instagram.com/p/Da6IkIzCbp4/?igsh=MTN4MnRtZGxrcG1oZg=="
            target="_blank"
            rel="noopener noreferrer"
            className="self-start flex items-center gap-2 text-xs text-blue-300 hover:text-blue-200 underline underline-offset-2 transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            View open call poster on Instagram
          </a>
        </section>
        

        {/* ── Artist's Statement ── */}
        <section className="flex flex-col gap-3 bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">


          {/* Piece titles */}

          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-300">
            Titles & Dimensions
          </h2>

          <ul className="flex flex-col gap-1.5 text-sm text-zinc-300 border-b border-white/10 pb-4">
            {artPieces.map((piece) => (
              <li key={piece.id} className="flex items-baseline gap-2">
                <span className="text-zinc-600 tabular-nums shrink-0">{piece.id}.</span>
                <span className="italic">{piece.title}</span>
                <span className="text-zinc-500">{piece.dimensions}</span> 
              </li>
            ))}
          </ul>

          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-300">
            Artist&apos;s Statement
          </h2>

          <p className="text-zinc-200 leading-relaxed text-base sm:text-lg">
            The work serves a critique of fine art as capital, wherein art reflects a mode of production,
            an object of consumption, and an artifact of (an attestation to) the excesses of modernity.
            The aesthetic juxtaposition of elements in the visual field is a strength of collage, 
            offering a balance of everyday thoughts in constant flux with respect to weight and composition.
            Lastly, fruit is used iconographically throughout the works out of respect for its symbolic meaning 
            and liberatory potential, providing an anchor for action and interpretation.
            
          </p>
          <p className="text-zinc-400 text-sm italic border-t border-white/10 pt-3">
            This collection of 4 collage pieces was made between April – July 2026.
          </p>
        </section>

        {/* ── Works carousel ── */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-300">
            Works — 2026
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            className="w-full !pb-10"
          >
            {artPieces.map((piece) => (
              <SwiperSlide key={piece.id}>
                <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">

                  {/* Image area */}
                  <div className="relative w-full bg-white/5 flex items-center justify-center">
                    {piece.imageUrl ? (
                      <button
                        onMouseDown={(e) => { dragOrigin.current = { x: e.clientX, y: e.clientY }; }}
                        onClick={(e) => {
                          if (dragOrigin.current) {
                            const dx = Math.abs(e.clientX - dragOrigin.current.x);
                            const dy = Math.abs(e.clientY - dragOrigin.current.y);
                            dragOrigin.current = null;
                            if (dx > 6 || dy > 6) return;
                          }
                          openLightbox(piece);
                        }}
                        className="w-full cursor-zoom-in group relative focus:outline-none"
                        aria-label={`View ${piece.title} full size`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={piece.imageUrl}
                          alt={piece.title}
                          className="w-full h-auto max-h-[80vh] object-contain transition-opacity group-hover:opacity-90"
                        />
                        {/* Zoom hint overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="11" cy="11" r="8" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                            </svg>
                            Click to enlarge
                          </span>
                        </div>
                      </button>
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-zinc-600 select-none">
                        <svg className="w-12 h-12 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
                        </svg>
                        <span className="text-xs tracking-wide uppercase opacity-50">
                          Image coming soon
                        </span>
                      </div>
                    )}

                    {/* Piece counter badge */}
                    <span className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-zinc-300 text-xs px-2.5 py-1 rounded-full border border-white/10">
                      {piece.id} / {artPieces.length}
                    </span>
                  </div>

                  {/* Caption */}
                  <div className="flex flex-col gap-1.5 p-5">
                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
                      {piece.title}
                    </h3>

                    {piece.altTitle && (
                      <p className="text-zinc-400 text-sm italic">
                        alt. &ldquo;{piece.altTitle}&rdquo;
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-zinc-500">
                      <span>
                        Collage &middot;{" "}
                        {piece.dimensions ? (
                          <span className="text-zinc-300">{piece.dimensions}</span>
                        ) : (
                          <span className="italic text-zinc-600">dimensions TBD</span>
                        )}
                      </span>
                      <span className="text-zinc-600">{piece.note ?? piece.year}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

      </main>
    </div>
  );
}
