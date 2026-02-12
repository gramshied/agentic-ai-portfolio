import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-32">
        <h1 className="text-5xl font-bold mb-6">
          Agentic AI Systems Engineer
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mb-8">
          Designing Governed, Autonomous & Hybrid AI Architectures.
          A structured progression from deterministic agents to LLM-integrated systems.
        </p>

        <div className="flex gap-6">
          <Link
            href="/projects"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            View Systems Series
          </Link>

          <Link
            href="/devops"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            DevOps & Deployment
          </Link>
        </div>
      </section>

      {/* SERIES PREVIEW */}
      <section className="py-20 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">
          Agentic AI Systems Series
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            "Level 1 — Decision Agents",
            "Level 2 — Tool-Governed Agents",
            "Level 3 — Memory-Enabled Agents",
            "Level 4 — Negotiation & Arbitration",
            "Level 5 — Autonomous Planning",
            "Level 6 — Hybrid LLM Governance"
          ].map((level, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition"
            >
              <h3 className="text-lg font-semibold">{level}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-gray-300">
          <span className="border px-4 py-2 rounded-lg">Python</span>
          <span className="border px-4 py-2 rounded-lg">Next.js</span>
          <span className="border px-4 py-2 rounded-lg">TypeScript</span>
          <span className="border px-4 py-2 rounded-lg">TailwindCSS</span>
          <span className="border px-4 py-2 rounded-lg">Agentic AI</span>
          <span className="border px-4 py-2 rounded-lg">LLM Integration</span>
          <span className="border px-4 py-2 rounded-lg">AI Governance</span>
          <span className="border px-4 py-2 rounded-lg">DevOps Foundations</span>
        </div>
      </section>

    </main>
  );
}
