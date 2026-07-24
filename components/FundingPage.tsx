import { sitePath } from "../lib/site-paths";
import { FundingModel } from "./FundingModel";
import { SiteShell, StatusTag } from "./SiteShell";

export function FundingPage() {
  return (
    <SiteShell currentPath="/funding">
      <section className="page-hero funding-hero">
        <div className="page-hero-copy">
          <StatusTag status="proposed">Editable planning estimates</StatusTag>
          <p className="eyebrow">Fund the outcomes in stages</p>
          <h1>Turn a big vision into visible, fundable layers.</h1>
          <p className="hero-lede">
            Start with programme, training and shared gear. Add screens, broadcast
            capacity, resilient kiosks, paid pathways and permanent
            infrastructure only when the evidence and partners are ready.
          </p>
        </div>
        <div className="funding-orbit" aria-hidden="true">
          <div className="funding-disc disc-one"><span>MAKE</span></div>
          <div className="funding-disc disc-two"><span>SCREEN</span></div>
          <div className="funding-disc disc-three"><span>SUSTAIN</span></div>
          <strong>$?</strong>
        </div>
      </section>

      <section className="section model-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Move the numbers</p>
            <h2>What could each funding layer unlock?</h2>
          </div>
          <p>
            The model is deliberately editable. Real budgets need quotes, tax
            treatment, insurance, freight, labour, power, engineering, venue,
            accessibility, contingency and qualified review.
          </p>
        </div>
        <FundingModel />
      </section>

      <section className="section funding-stages-section">
        <div className="section-heading">
          <p className="eyebrow">A staged campaign spine</p>
          <h2>Every threshold should produce something people can see and assess.</h2>
        </div>
        <div className="threshold-track">
          {[
            ["SEED", "$35K", "First programme + training"],
            ["PILOT", "$80K", "Stories + equipment + screens"],
            ["LAUNCH", "$175K", "Mobile cinema + public showcase"],
            ["NETWORK", "$350K", "More locations + paid pathways"],
            ["YEAR-ROUND", "$750K+", "Operations + permanent layers"],
          ].map(([stage, amount, outcome]) => (
            <article key={stage}>
              <span>{stage}</span>
              <strong>{amount}</strong>
              <p>{outcome}</p>
            </article>
          ))}
        </div>
        <p className="section-note">
          Thresholds are examples for planning the narrative of a future campaign.
          They are not fundraising targets already adopted by a legal entity.
        </p>
      </section>

      <section className="section fundraising-principles">
        <div className="principles-copy">
          <p className="eyebrow">Joyful responsible abundance</p>
          <h2>Money should make participation easier, evidence clearer and local capability stronger.</h2>
        </div>
        <div className="principles-grid">
          {[
            ["No ghost partners", "Name supporters only after they approve the exact public wording."],
            ["No mystery bucket", "Attach every ask to a visible output, responsible person and review point."],
            ["Pay practice when possible", "Design trainee and contributor pathways that recognise real work."],
            ["Keep culture in authority", "Funding does not purchase cultural permission, identity or endorsement."],
            ["Share the receipts", "Publish plain-language updates on money received, spent, held and changed."],
            ["Build reusable capacity", "Prefer gear, skills, systems and spaces that can serve more than one event."],
          ].map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section support-lanes">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Support is bigger than cash</p>
            <h2>Offer a screen, a skill, a shift, a venue, a review or a piece of gear.</h2>
          </div>
          <p>
            A payment pathway should only open after the receiving entity,
            purpose, terms, refund handling and public reporting are clear.
          </p>
        </div>
        <div className="support-grid">
          {[
            ["HOST", "Pilot a public screen or workshop."],
            ["TEACH", "Share a practical media, business or technical skill."],
            ["LEND", "Offer equipment with clear care and return rules."],
            ["REVIEW", "Help verify public facts, risks or accessibility."],
            ["SPONSOR", "Explore a defined, approved outcome with no implied cultural authority."],
            ["BUILD", "Join the temporary working circle and shape the next step."],
          ].map(([title, text]) => (
            <article key={title}><span>{title}</span><p>{text}</p></article>
          ))}
        </div>
        <a className="button button-primary" href={sitePath("/join")}>Offer one useful piece</a>
      </section>
    </SiteShell>
  );
}
