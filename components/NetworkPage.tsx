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
          <StatusTag status="proposed">An idea for year-round local media</StatusTag>
          <p className="eyebrow">Local stories + useful public information</p>
          <h1>Make stories. Check them. Move them where people are.</h1>
          <p className="hero-lede">
            A possible way for local people to share stories, film, news and
            useful information on phones, public screens and at local events,
            with facts and permissions checked before anything goes out.
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
            <p className="eyebrow">How a local story could be handled</p>
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
          <p className="eyebrow">What people could cover</p>
          <h2>Useful local information, from one end of the island to the other.</h2>
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
          If the Co-op forms, its members and elected leadership would set the
          publishing rules together, within the laws and Acts that apply. This
          website and Luke do not get to decide those rules in advance.
        </p>
      </section>

      <section className="section training-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Learn by making something useful</p>
            <h2>A local newsroom can double as a training ground.</h2>
          </div>
          <p>
            Young people, beginners, community groups and local businesses could
            join in at a level that suits them.
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
            <p className="eyebrow">Digital community noticeboards</p>
            <h2>Island-wide news, plus notices that matter in each spot.</h2>
          </div>
          <p>
            A willing shop, club or venue could show nearby notices as well as
            checked island-wide information. No location is involved unless its
            owner or operator agrees.
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
            These screens would never replace Council, SES, police, fire, health,
            transport operators or emergency broadcasters. The idea is simply to
            repeat checked official updates and clearly show where and when they
            came from.
          </p>
        </div>
        <EmergencyDemo />
        <div className="resilience-grid">
          {[
            ["Cached local content", "Keep essential pages and contacts available during connection trouble."],
            ["Offline fallback", "A simple high-contrast page can remain useful when the live feed cannot."],
            ["Backup power options", "Battery or other safe backup choices belong in each site assessment."],
            ["Remote + local updates", "Authorised central publishing with a documented local fallback."],
            ["Visible times and dates", "Every item says when it was checked and which official source it came from."],
            ["Easy to understand", "Plain language, strong contrast, captions, icons and other languages where useful."],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section closing-cta">
        <p className="eyebrow">A small first trial, if people want one</p>
        <h2>One willing host. One training session. One checked local story. One screen.</h2>
        <p>
          That would be enough to learn whether the bigger idea is useful.
        </p>
        <div className="button-row">
          <a className="button button-primary" href={sitePath("/join")}>Say how you might help</a>
          <a className="button button-ghost" href={sitePath("/sources")}>See the planning pages</a>
        </div>
      </section>
    </SiteShell>
  );
}
