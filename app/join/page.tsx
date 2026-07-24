import type { Metadata } from "next";
import { JoinPage } from "../../components/JoinPage";

export const metadata: Metadata = {
  title: "Join the Build",
  description:
    "An open invitation for cultures, artists, businesses, clubs, learners, reviewers, hosts and practical dreamers to offer one real piece.",
};

export default function Page() {
  return <JoinPage />;
}
