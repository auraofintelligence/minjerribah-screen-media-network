import type { Metadata } from "next";
import { SourcesPage } from "../../components/SourcesPage";

export const metadata: Metadata = {
  title: "Receipts",
  description:
    "Official links, active public prototypes, proposal boundaries and long-horizon questions behind the Minjerribah Screen and Media Network.",
};

export default function Page() {
  return <SourcesPage />;
}
