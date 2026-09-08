import React, { useCallback, useRef, useState } from "react";
import "./ReachSection.css";

/**
 * ReachSection — "Our Patient Regions"
 * -------------------------------------------------
 * Two premium glass cards, side by side:
 *
 *   LEFT  "Regional & Interstate Reach"  → states / far districts
 *   RIGHT "Local Neighbourhood Reach"    → streets around the hospital
 *
 * Each card holds a tinted, tilt-shift "map tile" panel — river, highway
 * accent, tiny building blocks, glossy 3D pins that reveal their name on
 * hover/focus, and a subtle mouse-follow parallax tilt on the panel
 * itself (this is the "dynamic" / premium touch).
 *
 * The left card keeps its floating "Multi-State Referral Network" info
 * card; the right card's info/"Get Directions" box has been removed per
 * request, leaving a clean map with just the HQ pin and area pins.
 *
 * NOTE — sample data: distances below are illustrative placeholders,
 * copied from the reference layout. Replace with your real figures.
 */

const REGIONAL_PINS = [
  { id: "bihar", name: "Bihar", meta: "42 KM", top: 4, left: 62, size: "sm", crop: true },
  { id: "ballia", name: "Ballia", meta: "UP · 88 KM", top: 66, left: 15, size: "md" },
  { id: "garhwa", name: "Garhwa", meta: "Jharkhand · 118 KM", top: 46, left: 84, size: "md" },
  { id: "sonbhadra", name: "Sonbhadra", meta: "UP border · 96 KM", top: 82, left: 40, size: "md" },
  { id: "rewa", name: "Rewa", meta: "M.P. · 152 KM", top: 78, left: 68, size: "md" },
];

const LOCAL_PINS = [
  { id: "petrolpump", name: "Chaurashia Petrol Pump", meta: "0.2 KM", top: 16, left: 68, size: "md" },
  { id: "gtjunction", name: "G.T. Road Junction", meta: "0.8 KM", top: 46, left: 90, size: "md" },
  { id: "busstand", name: "Chandauli Bus Stand", meta: "2.1 KM", top: 60, left: 12, size: "md" },
  { id: "bichhiya", name: "Bichhiya Kala", meta: "1.4 KM", top: 78, left: 78, size: "md" },
  { id: "kaileemarket", name: "Kailee Road Market", meta: "0.5 KM", top: 92, left: 48, size: "sm" },
];

const REGIONAL_DOTS = [
  { top: 30, left: 46 }, { top: 58, left: 62 }, { top: 40, left: 30 },
  { top: 72, left: 55 }, { top: 20, left: 76 },
];
const LOCAL_DOTS = [
  { top: 32, left: 55 }, { top: 66, left: 34 }, { top: 22, left: 40 },
  { top: 70, left: 62 }, { top: 50, left: 22 },
];

/** Tiny building-footprint blocks scattered on the map for realism. */
const REGIONAL_BLOCKS = [
  { top: 24, left: 20 }, { top: 62, left: 48 }, { top: 14, left: 55 }, { top: 88, left: 62 },
];
const LOCAL_BLOCKS = [
  { top: 30, left: 30 }, { top: 66, left: 58 }, { top: 12, left: 42 }, { top: 86, left: 26 },
];

/** Small helper: gentle mouse-follow parallax tilt on a map panel. */
function useTilt(maxDeg = 6) {
  const [style, setStyle] = useState({});
  const frame = useRef(null);

  const onMouseMove = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setStyle({
          "--tiltX": `${(-py * maxDeg).toFixed(2)}deg`,
          "--tiltY": `${(px * maxDeg).toFixed(2)}deg`,
        });
      });
    },
    [maxDeg]
  );

  const onMouseLeave = useCallback(() => {
    setStyle({ "--tiltX": "0deg", "--tiltY": "0deg" });
  }, []);

  return { style, onMouseMove, onMouseLeave };
}

function MapPin({ pin, active, onEnter, onLeave }) {
  return (
    <button
      type="button"
      className={`pr-pin pr-pin--${pin.size}${pin.crop ? " pr-pin--crop" : ""}${
        active ? " is-active" : ""
      }`}
      style={{ top: `${pin.top}%`, left: `${pin.left}%` }}
      onMouseEnter={() => onEnter(pin.id)}
      onMouseLeave={() => onLeave()}
      onFocus={() => onEnter(pin.id)}
      onBlur={() => onLeave()}
      aria-label={`${pin.name}, ${pin.meta}`}
    >
      <span className="pr-pin__shadow" aria-hidden="true" />
      <span className="pr-pin__glyph" aria-hidden="true">
        <span className="pr-pin__gloss" />
      </span>
      <span className="pr-pin__label">
        <strong>{pin.name}</strong>
        <em>{pin.meta}</em>
      </span>
    </button>
  );
}

