"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { honours } from "@/lib/content";

function Counter({ value, raw }: { value: number; raw?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.7,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [inView, value, reduceMotion]);

  const rounded = Math.round(display);

  return (
    <span ref={ref} className="tabular-nums">
      {raw ? String(rounded) : rounded.toLocaleString("en-NG")}
    </span>
  );
}

export function HonoursBand() {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
      {honours.map((item) => (
        <div
          key={item.label}
          className="rounded-card border border-white/12 bg-brand-deep/70 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-gold/40 md:p-6"
        >
          <dd className="headline text-4xl text-white sm:text-5xl lg:text-6xl">
            <Counter value={item.value} raw={item.raw} />
          </dd>
          <dt className="eyebrow mt-3 text-[10px] text-white/70">
            {item.label}
          </dt>
          {item.detail ? (
            <p className="mt-1 text-xs text-gold/80 tabular-nums">
              {item.detail}
            </p>
          ) : null}
        </div>
      ))}
    </dl>
  );
}
