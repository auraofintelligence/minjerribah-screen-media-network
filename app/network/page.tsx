import type { Metadata } from "next";
import { NetworkPage } from "../../components/NetworkPage";

export const metadata: Metadata = {
  title: "Media Network",
  description:
    "An idea for year-round local media, journalism, digital community noticeboards and checked emergency updates on Minjerribah.",
};

export default function Page() {
  return <NetworkPage />;
}
