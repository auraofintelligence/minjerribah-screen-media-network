"use client";

import { useState } from "react";

const ordinaryCards = [
  ["THIS WEEK", "Film workshop · Thursday · details pending host confirmation"],
  ["FERRY", "Check the operator before travel · last refreshed 08:30"],
  ["LOCAL SPORT", "Results and fixtures supplied by participating clubs"],
  ["STORY CALL", "What should the island newsroom explain next?"],
] as const;

const emergencyCards = [
  ["OFFICIAL UPDATE", "Republished from the named emergency authority"],
  ["UPDATED", "08:42 AEST · timestamps remain visible on every screen"],
  ["TRANSPORT", "Confirm ferry and road status with the official operator"],
  ["IF IN DANGER", "Use official emergency channels; this screen is a relay"],
] as const;

export function EmergencyDemo() {
  const [mode, setMode] = useState<"ordinary" | "emergency">("ordinary");
  const cards = mode === "ordinary" ? ordinaryCards : emergencyCards;

  return (
    <div className={`mode-demo mode-${mode}`}>
      <div className="mode-toolbar">
        <div>
          <span className="mode-dot" aria-hidden="true" />
          <strong>{mode === "ordinary" ? "Everyday network" : "Emergency relay concept"}</strong>
        </div>
        <div className="mode-switch" role="group" aria-label="Screen mode">
          <button
            type="button"
            aria-pressed={mode === "ordinary"}
            onClick={() => setMode("ordinary")}
          >
            Normal
          </button>
          <button
            type="button"
            aria-pressed={mode === "emergency"}
            onClick={() => setMode("emergency")}
          >
            Emergency demo
          </button>
        </div>
      </div>
      <div className="demo-screen">
        <div className="screen-masthead">
          <span>MINJERRIBAH COMMUNITY SCREEN</span>
          <strong>{mode === "ordinary" ? "LOCAL LOOP" : "VERIFY · TIMESTAMP · REPEAT"}</strong>
        </div>
        <div className="screen-card-grid">
          {cards.map(([label, text]) => (
            <article key={label}>
              <span>{label}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="screen-footer">
          <span>Source shown on every item</span>
          <span>Accessible visual + text layers</span>
          <span>Not an emergency authority</span>
        </div>
      </div>
    </div>
  );
}
