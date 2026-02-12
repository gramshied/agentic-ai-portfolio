import Link from "next/link";

export default function ProjectsPage() {
  const systems = [
    {
      level: "Level 1",
      title: "Deterministic Decision Agents",
      description:
        "Structured rule-based agent orchestration for customer churn decisions.",
      repo: "https://github.com/gramshied/applied-ml-churn-decision-system.git",
    },
    {
      level: "Level 2",
      title: "Tool-Governed Agentic System",
      description:
        "Tool-using agents with finance constraints and structured governance enforcement.",
      repo: "https://github.com/gramshied/agentic-ai-tool-using-decision-system.git",
    },
    {
      level: "Level 3",
      title: "Memory-Enabled Adaptive Agents",
      description:
        "Episodic memory integration with feedback-driven strategy adaptation.",
      repo: "https://github.com/gramshied/agentic-ai-memory-enabled-system.git",
    },
    {
      level: "Level 4",
      title: "Multi-Agent Negotiation & Arbitration",
      description:
        "Weighted utility-based decision arbitration with veto governance logic.",
      repo: "https://github.com/gramshied/agentic-ai-negotiation-system.git",
    },
    {
      level: "Level 5",
      title: "Autonomous Planning & Re-Planning",
      description:
        "Goal-driven multi-step planning with bounded control loop and parallel execution.",
      repo: "https://github.com/gramshied/agentic-ai-autonomous-planner.git",
    },
    {
      level: "Level 6",
      title: "Hybrid LLM-Governed Architecture",
      description:
        "Structured LLM integration with strict JSON validation and governance control layers.",
      repo: "https://github.com/gramshied/agentic-ai-hybrid-llm-system.git",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <h1 className="text-4xl font-bold text-center mb-16">
        Agentic AI Systems Series
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {systems.map((system, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition"
          >
            <p className="text-sm text-gray-400 mb-2">{system.level}</p>
            <h2 className="text-xl font-semibold mb-4">{system.title}</h2>
            <p className="text-gray-300 mb-6">{system.description}</p>

            <a
              href={system.repo}
              target="_blank"
              className="inline-block bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              View Repository
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
