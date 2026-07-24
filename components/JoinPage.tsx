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
          <h1>Have a look at the full pitch and tell us what you reckon.</h1>
          <p className="hero-lede">
            Nothing has been agreed yet. You might love one part, question
            another or have a much better idea. You choose whether your comments
            can be shared or should stay private.
          </p>
          <div className="button-row">
            <a className="button button-primary" href={joinIssueUrl} target="_blank" rel="noreferrer">
              Share your thoughts ↗
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
            <p className="eyebrow">Nine ways into the conversation</p>
            <h2>What part catches your interest?</h2>
          </div>
          <p>
            These are just conversation starters. They are not jobs, volunteer
            roles or promises. Any real work would need clear expectations and
            fair terms.
          </p>
        </div>
        <div className="join-grid">
          {[
            ["STORY", "Pitch a local question, short film, interview or explainer."],
            ["SKILL", "Teach a beginner-friendly session or mentor a small project."],
            ["SCREEN", "Explore hosting a noticeboard, screening or public demo."],
            ["GEAR", "List equipment that may be available under agreed care rules."],
            ["VENUE", "Talk about a possible safe and accessible place for a small trial."],
            ["REVIEW", "Check facts, safety, cultural limits, plain language or whether everyone can take part."],
            ["BUSINESS", "Suggest a useful local service, sponsorship idea or trainee task."],
            ["SPORT", "Help shape Sandy Sports, event coverage or community broadcasting."],
            ["BUILD", "Help with technology, rules, costs, organising or writing things down clearly."],
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
            <h2>Right now, only the person making the pitch is on this board.</h2>
          </div>
          <p>
            Nobody else will be listed unless they clearly agree to their name,
            role and exact wording. A chat, tag, meeting or public post does not
            mean someone is on board.
          </p>
        </div>
        <div className="onboard-board">
          <article className="initiator-card">
            <span>PROJECT INITIATOR</span>
            <h3>Luke Nathan Hayes</h3>
            <p>
              Strange But True / Aura of Intelligence. Luke brought the separate
              planning webpages together and is putting the joined-up idea to the
              community for the first time.
            </p>
            <StatusTag status="active">Publicly named</StatusTag>
          </article>
          <article className="open-seat">
            <span>OPEN SEAT 01</span>
            <strong>Your name only with your yes</strong>
            <p>Possible interest: culture, stories or checking the details.</p>
          </article>
          <article className="open-seat">
            <span>OPEN SEAT 02</span>
            <strong>Your organisation only with approved wording</strong>
            <p>Possible interest: hosting, business, sport or training.</p>
          </article>
          <article className="open-seat">
            <span>OPEN SEAT 03</span>
            <strong>A partner status that says exactly what is real</strong>
            <p>Interested · asking questions · possible host · helper · funder.</p>
          </article>
        </div>
        <div className="consent-note">
          <strong>Not listed does not mean not supportive.</strong>
          <p>
            Some help should stay private. Some conversations are early. Some
            people may contribute without wanting public credit. This board
            only records the names people have agreed can be shown.
          </p>
        </div>
      </section>

      <section className="section collaboration-steps">
        <div className="section-heading">
          <p className="eyebrow">From an idea to being named publicly</p>
          <h2>Ask first, agree clearly and check again before publishing.</h2>
        </div>
        <div className="collaboration-track">
          {[
            ["1", "Offer", "Name the piece you can help with."],
            ["2", "Talk it through", "Agree what it means, what it does not mean and how long it might take."],
            ["3", "Try", "Only run a small trial if everyone involved agrees."],
            ["4", "Review", "Check what happened and what should change."],
            ["5", "Acknowledge", "Approve any public name, role or quote before it appears."],
          ].map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section join-form-cta">
        <div>
          <p className="eyebrow">Got a thought, question or offer?</p>
          <h2>Send a simple note.</h2>
          <p>
            The public form asks what you can offer, what you need, what may be
            public and what must stay private. Do not place sensitive cultural,
            personal, youth or commercial information in a public issue.
          </p>
        </div>
        <a className="button button-dark" href={joinIssueUrl} target="_blank" rel="noreferrer">
          Share your thoughts on GitHub ↗
        </a>
      </section>

      <section className="section closing-cta">
        <p className="eyebrow">Want to look deeper first?</p>
        <h2>See the separate planning pages and the official sources behind the pitch.</h2>
        <div className="button-row">
          <a className="button button-primary" href={sitePath("/sources")}>Check the sources</a>
          <a className="button button-ghost" href={sitePath("/")}>Back to the big picture</a>
        </div>
      </section>
    </SiteShell>
  );
}
