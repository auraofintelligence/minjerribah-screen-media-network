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
            <StatusTag status="proposed">Open collaboration proposal</StatusTag>
            <span>Built in public · ready to discuss now</span>
          </div>
          <p className="eyebrow">Minjerribah Screen &amp; Media Network</p>
          <h1>
            Stories, skills, screens and trusted local information for
            Minjerribah.
          </h1>
          <p className="hero-lede">
            A joyful, practical invitation to connect film, local news, training,
            public screens, community places and disaster resilience, one useful
            layer at a time.
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
            No organisation, venue, lease, funding stream or infrastructure
            project is presented as confirmed unless its status says so.
          </p>
        </div>
        <HeroSignal />
        <div className="hero-caption" aria-hidden="true">
          <span>SCENE 01</span>
          <span>JOYFUL RESPONSIBLE ABUNDANCE</span>
          <span>TAKE 01</span>
        </div>
      </section>

      <section className="status-ribbon" aria-label="What exists and what is proposed">
        <article>
          <StatusTag status="active">Already moving</StatusTag>
          <p>
            Public film, media, noticeboard, co-op, sand-sport and open-data
            prototypes already exist.
          </p>
        </article>
        <article>
          <StatusTag status="proposed">Build next</StatusTag>
          <p>
            Invite real participants, run small pilots, shape governance and test
            shared places and screens.
          </p>
        </article>
        <article>
          <StatusTag status="horizon">Keep conceptual</StatusTag>
          <p>
            Tunnels, park-and-ride and material reuse remain long-horizon
            questions requiring serious authority and review.
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
          <p className="eyebrow">The visual promise</p>
          <h2 id="cinema-art-title">Stories in. Skills up. Signals out.</h2>
          <p>
            One vivid public layer can connect small acts of making, checking,
            learning and sharing without pretending they all belong to one
            authority.
          </p>
        </div>
      </section>

      <section className="section bloom-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">The system opens like a flower</p>
            <h2>Start with one useful petal. Let participation reveal the shape.</h2>
          </div>
          <p>
            The “super-site” is not a mega-organisation. It is a clear front door
            into existing public work and the next small experiments people can
            choose to carry.
          </p>
        </div>
        <div className="petal-stage">
          <div className="petal-core">
            <strong>READY</strong>
            <span>SET</span>
            <small>CO-OP?</small>
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
              <p className="eyebrow">Editable planning model</p>
              <h3>Fund outcomes, not fog.</h3>
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
              <p className="eyebrow">Receipts + boundaries</p>
              <h3>Follow the real projects behind the pitch.</h3>
            </div>
            <strong>Check the source trail →</strong>
          </a>
        </div>
      </section>

      <section className="section first-season-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">The first season</p>
            <h2>Move immediately without pretending everything is ready.</h2>
          </div>
          <p>
            “Launch now” can mean opening the invitation, forming a small working
            circle and delivering visible pilots. Premises, entities, insurance,
            cultural authority and public money stay separate decisions.
          </p>
        </div>
        <div className="season-grid">
          <article>
            <span>WEEKS 1–2</span>
            <h3>Gather the crew</h3>
            <p>
              Open the register, hear boundaries, confirm who wants public credit
              and form a temporary pilot circle.
            </p>
          </article>
          <article>
            <span>WEEKS 3–6</span>
            <h3>Make one useful thing</h3>
            <p>
              Run one story workshop, publish one reviewed update and test one
              noticeboard screen with a willing host.
            </p>
          </article>
          <article>
            <span>WEEKS 7–12</span>
            <h3>Screen the proof</h3>
            <p>
              Hold a small public screening or demo night, report what happened
              and invite the next round on evidence.
            </p>
          </article>
        </div>
        <div className="big-ask">
          <p className="eyebrow">The main ask</p>
          <blockquote>
            Collaborate to build the Quandamooka Film Festival toolkit, a
            year-round local media and journalism pathway, a digital noticeboard
            and disaster-kiosk network, shared screen infrastructure, and places
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
