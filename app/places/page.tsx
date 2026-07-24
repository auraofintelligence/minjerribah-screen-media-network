import type { Metadata } from "next";
import { PlacesPage } from "../../components/PlacesPage";

export const metadata: Metadata = {
  title: "Ballow Road",
  description:
    "A staged proposal for a Ready S.E.T. front desk at 9 Ballow Road, a sports-and-screen opportunity at 10–12, and carefully labelled future transport questions.",
};

export default function Page() {
  return <PlacesPage />;
}
