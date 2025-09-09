// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Heather M. Wilson | Complex Projects, Clear Outcomes",
  description:
    "Strategy, partnerships, operations, and communications — powered by Heather.",
  openGraph: {
    title: "Heather M. Wilson | Complex Projects, Clear Outcomes",
    description:
      "Strategy, partnerships, operations, and communications — powered by Heather.",
    url: "https://www.poweredbyheather.com",
    siteName: "Powered by Heather",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
