import { coverageBeats, noticeboardLocations } from "../data/site-content";
import { sitePath } from "../lib/site-paths";
import { EmergencyDemo } from "./EmergencyDemo";
import { SiteShell, StatusTag } from "./SiteShell";

const workflow = [
  ["01", "Tip or upload", "A voice note, photo, event detail, question or public-source lead."],
  ["02", "Verify", "Check the person, source, date, permission, context and what remains unknown."],
  ["03", "Edit", "Shape plain-language text, sound, video, captions and accessible versions."],
  ["04", "Publish", "Release through the channels approved for that specific story."],
  ["05", "Broadcast", "Adapt for screens, social clips, live crosses, radio-style audio or cinema."],
  ["06", "Archive", "Keep the source trail, consent boundary, correction path and useful history."],
] as const;

export function NetworkPage() {
  return (
    <SiteShell currentPath="/network">
      <section className="page-hero network-hero">
        <div className="page-hero-copy">
          <StatusTag status="proposed">Year-round network proposal</StatusTag>
          <p className="eyebrow">The distribution + resilience layer</p>
          <h1>Make stories. Check them. Move them where people are.</h1>
          <p className="hero-lede">
            A community-contributed, professionally reviewed media loop for local
            news, film, public information and skills, built for phones, public
            screens and live events.
          </p>
        </div>
        <div className="news-wall" aria-hidden="true">
          <div className="news-cell cell-main">
            <span>LIVE</span>
            <strong>ISLAND<br />NEWSROOM</strong>
          </div>
          <div className="news-cell"><span>FILM</span><strong>24 FPS</strong></div>
          <div className="news-cell"><span>NOTICE</span><strong>08:42</strong></div>
          <div className="news-cell"><span>SPORT</span><strong>LOCAL</strong></div>
          <div className="news-cell"><span>SKILLS</span><strong>OPEN</strong></div>
        </div>
      </section>

      <section className="section workflow-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">The editorial current</p>
            <h2>Community tip → verify → edit → publish → broadcast → archive.</h2>
          </div>
          <p>
            Fast does not mean careless. Each hand-off keeps the source, consent
            and status attached, so a useful story can travel without becoming a
            rumour.
          </p>
        </div>
        <div className="workflow-track">
          {workflow.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section coverage-section">
        <div className="section-heading">
          <p className="eyebrow">A whole-island beat sheet</p>
          <h2>What the newsroom could help people understand.</h2>
        </div>
        <div className="coverage-grid">
          {coverageBeats.map((beat, index) => (
            <div key={beat}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{beat}</strong>
            </div>
          ))}
        </div>
        <p className="section-note">
          Cultural material, language, identity, youth media and community history
          need their own authority, consent and review, not just ordinary newsroom
          permission.
        </p>
      </section>

      <section className="section training-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Learn by making something useful</p>
            <h2>A local newsroom can double as a training ground.</h2>
          </div>
          <p>
            Young people, first-time contributors, community groups and local
            businesses should be able to enter at the level they are ready for.
          </p>
        </div>
        <div className="training-console">
          <div className="console-sidebar" aria-hidden="true">
            <span className="is-active">STORY</span>
            <span>AUDIO</span>
            <span>VISION</span>
            <span>EDIT</span>
            <span>LIVE</span>
          </div>
          <div className="console-stage">
            <div className="console-preview">
              <span className="record-dot">REC</span>
              <div className="focus-frame" />
              <strong>YOUR PHONE IS A STARTING KIT</strong>
            </div>
            <div className="console-timeline">
              <span style={{ width: "23%" }} />
              <span style={{ width: "14%" }} />
              <span style={{ width: "31%" }} />
              <span style={{ width: "18%" }} />
            </div>
          </div>
          <div className="console-lessons">
            <article><span>01</span><strong>Find the real question</strong><p>Who needs this and what can be checked?</p></article>
            <article><span>02</span><strong>Record cleanly</strong><p>Framing, sound, light, permission and backups.</p></article>
            <article><span>03</span><strong>Edit with care</strong><p>Context, captions, corrections and human review.</p></article>
            <article><span>04</span><strong>Publish on purpose</strong><p>Right audience, right channel, right boundary.</p></article>
          </div>
        </div>
      </section>

      <section className="section screens-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Digital noticeboard network</p>
            <h2>Island-wide priority. Location-specific usefulness.</h2>
          </div>
          <p>
            Each willing host can carry local notices while sharing verified
            island-wide information. Every location remains a proposal until its
            owner or operator says yes.
          </p>
        </div>
        <div className="network-map">
          <div className="map-core">
            <span>REVIEWED</span>
            <strong>MEDIA<br />DESK</strong>
          </div>
          {noticeboardLocations.map((location, index) => (
            <div className={`map-node node-${index + 1}`} key={location}>
              <i aria-hidden="true" />
              <span>{location}</span>
            </div>
          ))}
          <div className="map-ring ring-a" aria-hidden="true" />
          <div className="map-ring ring-b" aria-hidden="true" />
        </div>
      </section>

      <section className="section emergency-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Same screens, different responsibility</p>
            <h2>Useful every day. Ready to relay verified information when needed.</h2>
          </div>
          <p>
            The kiosk concept does not replace Council, SES, police, fire, health,
            transport operators or emergency broadcasters. It adds a resilient
            local distribution layer with clear sources and timestamps.
          </p>
        </div>
        <EmergencyDemo />
        <div className="resilience-grid">
          {[
            ["Cached local content", "Keep essential pages and contacts available during connection trouble."],
            ["Offline fallback", "A simple high-contrast page can remain useful when the live feed cannot."],
            ["Backup power options", "Battery or other safe backup choices belong in each site assessment."],
            ["Remote + local updates", "Authorised central publishing with a documented local fallback."],
            ["Visible timestamps", "Every item says when it was checked and which authority it came from."],
            ["Accessible communication", "Plain language, strong contrast, captions, icons and multilingual layers where appropriate."],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section closing-cta">
        <p className="eyebrow">The fastest honest pilot</p>
        <h2>One host. One training session. One reviewed local story. One public screen.</h2>
        <p>
          That is enough to learn what the bigger network should become.
        </p>
        <div className="button-row">
          <a className="button button-primary" href={sitePath("/join")}>Offer a pilot piece</a>
          <a className="button button-ghost" href={sitePath("/sources")}>Open the existing tools</a>
        </div>
      </section>
    </SiteShell>
  );
}
