"use client";

import { useMemo, useState } from "react";
import { fundingItems } from "../data/site-content";

type FundingState = Record<string, { enabled: boolean; amount: number }>;

function currency(value: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(value);
}

const initialFundingState = Object.fromEntries(
  fundingItems.map((item) => [item.id, { enabled: true, amount: item.amount }]),
) as FundingState;

export function FundingModel() {
  const [items, setItems] = useState<FundingState>(initialFundingState);

  const total = useMemo(
    () =>
      fundingItems.reduce(
        (sum, item) => sum + (items[item.id]?.enabled ? items[item.id].amount : 0),
        0,
      ),
    [items],
  );

  const maxTotal = useMemo(
    () => Math.max(total, ...fundingItems.map((item) => items[item.id].amount), 1),
    [items, total],
  );

  const selectedCount = fundingItems.filter((item) => items[item.id]?.enabled).length;

  function updateAmount(id: string, value: number) {
    setItems((current) => ({
      ...current,
      [id]: {
        ...current[id],
        amount: Number.isFinite(value) ? Math.max(0, Math.round(value)) : 0,
      },
    }));
  }

  function toggle(id: string) {
    setItems((current) => ({
      ...current,
      [id]: { ...current[id], enabled: !current[id].enabled },
    }));
  }

  function reset() {
    setItems(initialFundingState);
  }

  return (
    <div className="funding-model">
      <div className="funding-summary">
        <div>
          <span>Unverified placeholder total</span>
          <strong>{currency(total)}</strong>
          <small>{selectedCount} of {fundingItems.length} placeholders selected</small>
        </div>
        <p>
          These figures were generated for the first website mock-up. They did
          not come from Luke&apos;s estimates, supplier quotes or a proper
          calculation. Change them or switch them off while a real budget is built.
        </p>
        <button type="button" onClick={reset}>Reset placeholders</button>
      </div>

      <div className="funding-table" role="group" aria-label="Editable funding estimates">
        {fundingItems.map((item, index) => {
          const state = items[item.id];
          const width = state.enabled ? (state.amount / maxTotal) * 100 : 0;
          return (
            <article className={state.enabled ? "funding-row" : "funding-row is-off"} key={item.id}>
              <label className="funding-toggle">
                <input
                  type="checkbox"
                  checked={state.enabled}
                  onChange={() => toggle(item.id)}
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </label>
              <div className="funding-detail">
                <div>
                  <span className="funding-stage">{item.stage}</span>
                  <h3>{item.label}</h3>
                </div>
                <p>{item.note}</p>
                <details className="funding-working">
                  <summary>Show how this figure was imagined</summary>
                  <p>{item.basis}</p>
                </details>
                <div className="funding-bar" aria-hidden="true">
                  <span style={{ width: `${width}%` }} />
                </div>
              </div>
              <label className="amount-input">
                <span>AUD</span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={state.amount}
                  disabled={!state.enabled}
                  onChange={(event) => updateAmount(item.id, Number(event.target.value))}
                  aria-label={`${item.label} unverified placeholder in Australian dollars`}
                />
              </label>
            </article>
          );
        })}
      </div>
    </div>
  );
}
