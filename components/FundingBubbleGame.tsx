"use client";

import { useEffect, useState } from "react";

const bubbles = [
  { title: "FESTIVALS", detail: "Films, culture, music and community gatherings", className: "bubble-festivals" },
  { title: "TRAINING", detail: "Skills, mentors and paid practice", className: "bubble-training" },
  { title: "SCREENS", detail: "Outdoor cinema and community noticeboards", className: "bubble-screens" },
  { title: "KEEP IT GOING", detail: "People, upkeep and year-round activity", className: "bubble-ongoing" },
] as const;

export function FundingBubbleGame() {
  const [burstIndex, setBurstIndex] = useState<number | null>(null);

  useEffect(() => {
    if (burstIndex === null) return;
    const timer = window.setTimeout(() => setBurstIndex(null), 1400);
    return () => window.clearTimeout(timer);
  }, [burstIndex]);

  return (
    <div className="funding-bubble-game">
      <p className="bubble-instruction">POP A BUBBLE. SEE WHERE THE MONEY COULD GO.</p>
      <div className="bubble-stage">
        {bubbles.map((bubble, index) => {
          const isBurst = burstIndex === index;
          return (
            <button
              className={`funding-bubble ${bubble.className}${isBurst ? " is-burst" : ""}`}
              type="button"
              key={bubble.title}
              onClick={() => setBurstIndex(index)}
              aria-label={`Pop the ${bubble.title.toLowerCase()} funding bubble`}
            >
              <span className="bubble-copy">
                <strong>{bubble.title}</strong>
                <small>{bubble.detail}</small>
              </span>
              <span className="cash-shower" aria-hidden="true">
                <i>$</i><i>$</i><i>$</i><i>$</i><i>$</i><i>$</i>
              </span>
            </button>
          );
        })}
      </div>
      <p className="bubble-result" aria-live="polite">
        {burstIndex === null
          ? "These are ideas for discussion, not real funding promises."
          : `${bubbles[burstIndex].title}: ${bubbles[burstIndex].detail}.`}
      </p>
    </div>
  );
}
