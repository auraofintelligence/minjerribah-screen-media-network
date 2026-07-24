import { sitePath } from "../lib/site-paths";
import { SiteShell, StatusTag } from "./SiteShell";

export function PlacesPage() {
  return (
    <SiteShell currentPath="/places">
      <section className="page-hero places-hero">
        <div className="page-hero-copy">
          <StatusTag status="proposed">Ballow Road ideas for discussion</StatusTag>
          <p className="eyebrow">Places to gather, learn, make and screen</p>
          <h1>Could Ballow Road become a bigger community meeting place?</h1>
          <p className="hero-lede">
            This pitch asks whether 9 Ballow Road could become a Ready S.E.T.
            Co-op community base, with S.E.T. standing for Sustainable Employment
            &amp; Training. It also asks whether 10–12 could host sport, outdoor
            screens and gatherings. No property access, lease or approval is assumed.
          </p>
        </div>
        <div className="precinct-strip" aria-hidden="true">
          <div className="precinct-building building-nine">
            <span>9</span>
            <strong>READY<br />S.E.T.<br />CO-OP</strong>
          </div>
          <div className="precinct-path"><i /><i /><i /><i /></div>
          <div className="precinct-building building-twelve">
            <span>10–12</span>
            <strong>SAND<br />SCREEN</strong>
          </div>
          <div className="precinct-building building-quampi">
            <span>NEARBY</span>
            <strong>QUAMPI</strong>
          </div>
        </div>
      </section>

      <section className="section place-intro">
        <div className="truth-banner">
          <strong>Important: these places are separate</strong>
          <p>
            The Quandamooka Festival and QUAMPI belong to their own organisers
            and cultural leaders. This pitch does not claim any control or
            support from them. It simply asks whether nearby spaces could add
            room for a separate film festival, training, sport and public screens.
          </p>
        </div>
      </section>

      <section className="section place-feature place-nine">
        <div className="place-number">09</div>
        <div className="place-copy">
          <StatusTag status="proposed">One possible home</StatusTag>
          <p className="eyebrow">9 Ballow Road</p>
          <h2>Could 9 Ballow Road become a front door for Ready S.E.T. Co-op?</h2>
          <p className="feature-lede">
            It might be a place for media training, everyday AI skills, editing,
            small workshops, shared gear, project meetings and local businesses
            working with the community.
          </p>
          <div className="use-grid">
            {[
              "Media + journalism desk",
              "Film-club nights",
              "AI literacy sessions",
              "Editing + production",
              "Shared equipment register",
              "Business collaboration",
              "Opportunities for young people",
              "Community project room",
            ].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="place-condition">
          <p className="eyebrow">The honest first step</p>
          <ol>
            <li>Share this full pitch with the community.</li>
            <li>Listen to questions, concerns and better ideas.</li>
            <li>See who might want to help.</li>
            <li>Only look at premises if real support begins to form.</li>
          </ol>
          <p>
            Ready S.E.T. Co-op has not been formed. So far, it is an idea on
            planning pages. Any real organisation would need to be shaped with
            the people who choose to take part and with proper advice.
          </p>
        </div>
      </section>

      <section className="section place-feature place-twelve">
        <div className="place-number">10–12</div>
        <div className="place-copy">
          <StatusTag status="proposed">Another idea to discuss</StatusTag>
          <p className="eyebrow">10–12 Ballow Road</p>
          <h2>Could 10–12 Ballow Road host sand sport and outdoor screens?</h2>
          <p className="feature-lede">
            The idea is an outdoor place for sand sport, cinema, markets, music,
            youth activities and community gatherings. It could only go further
            if the land, community wishes, cultural leadership, planning rules
            and practical details all lined up.
          </p>
          <div className="programme-reel">
            {[
              ["SAND", "Multi-use courts + playful events"],
              ["SCREEN", "Outdoor cinema + festival overflow concepts"],
              ["LIVE", "Music, panels + local broadcasting"],
              ["MARKET", "Food, makers + visitor orientation"],
              ["YOUTH", "Possible paid practice + useful experience"],
            ].map(([title, text]) => (
              <article key={title}>
                <span>{title}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="place-condition condition-light">
          <p className="eyebrow">Add something useful, do not take over</p>
          <p>
            QUAMPI and the Quandamooka Festival already bring major Quandamooka
            cultural activity to Ballow Road. This separate idea must never
            suggest it controls them or speaks for Traditional Owners.
          </p>
          <a
            className="text-link"
            href="https://auraofintelligence.github.io/ballow-road-sand-screen-hub/"
            target="_blank"
            rel="noreferrer"
          >
            See the separate Sand &amp; Screen planning page ↗
          </a>
        </div>
      </section>

      <section className="section precinct-flow-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Neighbours, not a takeover</p>
            <h2>Every place keeps its own role and makes its own decisions.</h2>
          </div>
          <p>
            The lines below only show how the ideas might sit near each other.
            They do not mean support, a lease, a partnership or planning approval.
          </p>
        </div>
        <div className="precinct-flow">
          <article className="flow-place">
            <span>PROPOSED</span>
            <strong>9 Ballow</strong>
            <p>Trust · training · media · coordination</p>
          </article>
          <div className="flow-line"><span>PEOPLE + SKILLS</span></div>
          <article className="flow-place feature">
            <span>PROPOSED</span>
            <strong>10–12 Ballow</strong>
            <p>Sport · screens · markets · gatherings</p>
          </article>
          <div className="flow-line"><span>RESPECTFUL ADJACENCY</span></div>
          <article className="flow-place cultural">
            <span>EXISTING CULTURAL PLACE</span>
            <strong>QUAMPI</strong>
            <p>Its own leaders, decisions and program</p>
          </article>
          <div className="flow-line"><span>PUBLIC MOVEMENT</span></div>
          <article className="flow-place official">
            <span>OFFICIAL PLANNING</span>
            <strong>Gumpi terminal</strong>
            <p>A transport project run through its own government process</p>
          </article>
        </div>
      </section>

      <section className="section horizon-section">
        <div className="horizon-label">
          <StatusTag status="horizon">Long-term concept only</StatusTag>
          <span>Move slowly here</span>
        </div>
        <div className="horizon-copy">
          <p className="eyebrow">A much bigger transport question</p>
          <h2>Could a future Gumpi park-and-ride tunnel reduce parking pressure and turn carefully tested spoil into useful material?</h2>
          <p>
            This is only a question for future community discussion and expert
            study. It is not part of the ferry-terminal upgrade. There is no
            route, budget, design or approval.
          </p>
        </div>
        <div className="tunnel-diagram" aria-label="Conceptual dependency diagram">
          <div className="surface-line">
            <span>FERRY GATEWAY</span>
            <span>BALLOW ROAD</span>
            <span>PARK + RIDE?</span>
          </div>
          <div className="tunnel-bore"><i /><strong>FUTURE QUESTION ONLY</strong><i /></div>
          <div className="spoil-path">
            <span>Material testing</span>
            <span>Environmental review</span>
            <span>Community benefit?</span>
          </div>
        </div>
        <div className="dependency-grid">
          {[
            "Quandamooka cultural leadership",
            "Landholder + community consent",
            "Planning + engineering",
            "Ecological and heritage review",
            "Transport evidence",
            "Funding + procurement",
            "Safety + emergency planning",
            "Transparent public alternatives",
          ].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section closing-cta">
        <p className="eyebrow">What comes first</p>
        <h2>Talk with people before talking about building anything.</h2>
        <p>
          First, share the whole pitch and hear what the community thinks. A
          property decision is much further down the track.
        </p>
        <div className="button-row">
          <a className="button button-primary" href={sitePath("/join")}>Tell us what you reckon</a>
          <a className="button button-ghost" href={sitePath("/sources")}>Check the facts</a>
        </div>
      </section>
    </SiteShell>
  );
}
