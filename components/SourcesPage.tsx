import { sourceProjects, statusLabels } from "../data/site-content";
import { SiteShell, StatusTag } from "./SiteShell";

export function SourcesPage() {
  return (
    <SiteShell currentPath="/sources">
      <section className="page-hero sources-hero">
        <div className="page-hero-copy">
          <StatusTag status="active">Sources checked 24 July 2026</StatusTag>
          <p className="eyebrow">Where the ideas and facts came from</p>
          <h1>Planning pages are not the same as official facts or agreed plans.</h1>
          <p className="hero-lede">
            This site joins several separate idea pages into one community pitch.
            Publishing those pages does not mean anyone has backed the ideas or
            that any part has been approved.
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
          <p className="eyebrow">What the labels mean</p>
          <h2>Check whether you are reading an official fact or somebody&apos;s idea.</h2>
        </div>
        <div className="source-key">
          <article><StatusTag status="official">{statusLabels.official}</StatusTag><p>A government or organiser-controlled page for its own project or event.</p></article>
          <article><StatusTag status="active">{statusLabels.active}</StatusTag><p>An idea or planning document you can read online. It has not necessarily been pitched, backed or acted on.</p></article>
          <article><StatusTag status="proposed">{statusLabels.proposed}</StatusTag><p>An idea, rough cost, possible place or small trial for people to discuss.</p></article>
          <article><StatusTag status="horizon">{statusLabels.horizon}</StatusTag><p>A big future question needing community support, evidence, cultural leadership and expert advice.</p></article>
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
            <p className="eyebrow">The separate planning pages</p>
            <h2>See how each part of this joined-up pitch was worked out.</h2>
          </div>
          <p>
            These are webpages and planning documents, not finished projects.
            They are kept separate so people can check the detail behind each idea.
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
          <p className="eyebrow">What this website will not pretend</p>
          <h2>Dream big, but be dead straight about what is real.</h2>
        </div>
        <div className="boundary-grid">
          {[
            ["No fake endorsements", "No person, Traditional Owner body, venue, business, funder, school, government or community organisation is shown as backing the proposal without explicit approval."],
            ["No cultural shortcuts", "Names, stories, language, images and cultural knowledge stay with the people who have the right to decide how they are used."],
            ["No pretending to be emergency services", "Community screens could repeat checked official information, but they would never replace the official source."],
            ["No property claim", "A public listing, photo, idea or nearby event does not prove access, ownership, lease, planning fit or consent."],
            ["No pretending a drawing is a plan", "Maps and graphics help explain an idea. They are not engineering designs, routes, surveys, safety reports or real costs."],
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
          This joined-up community pitch was assembled from separate public
          planning pages and current official sources. Corrections are welcome.
          If the facts change, this website should change too.
        </p>
      </section>
    </SiteShell>
  );
}
