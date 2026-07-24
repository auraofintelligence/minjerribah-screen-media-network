import { sitePath } from "../lib/site-paths";
import { FundingModel } from "./FundingModel";
import { SiteShell, StatusTag } from "./SiteShell";

export function FundingPage() {
  return (
    <SiteShell currentPath="/funding">
      <section className="page-hero funding-hero">
        <div className="page-hero-copy">
          <StatusTag status="proposed">Rough example costs only</StatusTag>
          <p className="eyebrow">What might the ideas cost?</p>
          <h1>Start small and show exactly where the money would go.</h1>
          <p className="hero-lede">
            If the community wants to take anything further, it could start with
            a small event, training and shared gear. Bigger screens, paid roles
            and permanent facilities would come much later.
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
            <h2>What could different amounts of money pay for?</h2>
          </div>
          <p>
            Move the numbers around to explore the idea. These are not quotes or
            a real budget. Proper costs would need advice on tax, insurance,
            freight, wages, power, engineering, venues, access and backup money.
          </p>
        </div>
        <FundingModel />
      </section>

      <section className="section funding-stages-section">
        <div className="section-heading">
          <p className="eyebrow">If fundraising ever begins</p>
          <h2>Every ask should clearly say what people would get for the money.</h2>
        </div>
        <div className="threshold-track">
          {[
            ["SEED", "$35K", "First programme + training"],
            ["PILOT", "$80K", "Stories + equipment + screens"],
            ["LAUNCH", "$175K", "Mobile cinema + public showcase"],
            ["NETWORK", "$350K", "More locations + possible paid roles"],
            ["YEAR-ROUND", "$750K+", "Year-round work + permanent facilities"],
          ].map(([stage, amount, outcome]) => (
            <article key={stage}>
              <span>{stage}</span>
              <strong>{amount}</strong>
              <p>{outcome}</p>
            </article>
          ))}
        </div>
        <p className="section-note">
          These figures are examples on a planning page. No organisation has
          adopted them and nobody is asking for this money yet.
        </p>
      </section>

      <section className="section fundraising-principles">
        <div className="principles-copy">
          <p className="eyebrow">Joyful responsible abundance</p>
          <h2>Money should help local people take part and leave something useful behind.</h2>
        </div>
        <div className="principles-grid">
          {[
            ["No ghost partners", "Name supporters only after they approve the exact public wording."],
            ["No mystery bucket", "Say what every dollar is for, who is looking after it and when the community gets an update."],
            ["Pay people when possible", "If people are doing real work, aim to pay them fairly."],
            ["Money cannot buy permission", "Funding does not buy cultural permission, identity or support."],
            ["Share the receipts", "Publish plain-language updates on money received, spent, held and changed."],
            ["Buy things people can reuse", "Prefer gear, skills and spaces that can help more than one event."],
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
            Do not take money until there is a proper organisation to receive it
            and clear rules for its use, refunds and public reporting.
          </p>
        </div>
        <div className="support-grid">
          {[
            ["HOST", "Discuss hosting a public screen or workshop."],
            ["TEACH", "Share a practical media, business or technical skill."],
            ["LEND", "Offer equipment with clear care and return rules."],
            ["REVIEW", "Help check facts, risks or whether everyone can take part."],
            ["SPONSOR", "Discuss supporting one clearly agreed result."],
            ["BUILD", "Help the community work out whether there should be a next step."],
          ].map(([title, text]) => (
            <article key={title}><span>{title}</span><p>{text}</p></article>
          ))}
        </div>
        <a className="button button-primary" href={sitePath("/join")}>Offer one useful piece</a>
      </section>
    </SiteShell>
  );
}
