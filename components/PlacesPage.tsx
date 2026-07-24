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
            screens and gatherings. These are separate sites several hundred
            metres apart along Ballow Road.
          </p>
        </div>
        <div className="precinct-strip" aria-hidden="true">
          <div className="precinct-building building-nine">
            <span>9</span>
            <strong>READY<br />S.E.T.<br />CO-OP</strong>
          </div>
          <div className="precinct-path">
            <span>SEPARATE SITES · SEVERAL HUNDRED METRES APART</span>
            <i /><i /><i /><i />
          </div>
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
          <h2>Could 10–12 Ballow Road become a permanent home for festivals, sand sport and outdoor screens?</h2>
          <p className="feature-lede">
            The idea is a lasting outdoor festival and community place for sand
            sport, cinema, markets, music, youth activities and gatherings. It
            could only go further if the land, community wishes, cultural
            leadership, festival organisers, planning rules and practical details
            all lined up.
          </p>
          <div className="programme-reel">
            {[
              ["SAND", "Multi-use courts + playful events"],
              ["FESTIVALS", "A permanent home for major community gatherings"],
              ["SCREEN", "Outdoor cinema + the Quandamooka Film Festival"],
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

      <section className="section land-story-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Why this land matters now</p>
            <h2>A once-in-a-generation chance to keep 10–12 Ballow Road working for community.</h2>
          </div>
          <p>
            This is a public call to whoever makes the next decision: please do
            not let a rare waterfront community place quietly become just
            another short-term private development.
          </p>
        </div>

        <div className="land-story-grid">
          <article>
            <span>WHAT THE PUBLIC RECORD SHOWS</span>
            <h3>The land was offered for sale by tender.</h3>
            <p>
              The sales brochure opened a competitive tender on 12 January 2026
              and closed it on 27 March. At that time it named the State of
              Queensland as the registered owner, described the land as a former
              mining-lease site and promoted possible tourism or visitor use,
              subject to approval.
            </p>
          </article>
          <article>
            <span>WHAT THE COMMUNITY SAID</span>
            <h3>People asked for the sale to stop and the decisions to be explained.</h3>
            <p>
              In December 2025, more than 80 Quandamooka Elders, community
              members and supporters gathered against the proposed sale.
              Indigenous reporting recorded calls for transparency, consent and
              a future shaped with the community.
            </p>
          </article>
          <article>
            <span>WHAT IS STILL NOT CLEAR</span>
            <h3>The listing is down, but the outcome is not public.</h3>
            <p>
              The public property listing now says off market. The sources
              checked on 24 July 2026 do not clearly say whether a tender was
              accepted, whether a sale settled or what happens next. The State,
              agent, Council and local Chamber of Commerce may be able to put
              the facts on the table.
            </p>
          </article>
        </div>

        <div className="generations-call">
          <div>
            <p className="eyebrow">The community case</p>
            <h2>Choose a legacy, not just a land deal.</h2>
          </div>
          <div>
            <p>
              QUAMPI and the Quandamooka Festival already show Ballow Road as a
              powerful cultural gathering place. The festival is officially
              listed at neighbouring 14–18 Ballow Road. Local experience says
              the wider 10–12 ground has also supported festival activity, and
              that footprint should be confirmed with the organisers.
            </p>
            <p>
              Imagine this land held for generations of culture, youth, health,
              sport, outdoor cinema, training, local enterprise and community
              wellbeing. Any future should be led through honest discussion with
              Quandamooka people, the wider island community and whoever now
              holds the legal decision.
            </p>
            <p>
              Accommodation or another profit-first use may make money for one
              owner. A community place could keep creating value for thousands
              of people, year after year.
            </p>
          </div>
        </div>

        <div className="source-button-row">
          <a
            className="button button-dark"
            href="https://brochures.ljhooker.com.au/brochure/commercial-dunwich-qld-land-development-10-12-ballow-road-btvyf2s.pdf?r=6795465"
            target="_blank"
            rel="noreferrer"
          >
            Read the 2026 tender brochure ↗
          </a>
          <a
            className="button button-ghost"
            href="https://nit.com.au/24-12-2025/21931/quandamooka-community-seek-answers-on-goompi-tourism-land-sale"
            target="_blank"
            rel="noreferrer"
          >
            Read the Indigenous community report ↗
          </a>
        </div>
      </section>

      <section className="section precinct-flow-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Separate sites along Ballow Road</p>
            <h2>Every place keeps its own role and makes its own decisions.</h2>
          </div>
          <p>
            The diagram connects separate roles across the wider Ballow Road
            area. Number 9 and 10–12 are not adjoining blocks. They are several
            hundred metres apart.
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
            <p>Festivals · sport · screens · markets · gatherings</p>
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
          <p className="eyebrow">The first layer of a much bigger underground vision</p>
          <h2>The Gumpi proposal is a tunnel loop linking both ferry terminals and several park-and-ride sites.</h2>
          <p>
            The loop runs around the town, with one possible parking lot opposite
            10–12 Ballow Road and others around the route. Direct tunnels between
            island towns are another proposed layer. The eventual subterranean
            city vision lives in Grain by Grain and Civilisation of Sand.
          </p>
        </div>
        <div className="tunnel-diagram" aria-label="Plain-language summary of the future tunnel question">
          <article>
            <span>1 · THE PROBLEM</span>
            <strong>Traffic from both ferry terminals puts parking pressure across Gumpi.</strong>
          </article>
          <article>
            <span>2 · THE IDEA TO TEST</span>
            <strong>Could an underground loop connect both terminals and move people around town?</strong>
          </article>
          <article>
            <span>3 · PARK-AND-RIDE NETWORK</span>
            <strong>One possible parking lot opposite 10–12 Ballow Road, with others around the loop.</strong>
          </article>
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
        <div className="horizon-bridges">
          <a href="https://auraofintelligence.github.io/grain-by-grain/" target="_blank" rel="noreferrer">
            <span>LONGER VIEW</span>
            <strong>Grain by Grain</strong>
            <p>Explore the staged path from material reuse and local infrastructure towards larger underground systems.</p>
          </a>
          <a href="https://auraofintelligence.github.io/civilisation-of-sand/" target="_blank" rel="noreferrer">
            <span>CINEMATIC UNIVERSE + FUTURE CITY</span>
            <strong>Civilisation of Sand</strong>
            <p>Explore the shared story architecture for films, games, music, events, team-building, skills, jobs and the wider subterranean-city vision.</p>
          </a>
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
