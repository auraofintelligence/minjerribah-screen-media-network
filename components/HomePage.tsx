import { systemPetals } from "../data/site-content";
import { assetPath, sitePath } from "../lib/site-paths";
import { HeroSignal } from "./HeroSignal";
import { SiteShell, StatusTag } from "./SiteShell";

export function HomePage() {
  return (
    <SiteShell currentPath="/" tone="signal">
      <section className="hero home-hero">
        <div className="hero-copy">
          <div className="hero-status">
            <StatusTag status="proposed">A community pitch</StatusTag>
            <span>Ideas on a webpage · not pitched or agreed yet</span>
          </div>
          <p className="eyebrow">Minjerribah Screen &amp; Media Network</p>
          <h1>
            Stories, skills, screens and trusted local information for
            Minjerribah.
          </h1>
          <p className="hero-lede">
            A big local idea bringing film, news, training, public noticeboards,
            useful community spaces and emergency information together in one
            easy place.
          </p>
          <div className="button-row">
            <a className="button button-primary" href={sitePath("/join")}>
              Start the conversation
            </a>
            <a className="button button-ghost" href={sitePath("/network")}>
              See how it flows
            </a>
          </div>
          <p className="fine-print">
            Nothing on this website has been approved, funded or agreed to unless
            we clearly say otherwise.
          </p>
        </div>
        <HeroSignal />
        <div className="hero-caption" aria-hidden="true">
          <span>SCENE 01</span>
          <span>JOYFUL RESPONSIBLE ABUNDANCE</span>
          <span>TAKE 01</span>
        </div>
      </section>

      <section className="status-ribbon" aria-label="Where these ideas are up to">
        <article>
          <StatusTag status="active">Written up so far</StatusTag>
          <p>
            The ideas have been explored in separate webpages and planning
            documents. They have not been pitched to the community yet.
          </p>
        </article>
        <article>
          <StatusTag status="proposed">What happens next</StatusTag>
          <p>
            Put the whole picture to the community, hear what people think and
            find out whether anyone wants to help shape it.
          </p>
        </article>
        <article>
          <StatusTag status="horizon">Big future questions</StatusTag>
          <p>
            Tunnels, park-and-ride and reusing excavated sand are ideas only.
            They would need proper community support, expert work and approval.
          </p>
        </article>
      </section>

      <section className="cinema-art-section" aria-labelledby="cinema-art-title">
        {/* Plain img keeps this shared component compatible with the static GitHub Pages build. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath("/screen-network-art.png")}
          alt="Generated abstract cinematic artwork of connected screens, film frames, sound waves and glowing information signals"
        />
        <div className="cinema-art-copy">
          <p className="eyebrow">The big picture</p>
          <h2 id="cinema-art-title">Stories in. Skills up. Signals out.</h2>
          <p>
            One clear community website can show how local stories, skills,
            useful information and shared screens might work together.
          </p>
        </div>
      </section>

      <section className="section bloom-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">One big idea, made of smaller ideas</p>
            <h2>Start with the part that makes sense to you.</h2>
          </div>
          <p>
            This website does not represent a new organisation. It brings the
            separate planning pages together so the community can see the whole
            pitch, talk about it and decide what is worth taking further.
          </p>
        </div>
        <div className="petal-stage">
          <div className="petal-core">
            <strong>READY</strong>
            <span>S.E.T.</span>
            <small>CO-OP</small>
          </div>
          <div className="petal-grid">
            {systemPetals.map((petal) => (
              <article className="petal-card" key={petal.number}>
                <span>{petal.number}</span>
                <h3>{petal.title}</h3>
                <p>{petal.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projector-section">
        <div className="projector-light" aria-hidden="true" />
        <div className="section-heading">
          <p className="eyebrow">One network, six doors</p>
          <h2>Pick the part that feels alive to you.</h2>
        </div>
        <div className="portal-grid">
          <a className="portal-card portal-wide" href={sitePath("/network")}>
            <span className="card-number">01</span>
            <div>
              <p className="eyebrow">Film · news · noticeboards</p>
              <h3>Make, verify, publish, screen.</h3>
              <p>
                See the year-round media workflow, journalism training and a
                screen network that stays useful every day.
              </p>
            </div>
            <strong>Enter the network →</strong>
          </a>
          <a className="portal-card" href={sitePath("/places")}>
            <span className="card-number">02</span>
            <div>
              <p className="eyebrow">9 + 10–12 Ballow Road</p>
              <h3>Give the collaboration somewhere to land.</h3>
            </div>
            <strong>Walk the precinct →</strong>
          </a>
          <a className="portal-card" href={sitePath("/funding")}>
            <span className="card-number">03</span>
            <div>
              <p className="eyebrow">Rough example costs</p>
              <h3>See what different amounts might pay for.</h3>
            </div>
            <strong>Move the sliders →</strong>
          </a>
          <a className="portal-card portal-colour" href={sitePath("/join")}>
            <span className="card-number">04</span>
            <div>
              <p className="eyebrow">Everyone gets a doorway</p>
              <h3>Artists, cultures, clubs, businesses, learners, elders, young people.</h3>
            </div>
            <strong>Put your hand up →</strong>
          </a>
          <a className="portal-card" href={sitePath("/sources")}>
            <span className="card-number">05</span>
            <div>
              <p className="eyebrow">Sources + straight answers</p>
              <h3>See where each idea came from.</h3>
            </div>
            <strong>Check the source trail →</strong>
          </a>
        </div>
      </section>

      <section className="section first-season-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">If the community wants to explore it</p>
            <h2>Start small, listen properly and be honest about every step.</h2>
          </div>
          <p>
            The first job is simply to share the full pitch and listen. Any trial
            activity, organisation, premises, insurance, cultural permission or
            public funding would be a later decision made with the right people.
          </p>
        </div>
        <div className="season-grid">
          <article>
            <span>FIRST</span>
            <h3>Hear what people reckon</h3>
            <p>
              Share the joined-up idea, answer questions and hear support,
              concerns, corrections and better suggestions.
            </p>
          </article>
          <article>
            <span>ONLY IF PEOPLE WANT IT</span>
            <h3>Choose one small trial</h3>
            <p>
              Agree on one useful, low-risk thing to try with willing people and
              a clear way to review how it went.
            </p>
          </article>
          <article>
            <span>THEN</span>
            <h3>Show what happened</h3>
            <p>
              Share the result honestly, including what worked, what did not and
              whether the community wants another step.
            </p>
          </article>
        </div>
        <div className="big-ask">
          <p className="eyebrow">The main ask</p>
          <blockquote>
            Help shape Ready S.E.T. Co-op, meaning Sustainable Employment &amp;
            Training, alongside the Quandamooka Film Festival toolkit, a
            year-round local media and journalism training, digital noticeboards
            that could carry checked emergency updates, shared screens, and places
            where culture, business, sport and community can grow together.
          </blockquote>
          <a className="button button-dark" href={sitePath("/join")}>
            I can help with a piece
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
