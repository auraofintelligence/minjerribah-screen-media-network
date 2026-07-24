import { sitePath } from "../lib/site-paths";
import { SiteShell, StatusTag } from "./SiteShell";

const joinIssueUrl =
  "https://github.com/auraofintelligence/minjerribah-screen-media-network/issues/new?template=collaborate.yml";

export function JoinPage() {
  return (
    <SiteShell currentPath="/join" tone="signal">
      <section className="page-hero join-hero">
        <div className="page-hero-copy">
          <StatusTag status="proposed">Open invitation</StatusTag>
          <p className="eyebrow">Culture · business · art · sport · community · curiosity</p>
          <h1>Bring one real piece. Help the network discover its shape.</h1>
          <p className="hero-lede">
            You do not need to agree with the whole vision. Offer the part you can
            stand behind, name your boundary and choose whether your contribution
            is public or private.
          </p>
          <div className="button-row">
            <a className="button button-primary" href={joinIssueUrl} target="_blank" rel="noreferrer">
              Open the collaboration form ↗
            </a>
            <a className="button button-ghost" href="#who-is-on-board">
              See the public board
            </a>
          </div>
        </div>
        <div className="join-marquee" aria-hidden="true">
          <span>ARTISTS</span>
          <span>YOUNG PEOPLE</span>
          <span>BUSINESSES</span>
          <span>FILMMAKERS</span>
          <span>CLUBS</span>
          <span>REPORTERS</span>
          <span>TRAINERS</span>
          <span>ELDERS</span>
          <span>BUILDERS</span>
        </div>
      </section>

      <section className="section join-doors-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Nine easy doors</p>
            <h2>Where could your energy land first?</h2>
          </div>
          <p>
            These are conversation starters, not job offers or volunteer
            commitments. Each real role needs a person, scope, care boundary and
            fair terms.
          </p>
        </div>
        <div className="join-grid">
          {[
            ["STORY", "Pitch a local question, short film, interview or explainer."],
            ["SKILL", "Teach a beginner-friendly session or mentor a small project."],
            ["SCREEN", "Explore hosting a noticeboard, screening or public demo."],
            ["GEAR", "List equipment that may be available under agreed care rules."],
            ["VENUE", "Offer a lawful, accessible space for one pilot activity."],
            ["REVIEW", "Check sources, accessibility, safety, cultural boundaries or plain language."],
            ["BUSINESS", "Propose a useful local service, sponsor outcome or trainee task."],
            ["SPORT", "Help shape Sandy Sports, event coverage or community broadcasting."],
            ["BUILD", "Work on technology, governance, budgets, logistics or documentation."],
          ].map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section board-section" id="who-is-on-board">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Who is on board?</p>
            <h2>The public board starts honestly small.</h2>
          </div>
          <p>
            A listing appears only after the person or organisation approves its
            name, role, status and exact wording. A conversation, tag, meeting or
            public post is not assent.
          </p>
        </div>
        <div className="onboard-board">
          <article className="initiator-card">
            <span>PROJECT INITIATOR</span>
            <h3>Luke Nathan Hayes</h3>
            <p>
              Strange But True / Aura of Intelligence—originating the public
              prototype, linking the existing workbenches and inviting a
              human-led collaboration.
            </p>
            <StatusTag status="active">Publicly named</StatusTag>
          </article>
          <article className="open-seat">
            <span>OPEN SEAT 01</span>
            <strong>Your name only with your yes</strong>
            <p>Possible lane: culture, story or review.</p>
          </article>
          <article className="open-seat">
            <span>OPEN SEAT 02</span>
            <strong>Your organisation only with approved wording</strong>
            <p>Possible lane: host, business, sport or training.</p>
          </article>
          <article className="open-seat">
            <span>OPEN SEAT 03</span>
            <strong>A partner status that says exactly what is real</strong>
            <p>Interested · exploring · pilot host · contributor · funder.</p>
          </article>
        </div>
        <div className="consent-note">
          <strong>Not listed does not mean not supportive.</strong>
          <p>
            Some help should stay private. Some conversations are early. Some
            people may contribute without wanting public credit. This board
            records approved public acknowledgement—not the full relationship
            map.
          </p>
        </div>
      </section>

      <section className="section collaboration-steps">
        <div className="section-heading">
          <p className="eyebrow">From spark to public credit</p>
          <h2>A short consent loop.</h2>
        </div>
        <div className="collaboration-track">
          {[
            ["1", "Offer", "Name the piece you can help with."],
            ["2", "Clarify", "Agree the scope, limits, timing and care needs."],
            ["3", "Try", "Run the smallest useful pilot."],
            ["4", "Review", "Check what happened and what should change."],
            ["5", "Acknowledge", "Approve any public name, role or quote before it appears."],
          ].map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section join-form-cta">
        <div>
          <p className="eyebrow">Ready for one useful move?</p>
          <h2>Open a collaboration note. Keep it simple.</h2>
          <p>
            The public form asks what you can offer, what you need, what may be
            public and what must stay private. Do not place sensitive cultural,
            personal, youth or commercial information in a public issue.
          </p>
        </div>
        <a className="button button-dark" href={joinIssueUrl} target="_blank" rel="noreferrer">
          Put your hand up on GitHub ↗
        </a>
      </section>

      <section className="section closing-cta">
        <p className="eyebrow">Want context before contact?</p>
        <h2>Follow the source trail and choose the project that matches your interest.</h2>
        <div className="button-row">
          <a className="button button-primary" href={sitePath("/sources")}>Open the receipts</a>
          <a className="button button-ghost" href={sitePath("/")}>Replay the invitation</a>
        </div>
      </section>
    </SiteShell>
  );
}
