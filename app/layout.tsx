import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Minjerribah Screen & Media Network";
const description =
  "A community pitch bringing local stories, skills, public screens, useful information and possible shared places together in one clear picture.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "auraofintelligence.github.io";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    applicationName: title,
    icons: {
      icon: "/favicon.svg",
    },
    keywords: [
      "Minjerribah",
      "Quandamooka Film Festival",
      "hyperlocal media",
      "community journalism",
      "digital noticeboards",
      "Ready S.E.T. Co-op",
      "Ballow Road",
    ],
    openGraph: {
      type: "website",
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
