import type { Metadata } from "next";
import { FundingPage } from "../../components/FundingPage";

export const metadata: Metadata = {
  title: "Fund the Layers",
  description:
    "Rough example costs for film, training, local news, public screens, mobile cinema and year-round community media.",
};

export default function Page() {
  return <FundingPage />;
}
