import { FundingPage } from "./FundingPage";
import { HomePage } from "./HomePage";
import { JoinPage } from "./JoinPage";
import { NetworkPage } from "./NetworkPage";
import { PlacesPage } from "./PlacesPage";
import { SourcesPage } from "./SourcesPage";

export function StaticSiteApp({ path }: { path: string }) {
  switch (path.replace(/\/+$/, "") || "/") {
    case "/network":
      return <NetworkPage />;
    case "/places":
      return <PlacesPage />;
    case "/funding":
      return <FundingPage />;
    case "/join":
      return <JoinPage />;
    case "/sources":
      return <SourcesPage />;
    default:
      return <HomePage />;
  }
}
