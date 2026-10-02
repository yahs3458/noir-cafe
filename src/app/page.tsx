import Image from "next/image";
import Gallery from "./Gallery";
import Menu from "./Menu";
import Reserve from "./Reserve";

const MOMENTS = [
  { id: "photo-1619860703338-9c70a1af6a63", time: "7:00 AM", text: "The first pour-over of the day" },
  { id: "photo-1530610476181-d83430b64dcd", time: "7:30 AM", text: "Croissants, still warm from the oven" },
  { id: "photo-1580644043501-627f569f7e25", time: "9:00 AM", text: "Morning rush at the bar" },
  { id: "photo-1504963642567-227b3bbd79de", time: "10:30 AM", text: "A quiet corner and a good book" },
  { id: "photo-1725289970943-42bb16982f5d", time: "12:00 PM", text: "Weekend brunch for the whole table" },
  { id: "photo-1561964191-a356867bbb34", time: "4:00 PM", text: "An afternoon flat white" },
  { id: "photo-1750040970096-31907e42d6a5", time: "8:00 PM", text: "Lamps low, conversations long" },
];

const photo = (id: string, w = 2000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const HOURS = [
  ["Monday – Friday", "7 AM – 9 PM"],
  ["Saturday", "8 AM – 10 PM"],
  ["Sunday", "8 AM – 8 PM"],
];

const link =
  "underline decoration-1 underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-2";

export default function Home() {
  return (
    <>
      {/* N9 edge-aligned nav, sitting on the hero photograph */}
      <header className="absolute inset-x-0 top-0 z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-10">
          <a href="#" className="font-display text-2xl font-semibold tracking-[0.2em]">
            NOIR
          </a>
          <div className="flex items-center gap-6 text-sm sm:gap-8">
            <a href="#menu" className="transition-colors hover:text-accent">
              Menu
            </a>
            <a href="#visit" className="hidden transition-colors hover:text-accent sm:inline">
              Visit
            </a>
            <a
              href="#reserve"
              className="border border-ink/40 px-4 py-2 whitespace-nowrap transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Reserve
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* H6 photographic fold */}
        <section className="relative flex min-h-[88svh] items-end">
          <Image
            src={photo("photo-1593536488177-1eb3c2d4e3d2")}
            alt="Warm Edison bulbs glowing above the bar at NOIR"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-scrim via-scrim/60 to-scrim/20" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-16 sm:px-10 sm:pb-24">
            <p className="rise text-sm tracking-[0.18em] text-muted uppercase">
              Coffee &amp; Kitchen · SE Alder Street, Portland
            </p>
            <h1
              className="rise mt-5 max-w-3xl font-display text-[clamp(2.9rem,7vw+0.5rem,5.5rem)] leading-[1.02] font-light tracking-[-0.02em] [overflow-wrap:anywhere]"
              style={{ animationDelay: "120ms", fontVariationSettings: '"SOFT" 100' }}
            >
              Stay for the second cup.
            </h1>
            <p
              className="rise mt-6 max-w-xl text-lg text-ink/85"
              style={{ animationDelay: "240ms" }}
            >
              Small-batch espresso, a kitchen that cooks from scratch, and corners made for long
              conversations.
            </p>
            <div
              className="rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
              style={{ animationDelay: "360ms" }}
            >
              <a
                href="#reserve"
                className="bg-ink px-7 py-4 font-medium whitespace-nowrap text-paper transition-colors duration-200 hover:bg-accent"
              >
                Reserve a table
              </a>
              <a href="#menu" className={`whitespace-nowrap ${link}`}>
                See the menu
              </a>
            </div>
          </div>
        </section>

        {/* story — narrow text band beside a photograph */}
        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-10 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:items-center md:gap-20 md:py-36">
          <div className="reveal">
            <h2 className="max-w-xl font-display text-[clamp(2.2rem,3vw+1rem,3.4rem)] leading-[1.08] font-light tracking-[-0.015em]">
              Roasted on Tuesdays. Poured every day.
            </h2>
            <div className="mt-8 max-w-[60ch] space-y-5 text-lg leading-relaxed text-muted">
              <p>
                NOIR started as a six-seat espresso bar with one rule: nothing leaves the counter
                unless we&rsquo;d drink it ourselves. We still roast every bean in small batches,
                every Tuesday, in the back room.
              </p>
              <p>
                The kitchen keeps the same pace — bread proofed overnight, eggs from a farm down the
                valley, plates built to be lingered over. Bring a laptop in the morning, a friend in
                the evening.
              </p>
            </div>
          </div>
          <figure className="reveal relative aspect-[4/5] overflow-hidden">
            <Image
              src={photo("photo-1532713107108-dfb5d8d2fc42", 1200)}
              alt="A barista pouring latte art into a cup"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="drift object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 text-sm text-ink/80">
              Morning bar, 7:40 AM.
            </figcaption>
          </figure>
        </section>

        {/* carousel: a day at the café, moving slowly; pauses on hover/focus */}
        <section aria-labelledby="moments" className="pb-24 md:pb-32">
          <div className="reveal mx-auto mb-12 flex max-w-7xl flex-col gap-3 px-5 sm:px-10 md:flex-row md:items-end md:justify-between">
            <h2
              id="moments"
              className="font-display text-[clamp(2.2rem,3vw+1rem,3.4rem)] leading-[1.08] font-light tracking-[-0.015em]"
            >
              A day at NOIR
            </h2>
            <p className="max-w-sm text-muted">From the first pour at seven to the last candle at night.</p>
          </div>
          <div className="marquee-wrap overflow-hidden">
            <ul className="marquee flex w-max gap-5 px-5">
              {[...MOMENTS, ...MOMENTS].map((m, i) => (
                <li
                  key={i}
                  aria-hidden={i >= MOMENTS.length || undefined}
                  className="w-[68vw] shrink-0 sm:w-80"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src={photo(m.id, 800)} alt={m.text} fill sizes="320px" className="object-cover" />
                  </div>
                  <p className="mt-4 text-sm text-accent tabular-nums">{m.time}</p>
                  <p className="mt-1 font-display text-xl">{m.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* full-bleed photo band — the image edge is the divider */}
        <figure className="relative flex h-[70svh] min-h-96 items-end overflow-hidden">
          <Image
            src={photo("photo-1515823662972-da6a2e4d3002")}
            alt="Overhead view of a cappuccino with latte art between fresh croissants"
            fill
            sizes="100vw"
            className="drift object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-scrim/85 via-scrim/40 to-transparent" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 sm:px-10 sm:pb-16">
            <blockquote className="reveal max-w-2xl font-display text-[clamp(2rem,3.5vw+1rem,3.75rem)] leading-[1.1] font-light tracking-[-0.015em]">
              &ldquo;Good coffee takes its time. So should you.&rdquo;
            </blockquote>
            <figcaption className="reveal mt-5 text-sm text-ink/80">
              Cappuccino and butter croissants, every morning from 7 AM.
            </figcaption>
          </div>
        </figure>

        <section id="menu" className="mx-auto max-w-7xl scroll-mt-8 px-5 py-24 sm:px-10 md:py-32">
          <h2 className="reveal mb-14 font-display text-[clamp(2.2rem,3vw+1rem,3.4rem)] leading-[1.08] font-light tracking-[-0.015em]">
            The menu
          </h2>
          <Menu />
        </section>

        <section aria-labelledby="gallery" className="mx-auto max-w-7xl px-5 pb-24 sm:px-10 md:pb-32">
          <div className="reveal mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2
              id="gallery"
              className="font-display text-[clamp(2.2rem,3vw+1rem,3.4rem)] leading-[1.08] font-light tracking-[-0.015em]"
            >
              From our table
            </h2>
            <p className="max-w-sm text-muted">Tap any photo to see it up close.</p>
          </div>
          <Gallery />
        </section>

        <section id="reserve" className="scroll-mt-8 bg-paper-2">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-20 md:py-32">
            <div className="reveal">
              <h2 className="font-display text-[clamp(2.2rem,3vw+1rem,3.4rem)] leading-[1.08] font-light tracking-[-0.015em]">
                Save a seat by the window.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                Walk-ins are always welcome. For weekend brunch and evenings, a booking means your
                table is waiting — candle already lit.
              </p>
            </div>
            <div className="reveal">
              <Reserve />
            </div>
          </div>
        </section>

        <section id="visit" className="mx-auto max-w-7xl scroll-mt-8 px-5 py-24 sm:px-10 md:py-32">
          <div className="grid gap-14 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-20">
            <div className="reveal">
              <h2 className="font-display text-[clamp(2.2rem,3vw+1rem,3.4rem)] leading-[1.08] font-light tracking-[-0.015em]">
                Find us
              </h2>
              <address className="mt-8 text-lg leading-relaxed not-italic">
                1120 SE Alder Street
                <br />
                Portland, OR 97214
              </address>
              <p className="mt-4 text-lg">
                <a href="tel:+15035550142" className={link}>
                  (503) 555-0142
                </a>
              </p>

              <table className="mt-10 w-full max-w-sm text-left">
                <caption className="sr-only">Opening hours</caption>
                <tbody>
                  {HOURS.map(([day, time]) => (
                    <tr key={day} className="border-b border-rule">
                      <th scope="row" className="py-3 font-normal text-muted">
                        {day}
                      </th>
                      <td className="py-3 text-right tabular-nums">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <a
                href="https://www.google.com/maps/search/?api=1&query=1120+SE+Alder+St+Portland+OR"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-10 inline-block whitespace-nowrap ${link}`}
              >
                Get directions
              </a>
            </div>

            <div className="reveal relative min-h-80 overflow-hidden md:min-h-0">
              <iframe
                title="Map showing NOIR on SE Alder Street, Portland"
                src="https://www.google.com/maps?q=1120+SE+Alder+St+Portland+OR&z=15&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-dark absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Ft1 mast-headed footer */}
      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-10 md:flex-row md:items-end md:justify-between">
          <div className="reveal">
            <p className="font-display text-[clamp(3rem,8vw,6rem)] leading-none font-semibold tracking-[0.15em]">
              NOIR
            </p>
            <p className="mt-3 text-muted">Coffee &amp; Kitchen · Portland, Oregon</p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted md:items-end">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={link}>
              Instagram
            </a>
            <p>Concept site — NOIR is a fictional café. Photos via Unsplash.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
