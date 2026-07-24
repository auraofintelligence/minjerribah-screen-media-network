import type { Metadata } from "next";
import { NetworkPage } from "../../components/NetworkPage";

export const metadata: Metadata = {
  title: "Media Network",
  description:
    "A year-round local media, journalism, noticeboard and disaster-information relay proposal for Minjerribah.",
};

export default function Page() {
  return <NetworkPage />;
}
