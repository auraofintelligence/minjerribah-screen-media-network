import type { Metadata } from "next";
import { SourcesPage } from "../../components/SourcesPage";

export const metadata: Metadata = {
  title: "Receipts",
  description:
    "Official links, public planning pages and future questions behind the Minjerribah Screen and Media Network community pitch.",
};

export default function Page() {
  return <SourcesPage />;
}
