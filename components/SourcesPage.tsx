import { sourceProjects, statusLabels } from "../data/site-content";
import { SiteShell, StatusTag } from "./SiteShell";

export function SourcesPage() {
  return (
    <SiteShell currentPath="/sources">
      <section className="page-hero sources-hero">
        <div className="page-hero-copy">
          <StatusTag status="active">Source trail refreshed 24 July 2026</StatusTag>
          <p className="eyebrow">The receipts room</p>
          <h1>Keep official facts, public prototypes and future questions in separate reels.</h1>
          <p className="hero-lede">
            This site connects a large existing project garden. It does not turn
            those projects into endorsements or blur a bold proposal into an
            approved plan.
          </p>
        </div>
        <div className="receipt-stack" aria-hidden="true">
          <div><span>01</span><strong>OFFICIAL</strong></div>
          <div><span>02</span><strong>ACTIVE</strong></div>
          <div><span>03</span><strong>PROPOSED</strong></div>
          <div><span>04</span><strong>HORIZON</strong></div>
        </div>
      </section>

      <section className="section source-key-section">
        <div className="section-heading">
          <p className="eyebrow">Status is part of the design</p>
          <h2>Read the colour before reading the claim.</h2>
        </div>
        <div className="source-key">
          <article><StatusTag status="official">{statusLabels.official}</StatusTag><p>A government or organiser-controlled page for its own project or event.</p></article>
          <article><StatusTag status="active">{statusLabels.active}</StatusTag><p>A real public prototype or toolkit that exists now; not proof of institutional backing.</p></article>
          <article><StatusTag status="proposed">{statusLabels.proposed}</StatusTag><p>An invitation, planning estimate, possible place or next experiment.</p></article>
          <article><StatusTag status="horizon">{statusLabels.horizon}</StatusTag><p>A question for future research, cultural leadership, evidence and professional review.</p></article>
        </div>
      </section>

      <section className="section fact-strip-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">What can be said today</p>
            <h2>A few current anchors. Nothing more.</h2>
          </div>
          <p>
            Dates, property listings, project status and event details can
            change. Follow the linked authority before acting.
          </p>
        </div>
        <div className="fact-strip">
          <article>
            <span>OFFICIAL PLANNING</span>
            <strong>$41M</strong>
            <p>
              The Dunwich (Gumpi) Ferry Terminal Upgrade is a government project
              in planning. The connected public source trail describes a $41
              million commitment; the tunnel idea on this site is not part of it.
            </p>
          </article>
          <article>
            <span>CONFIRMED EVENT DATES</span>
            <strong>29–30 AUG</strong>
            <p>
              Redland City Council lists the Quandamooka Festival for 29–30
              August 2026. Festival programming, venue and authority belong to
              its organisers.
            </p>
          </article>
          <article>
            <span>PROPERTY CONCEPT</span>
            <strong>9 + 10–12</strong>
            <p>
              Ballow Road property availability, control and planning status are
              not assumed here. Both site ideas require fresh due diligence.
            </p>
          </article>
        </div>
      </section>

      <section className="section source-projects-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">The project constellation</p>
            <h2>Open the existing work behind each part of the pitch.</h2>
          </div>
          <p>
            Companion prototypes remain separate so each can keep its own
            boundaries, detail and update rhythm.
          </p>
        </div>
        <div className="source-list">
          {sourceProjects.map((project, index) => (
            <a
              className="source-row"
              href={project.url}
              key={project.title}
              target="_blank"
              rel="noreferrer"
            >
              <span className="source-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <StatusTag status={project.status}>{statusLabels[project.status]}</StatusTag>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <strong aria-hidden="true">↗</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="section boundaries-section">
        <div className="section-heading">
          <p className="eyebrow">Non-negotiable public boundaries</p>
          <h2>The imagination can stay enormous because the labels stay boringly clear.</h2>
        </div>
        <div className="boundary-grid">
          {[
            ["No fake endorsements", "No person, Traditional Owner body, venue, business, funder, school, government or community organisation is shown as backing the proposal without explicit approval."],
            ["No cultural shortcuts", "Names, stories, language, images, knowledge and programme authority stay with the people and processes entitled to hold them."],
            ["No emergency impersonation", "Community screens can repeat verified official information; they do not become the authority."],
            ["No property claim", "A public listing, photo, idea or nearby event does not prove access, ownership, lease, planning fit or consent."],
            ["No engineering theatre", "Maps and motion graphics are communication tools, not designs, routes, surveys, safety cases or cost plans."],
            ["No pressure to join", "People can explore, question, correct, decline, stay private or support only one small part."],
          ].map(([title, text]) => (
            <article key={title}><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section update-note">
        <span>LAST SOURCE REVIEW</span>
        <strong>24 JULY 2026 · BRISBANE / AEST</strong>
        <p>
          The new super-site was assembled from the supplied hand-off, local
          public-source repos and current official web checks. Corrections are
          welcome; public claims should change when the evidence changes.
        </p>
      </section>
    </SiteShell>
  );
}
