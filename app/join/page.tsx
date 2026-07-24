import type { Metadata } from "next";
import { JoinPage } from "../../components/JoinPage";

export const metadata: Metadata = {
  title: "Have Your Say",
  description:
    "A place for local people, cultures, artists, businesses, clubs and community groups to question, improve or support the joined-up pitch.",
};

export default function Page() {
  return <JoinPage />;
}
