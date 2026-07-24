import { sitePath } from "../lib/site-paths";
import { SiteShell, StatusTag } from "./SiteShell";

export function PlacesPage() {
  return (
    <SiteShell currentPath="/places">
      <section className="page-hero places-hero">
        <div className="page-hero-copy">
          <StatusTag status="proposed">A staged Ballow Road precinct proposal</StatusTag>
          <p className="eyebrow">Places to gather, learn, make and screen</p>
          <h1>One street. Several horizons. No shortcuts.</h1>
          <p className="hero-lede">
            Start with participation and visible pilots. Explore 9 Ballow Road as
            a practical front desk, 10–12 as a sports-and-screen opportunity, and
            keep every land, lease and approval question in daylight.
          </p>
        </div>
        <div className="precinct-strip" aria-hidden="true">
          <div className="precinct-building building-nine">
            <span>9</span>
            <strong>READY<br />SET</strong>
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
          <strong>Important location boundary</strong>
          <p>
            The Quandamooka Festival and QUAMPI are governed by their own
            organisers and cultural authority. This proposal does not claim them.
            It asks how an adjacent Ballow Road network could complement existing
            cultural activity and create room for a separate film-festival,
            training and community-screen pathway.
          </p>
        </div>
      </section>

      <section className="section place-feature place-nine">
        <div className="place-number">09</div>
        <div className="place-copy">
          <StatusTag status="proposed">Possible first base</StatusTag>
          <p className="eyebrow">9 Ballow Road</p>
          <h2>A visible front desk for Ready S.E.T. participation.</h2>
          <p className="feature-lede">
            A practical hub for media and journalism training, AI literacy,
            editing, small workshops, equipment coordination, project meetings,
            local-business collaboration and cross-cultural work.
          </p>
          <div className="use-grid">
            {[
              "Media + journalism desk",
              "Film-club nights",
              "AI literacy sessions",
              "Editing + production",
              "Shared equipment register",
              "Business collaboration",
              "Youth pathways",
              "Community project room",
            ].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="place-condition">
          <p className="eyebrow">Launch now means</p>
          <ol>
            <li>Open the invitation and interest register.</li>
            <li>Form a temporary pilot circle.</li>
            <li>Run activity in available, permitted spaces.</li>
            <li>Assess a lease or premises only with real participants and advice.</li>
          </ol>
          <p>
            Ready S.E.T. Co-op does not yet exist as a formed operating entity.
            The structure should grow from participation, qualified advice and
            the work people actually choose to do.
          </p>
        </div>
      </section>

      <section className="section place-feature place-twelve">
        <div className="place-number">10–12</div>
        <div className="place-copy">
          <StatusTag status="proposed">Precinct opportunity</StatusTag>
          <p className="eyebrow">10–12 Ballow Road</p>
          <h2>Test a Sandy Sports and Screen Hub beside existing cultural energy.</h2>
          <p className="feature-lede">
            A flexible outdoor layer for sand sport, cinema, markets, music,
            broadcast practice, youth activity and community gathering, if land
            status, community priorities, cultural leadership, planning and
            operations align.
          </p>
          <div className="programme-reel">
            {[
              ["SAND", "Multi-use courts + playful events"],
              ["SCREEN", "Outdoor cinema + festival overflow concepts"],
              ["LIVE", "Music, panels + local broadcasting"],
              ["MARKET", "Food, makers + visitor orientation"],
              ["YOUTH", "Paid practice + visible pathways"],
            ].map(([title, text]) => (
              <article key={title}>
                <span>{title}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="place-condition condition-light">
          <p className="eyebrow">Complement, do not capture</p>
          <p>
            Ballow Road already carries major Quandamooka cultural activity
            through QUAMPI and the Quandamooka Festival. The 10–12 idea should
            strengthen the wider precinct without implying control of the
            Festival, QUAMPI, cultural programming or Traditional Owner
            authority.
          </p>
          <a
            className="text-link"
            href="https://auraofintelligence.github.io/ballow-road-sand-screen-hub/"
            target="_blank"
            rel="noreferrer"
          >
            Explore the existing Sand &amp; Screen concept ↗
          </a>
        </div>
      </section>

      <section className="section precinct-flow-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">A precinct, not a takeover</p>
            <h2>Let every place keep its own role and authority.</h2>
          </div>
          <p>
            Connections are invitations and practical relationships. A line on
            this diagram is not an endorsement, lease, partnership or planning
            approval.
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
            <p>Its own governance, authority and programme</p>
          </article>
          <div className="flow-line"><span>PUBLIC MOVEMENT</span></div>
          <article className="flow-place official">
            <span>OFFICIAL PLANNING</span>
            <strong>Gumpi terminal</strong>
            <p>Transport infrastructure with its own government process</p>
          </article>
        </div>
      </section>

      <section className="section horizon-section">
        <div className="horizon-label">
          <StatusTag status="horizon">Long-term concept only</StatusTag>
          <span>Move slowly here</span>
        </div>
        <div className="horizon-copy">
          <p className="eyebrow">The deeper transport layer</p>
          <h2>Could a future Gumpi park-and-ride tunnel reduce parking pressure and turn carefully tested spoil into useful material?</h2>
          <p>
            This question can sit in the story-world as a future civic and
            engineering exploration. It is not part of the current ferry-terminal
            upgrade, not a route, not a budget and not an approval claim.
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
            "Safety + emergency design",
            "Transparent public alternatives",
          ].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section closing-cta">
        <p className="eyebrow">The practical next move</p>
        <h2>Build the people network before building the precinct.</h2>
        <p>
          A working group, a story night, a screen pilot and a public record can
          happen before any property decision.
        </p>
        <div className="button-row">
          <a className="button button-primary" href={sitePath("/join")}>Join a first pilot</a>
          <a className="button button-ghost" href={sitePath("/sources")}>Check every boundary</a>
        </div>
      </section>
    </SiteShell>
  );
}
