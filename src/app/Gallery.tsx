"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const src = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// span classes build the bento rhythm: one big tile, one tall, two wide
const PHOTOS = [
  { id: "photo-1719581228610-b04fa23d3d26", alt: "A plant-filled corner with a leather armchair", span: "col-span-2 row-span-2" },
  { id: "photo-1695459003559-a84af05f043e", alt: "A spiced latte dusted with cinnamon and star anise", span: "" },
  { id: "photo-1555507036-ab1f4038808a", alt: "Two croissants dusted with powdered sugar", span: "row-span-2" },
  { id: "photo-1609246258268-fd17f2b9a2c7", alt: "Waffles with blueberries and cream", span: "" },
  { id: "photo-1612366747681-e4ca6992b1e9", alt: "A pair of butter croissants on a dark plate", span: "col-span-2" },
  { id: "photo-1442512595331-e89e73853f31", alt: "A pour-over brewing at the coffee bar", span: "col-span-2" },
];

export default function Gallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const step = (d: number) => setIndex((i) => (i + d + PHOTOS.length) % PHOTOS.length);
  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const current = PHOTOS[index];

  return (
    <>
      <div className="grid auto-rows-[160px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-4">
        {PHOTOS.map((p, i) => (
          <button
            key={p.id}
            onClick={() => open(i)}
            aria-label={`View photo: ${p.alt}`}
            className={`reveal group relative overflow-hidden ${p.span}`}
          >
            <Image
              src={src(p.id, 1200)}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-(--ease-out) group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* native <dialog>: focus trap, Esc-to-close and backdrop come free */}
      <dialog
        ref={dialog}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-auto max-h-[92svh] w-[min(92vw,1200px)] bg-transparent p-0 text-ink backdrop:bg-scrim/90"
      >
        <figure className="relative aspect-[3/2] max-h-[80svh] w-full">
          <Image key={current.id} src={src(current.id, 2000)} alt={current.alt} fill sizes="92vw" className="fade object-contain" />
        </figure>
        <div className="mt-4 flex items-center justify-between gap-4 px-1">
          <p className="min-w-0 truncate text-sm text-muted">
            {index + 1} / {PHOTOS.length} · {current.alt}
          </p>
          <div className="flex shrink-0 gap-6 text-sm">
            <button onClick={() => step(-1)} className="hover:text-accent">
              ← Prev
            </button>
            <button onClick={() => step(1)} className="hover:text-accent">
              Next →
            </button>
            <button onClick={() => dialog.current?.close()} className="hover:text-accent">
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
