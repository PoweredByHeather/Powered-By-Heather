export const metadata = {
  title: "Powered By Heather",
  description: "The hub for Heather Wilson’s professional work — strategy, execution, and communication.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
