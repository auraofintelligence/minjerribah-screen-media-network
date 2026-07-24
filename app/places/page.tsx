import type { Metadata } from "next";
import { PlacesPage } from "../../components/PlacesPage";

export const metadata: Metadata = {
  title: "Ballow Road",
  description:
    "Community ideas for a possible Ready S.E.T. base at 9 Ballow Road, sport and outdoor screens at 10–12, and a future transport question.",
};

export default function Page() {
  return <PlacesPage />;
}
