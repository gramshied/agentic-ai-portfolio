import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Agentic AI Systems Engineer | Hybrid & Autonomous AI Architectures",
  description:
    "Portfolio of a Physics postgraduate building governed, autonomous and hybrid LLM-integrated Agentic AI systems with DevOps deployment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-black via-gray-950 to-black text-white">
        {/* Navigation Bar */}
        <nav className="sticky top-0 backdrop-blur-md bg-black/60 border-b border-gray-800 px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Agentic AI
          </Link>

          <div className="flex gap-8 text-gray-300">
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
            <Link href="/projects" className="hover:text-white transition">
              Systems
            </Link>
            <Link href="/devops" className="hover:text-white transition">
              DevOps
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}
