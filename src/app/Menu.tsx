"use client";

import Image from "next/image";
import { useState } from "react";

type Item = { name: string; note: string; price: string };

const MENU: Record<string, { photo: string; alt: string; items: Item[] }> = {
  Coffee: {
    photo: "photo-1550731358-491ded4af838",
    alt: "A cappuccino with latte art held in two hands",
    items: [
      { name: "Espresso", note: "House blend — cocoa, dark cherry, long finish", price: "3.50" },
      { name: "Flat White", note: "Double ristretto, silky whole milk", price: "5.00" },
      { name: "Oat Cortado", note: "Equal parts espresso and steamed oat", price: "5.25" },
      { name: "Cardamom Latte", note: "Our house cardamom syrup, lightly sweet", price: "6.00" },
      { name: "Pour-Over", note: "Single origin, rotates weekly", price: "6.50" },
      { name: "Cold Brew Tonic", note: "18-hour brew over tonic and orange peel", price: "6.00" },
    ],
  },
  Kitchen: {
    photo: "photo-1719520670204-dbe1903a789f",
    alt: "Avocado toast topped with soft poached eggs",
    items: [
      { name: "Avocado Toast", note: "Sourdough, chili crisp, soft egg", price: "13.00" },
      { name: "Shakshuka", note: "Slow tomato, feta, two eggs, grilled bread", price: "15.00" },
      { name: "Brown Butter Pancakes", note: "Maple, whipped ricotta, berries", price: "14.00" },
      { name: "Noir Breakfast Sandwich", note: "Egg, aged cheddar, bacon jam, brioche", price: "12.00" },
      { name: "Mushroom Toast", note: "Wild mushrooms, thyme, crème fraîche", price: "13.00" },
      { name: "Grain Bowl", note: "Farro, greens, roasted squash, tahini", price: "15.00" },
    ],
  },
  Bakery: {
    photo: "photo-1565252556328-92ee4a9a0983",
    alt: "A cappuccino beside a butter croissant on a wooden table",
    items: [
      { name: "Butter Croissant", note: "Laminated in house, three days", price: "4.50" },
      { name: "Almond Croissant", note: "Frangipane, toasted almonds", price: "5.50" },
      { name: "Cardamom Bun", note: "Swedish-style knot, pearl sugar", price: "5.00" },
      { name: "Banana Bread", note: "Brown butter, walnuts, served warm", price: "4.75" },
      { name: "Olive Oil Cake", note: "Orange zest, crème fraîche", price: "5.25" },
      { name: "Chocolate Chip Cookie", note: "Sea salt, dark chocolate pools", price: "3.75" },
    ],
  },
};

const TABS = Object.keys(MENU);

export default function Menu() {
  const [tab, setTab] = useState(TABS[0]);
  const current = MENU[tab];

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
      <div className="reveal relative aspect-[3/2] overflow-hidden lg:sticky lg:aspect-[4/5] lg:top-12 lg:self-start">
        <Image
          key={current.photo}
          src={`https://images.unsplash.com/${current.photo}?auto=format&fit=crop&w=1200&q=80`}
          alt={current.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="fade object-cover"
        />
      </div>

      <div>
        <div role="tablist" aria-label="Menu sections" className="flex gap-8 border-b border-rule">
          {TABS.map((t) => (
            <button
              key={t}
              role="tab"
              id={`tab-${t}`}
              aria-selected={tab === t}
              aria-controls="menu-panel"
              onClick={() => setTab(t)}
              className={`-mb-px border-b-2 pb-3 font-display text-xl whitespace-nowrap transition-colors duration-200 sm:text-2xl ${
                tab === t
                  ? "border-accent text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <ul id="menu-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} key={tab} className="fade">
          {current.items.map((item) => (
            <li key={item.name} className="reveal flex items-baseline gap-4 border-b border-rule/60 py-5">
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-xl">{item.name}</h3>
                <p className="mt-1 text-muted">{item.note}</p>
              </div>
              <span className="font-display text-lg text-accent tabular-nums">${item.price}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          Oat, almond and whole milk at no extra charge. Ask us about allergens — we&rsquo;ll walk you
          through every plate.
        </p>
      </div>
    </div>
  );
}