function RegionCard({
  theme,
  eyebrow,
  heading,
  subtext,
  featureEyebrow,
  featureTitle,
  featureDesc,
  ctaLabel,
  ctaHref,
  showFeature = true,
  badge,
  hub,
  pins,
  dots,
  blocks,
  roadLabel,
}) {
  const [active, setActive] = useState(null);
  const tilt = useTilt(5);

  return (
    <article className={`pr-card pr-card--${theme}`}>
      {eyebrow && (
        <span className="pr-card__eyebrow">
          <span className="pr-card__eyebrow-dot" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h3 className="pr-card__heading">{heading}</h3>
      <p className="pr-card__subtext">{subtext}</p>

      <div
        className="pr-panel"
        style={tilt.style}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        role="img"
        aria-label={`${heading} — illustrative map`}
      >
        <div className="pr-panel__surface">
          <span className="pr-panel__blob" aria-hidden="true" />
          <span className="pr-panel__roads" aria-hidden="true" />

          {/* soft decorative river */}
          <svg className="pr-panel__river" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M -5 78 C 20 70, 30 88, 50 74 C 68 62, 80 76, 105 66" />
          </svg>

          {/* main road / highway accent, running through the tile */}
          <div className="pr-highway" aria-hidden="true">
            {roadLabel && <span className="pr-highway__label">{roadLabel}</span>}
          </div>

          {blocks.map((b, i) => (
            <span
              key={i}
              className="pr-block"
              style={{ top: `${b.top}%`, left: `${b.left}%` }}
              aria-hidden="true"
            />
          ))}

          {dots.map((d, i) => (
            <span
              key={i}
              className="pr-dot"
              style={{ top: `${d.top}%`, left: `${d.left}%` }}
              aria-hidden="true"
            />
          ))}

          {pins.map((pin) => (
            <MapPin
              key={pin.id}
              pin={pin}
              active={active === pin.id}
              onEnter={setActive}
              onLeave={() => setActive(null)}
            />
          ))}

          <div className="pr-hub" style={{ top: `${hub.top}%`, left: `${hub.left}%` }}>
            <span className="pr-hub__pulse" aria-hidden="true" />
            <span className="pr-hub__shadow" aria-hidden="true" />
            <span className="pr-hub__pin" aria-hidden="true">
              <span className="pr-hub__pin-gloss" />
              HQ
            </span>
            <span className="pr-hub__label">
              <strong>{hub.name}</strong>
              <em>{hub.tag}</em>
            </span>
          </div>

          <span className="pr-panel__vignette" aria-hidden="true" />
        </div>

        {badge && (
          <div className="pr-flag">
            <span className="pr-flag__num">{badge.value}</span>
            <span className="pr-flag__label">{badge.label}</span>
          </div>
        )}

        {showFeature && (
          <div className="pr-feature">
            <span className="pr-feature__eyebrow">
              <span className="pr-feature__eyebrow-dot" aria-hidden="true" />
              {featureEyebrow}
            </span>
            <h4 className="pr-feature__title">{featureTitle}</h4>
            <p className="pr-feature__desc">{featureDesc}</p>
            {ctaLabel && (
              <a
                className="pr-feature__cta"
                href={ctaHref}
                target={ctaHref?.startsWith("http") ? "_blank" : undefined}
                rel={ctaHref?.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {ctaLabel}
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
                  <path d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function ReachSection() {
  return (
    <section className="pr-reach" aria-labelledby="pr-reach-heading">
      <div className="pr-reach__intro">
       
        <h2 id="pr-reach-heading" className="pr-reach__title">
          Our Patient Regions
        </h2>
      </div>

      <div className="pr-reach__grid">
        <RegionCard
          theme="violet"
        
          heading="Patients From Nearby States"
          subtext="Serving patients from nearby states and surrounding districts with trusted and specialized healthcare."
          showFeature={false}
          hub={{ name: "Chandauli, UP Hub", tag: "Primary Care Apex", top: 44, left: 40 }}
          pins={REGIONAL_PINS}
          dots={REGIONAL_DOTS}
          blocks={REGIONAL_BLOCKS}
          roadLabel="NH Corridor"
        />

        <span className="pr-reach__link" aria-hidden="true">
          <span className="pr-reach__link-dot pr-reach__link-dot--a" />
          <span className="pr-reach__link-dot pr-reach__link-dot--b" />
        </span>

        <RegionCard
          theme="azure"
         
          heading="Serving Nearby Areas"
          subtext="Providing quality healthcare to families from nearby towns, villages, and communities around Chandauli."
          showFeature={false}
          hub={{ name: "Our Hospital", tag: "Sanjay Nagar", top: 46, left: 44 }}
          pins={LOCAL_PINS}
          dots={LOCAL_DOTS}
          blocks={LOCAL_BLOCKS}
          roadLabel="G.T. Road"
        />
      </div>
    </section>
  );
}