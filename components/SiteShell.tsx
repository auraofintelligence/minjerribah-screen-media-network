"use client";

import { useEffect, useMemo, useState } from "react";
import { navigation } from "../data/site-content";
import { sitePath } from "../lib/site-paths";

type SiteShellProps = {
  currentPath: string;
  children: React.ReactNode;
  tone?: "dark" | "signal";
};

export function SiteShell({
  currentPath,
  children,
  tone = "dark",
}: SiteShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
      setShowTop(window.scrollY > 720);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const sequence = useMemo(() => {
    const index = navigation.findIndex((item) => item.href === currentPath);
    return {
      previous: index > 0 ? navigation[index - 1] : null,
      next: index >= 0 && index < navigation.length - 1 ? navigation[index + 1] : null,
    };
  }, [currentPath]);

  return (
    <div className={`site-shell tone-${tone}`}>
      <a className="skip-link" href="#main-content">
        Skip to the story
      </a>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
      <header className="site-header">
        <a className="brand" href={sitePath("/")} aria-label="Minjerribah Screen and Media Network home">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>
            <strong>MSMN</strong>
            <small>Stories · skills · screens</small>
          </span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span aria-hidden="true">{menuOpen ? "Close" : "Menu"}</span>
          <span className="menu-lines" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
        <nav
          id="primary-navigation"
          className={menuOpen ? "primary-nav is-open" : "primary-nav"}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={sitePath(item.href)}
              aria-current={currentPath === item.href ? "page" : undefined}
            >
              {item.shortLabel}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={sitePath("/join")}>
          Put your hand up
        </a>
      </header>

      <div className="live-ticker" aria-label="Project status">
        <strong>Community pitch</strong>
        <div className="ticker-window">
          <div className="ticker-track">
            <span>Make stories</span>
            <span>Train people</span>
            <span>Publish locally</span>
            <span>Screen publicly</span>
            <span>Build trust</span>
            <span>Stay useful when things go pear-shaped</span>
            <span aria-hidden="true">Make stories</span>
            <span aria-hidden="true">Train people</span>
          </div>
        </div>
        <span className="ticker-time">24 JUL 2026</span>
      </div>

      <main id="main-content">{children}</main>

      <nav className="sequence-nav" aria-label="Page sequence">
        {sequence.previous ? (
          <a href={sitePath(sequence.previous.href)}>
            <small>Previous scene</small>
            <strong>← {sequence.previous.label}</strong>
          </a>
        ) : (
          <span className="sequence-spacer" />
        )}
        {sequence.next ? (
          <a className="next" href={sitePath(sequence.next.href)}>
            <small>Next scene</small>
            <strong>{sequence.next.label} →</strong>
          </a>
        ) : (
          <a className="next" href={sitePath("/")}>
            <small>Roll credits</small>
            <strong>Back to opening night ↑</strong>
          </a>
        )}
      </nav>

      <footer className="site-footer">
        <div>
          <p className="eyebrow">A community pitch, not a done deal</p>
          <h2>Have a look. Ask questions. Tell us what you reckon.</h2>
        </div>
        <div className="footer-notes">
          <p>
            This independent website brings a set of ideas together for
            discussion. It does not mean any person or organisation supports
            them, and nothing here has been approved, funded or secured.
          </p>
          <p>
            © 2026 Luke Nathan Hayes / Strange But True / Aura of Intelligence.
            Public-source terms apply.
          </p>
        </div>
      </footer>

      <button
        className={showTop ? "back-to-top is-visible" : "back-to-top"}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

export function StatusTag({
  children,
  status,
}: {
  children: React.ReactNode;
  status: "active" | "proposed" | "horizon" | "official";
}) {
  return <span className={`status-tag status-${status}`}>{children}</span>;
}
