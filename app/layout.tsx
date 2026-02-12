import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Agentic AI Systems Portfolio",
  description: "Agentic AI Systems Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* Navigation Bar */}
        <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
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
