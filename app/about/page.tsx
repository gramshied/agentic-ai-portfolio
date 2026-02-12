export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-12 text-center">
          About
        </h1>

        <div className="space-y-8 text-gray-300 text-lg">

          <p>
            I am a Physics postgraduate transitioning into Applied Machine Learning
            and Agentic AI Systems Engineering. My work focuses on designing
            structured, governed, and autonomous AI architectures rather than
            isolated model experiments.
          </p>

          <p>
            Through a six-level progression of Agentic AI systems, I have built
            architectures ranging from deterministic decision pipelines to
            hybrid LLM-governed autonomous systems with validation and control
            layers.
          </p>

          <p>
            My engineering approach emphasizes:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Deterministic governance over generative reasoning</li>
            <li>Modular agent architecture</li>
            <li>Control loop design</li>
            <li>Multi-agent negotiation mechanisms</li>
            <li>Hybrid symbolic–LLM integration</li>
            <li>Production-oriented deployment practices</li>
          </ul>

          <p>
            I am currently focused on developing production-ready AI systems
            that combine structured control mechanisms with intelligent reasoning layers.
          </p>

        </div>
      </div>
    </main>
  );
}
