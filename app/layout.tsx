import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Injection Tester — Test AI Prompts for Injection Vulnerabilities",
  description: "Analyze your AI prompts against known injection attack patterns. Get vulnerability scores and detailed security reports instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="21b99958-76e2-4c2e-8355-5586f77ce0f7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
