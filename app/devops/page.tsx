export default function DevOpsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <h1 className="text-4xl font-bold text-center mb-16">
        DevOps & Deployment
      </h1>

      <div className="max-w-4xl mx-auto space-y-12">

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">
            CI/CD Pipeline
          </h2>
          <p className="text-gray-300">
            Continuous integration and deployment through GitHub workflows.
            Code is version-controlled, automatically built, and deployed
            to production environments.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">
            Cloud Deployment
          </h2>
          <p className="text-gray-300">
            Portfolio hosted on Vercel with automatic deployment
            on push to main branch. Production-ready structure
            with environment configuration and scalable architecture.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">
            System Design Approach
          </h2>
          <p className="text-gray-300">
            Modular architecture, clear separation of concerns,
            governance enforcement layers, and deterministic
            execution models integrated with hybrid LLM reasoning.
          </p>
        </div>

      </div>
    </main>
  );
}
