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
            The $41 million Gumpi ferry terminal upgrade brings the parking
            problem into focus. The proposal starts with a tunnel loop around
            Gumpi connecting both ferry terminals and several park-and-ride
            locations. One possible parking lot is opposite the vacant 10–12
            Ballow Road plot, with others around the loop. Suitable excavated
            sand could also help build useful community infrastructure.{" "}
            <a href={sitePath("/places")}>See the bigger Ballow Road question.</a>
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
        <div className="ready-set-explainer">
          <div className="ready-set-intro">
            <StatusTag status="proposed">Proposed for 9 Ballow Road, Gumpi / Dunwich</StatusTag>
            <h3>Ready S.E.T. Co-op is proposed as a community base for Sustainable Employment &amp; Training.</h3>
            <p>
              The idea is a practical front door where local people can learn,
              teach, make media, support events, test business ideas, find paid
              pathways and turn good community ideas into real work.
            </p>
          </div>
          <div className="ready-set-meaning">
            <article>
              <span>READY</span>
              <p>Bring the people, ideas, skills and places together.</p>
            </article>
            <article>
              <span>S.E.T.</span>
              <p><strong>Sustainable Employment &amp; Training.</strong> Build useful skills and work that can last.</p>
            </article>
            <article>
              <span>CO-OP</span>
              <p>Work together, share the load and keep the benefit flowing through the community. Ready, S.E.T., Co-op!</p>
            </article>
          </div>
          <div className="ready-set-location">
            <p>
              <strong>Proposed home:</strong> 9 Ballow Road, beside the wider
              10–12 Ballow Road festival, sport and screen idea.
            </p>
            <div className="button-row">
              <a className="button button-dark" href={sitePath("/places")}>See the Ballow Road pitch</a>
              <a
                className="button button-outline-dark"
                href="https://auraofintelligence.github.io/ready-set-co-op-trust-hub/"
                target="_blank"
                rel="noreferrer"
              >
                Open the detailed Co-op plan
              </a>
            </div>
          </div>
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
              <p className="eyebrow">Unverified placeholders</p>
              <h3>Challenge the guesses and build a proper budget.</h3>
            </div>
            <strong>Check the working →</strong>
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

      <section className="section club-pathways-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Two practical community pathways</p>
            <h2>A sports club path and a film club path.</h2>
          </div>
          <p>
            These are public planning tools people can explore now. They are not
            operating clubs, confirmed programs or proof that anyone has agreed
            to run them.
          </p>
        </div>
        <div className="club-pathways-grid">
          <article className="club-pathway sport-pathway">
            <span>SPORT</span>
            <h3>Sandy Sports community club builder</h3>
            <p>
              Explore how a possible community-run sand sports club could shape
              its purpose, activities and next practical steps.
            </p>
            <a
              className="button button-dark"
              href="https://auraofintelligence.github.io/community-club-builder-sandy-sports/"
              target="_blank"
              rel="noreferrer"
            >
              Open Sandy Sports
            </a>
          </article>
          <article className="club-pathway film-pathway">
            <span>FILM + FESTIVAL</span>
            <h3>Film Club and Quandamooka Film Festival tools</h3>
            <p>
              Start a story, plan a screening, learn the craft, prepare festival
              work and build a film community one useful session at a time.
            </p>
            <div className="button-row">
              <a
                className="button button-primary"
                href="https://auraofintelligence.github.io/quandamooka-film-festival/"
                target="_blank"
                rel="noreferrer"
              >
                Open festival doorway
              </a>
              <a
                className="button button-ghost"
                href="https://auraofintelligence.github.io/film-club-documentary-builders/"
                target="_blank"
                rel="noreferrer"
              >
                Open Film Club builders
              </a>
            </div>
          </article>
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
            Training, alongside the Quandamooka Film Festival toolkit;
            year-round local media and journalism, with practical training for
            local people; digital noticeboards for everyday use that could also
            carry checked emergency updates; shared screens; and places where
            culture, business, sport and community can grow together.
          </blockquote>
          <a className="button button-dark" href={sitePath("/join")}>
            I can help with a piece
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
