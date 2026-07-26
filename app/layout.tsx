import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dyann | Software Developer",
  description: "Modern software developer portfolio focused on web systems, payroll applications, APIs, and ERP integrations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
