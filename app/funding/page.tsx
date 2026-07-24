import type { Metadata } from "next";
import { FundingPage } from "../../components/FundingPage";

export const metadata: Metadata = {
  title: "Fund the Layers",
  description:
    "An editable planning model for staged film, training, journalism, public-screen, mobile-cinema and year-round media capacity.",
};

export default function Page() {
  return <FundingPage />;
}
