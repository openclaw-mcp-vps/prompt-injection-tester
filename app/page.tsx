export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Test AI Prompts for<br />
          <span className="text-[#58a6ff]">Injection Vulnerabilities</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Paste your prompt, instantly get vulnerability scores and a breakdown of known injection attack vectors. Built for AI product developers and security teams.
        </p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left mb-6">
          <div className="mb-3">
            <label className="block text-xs text-[#8b949e] uppercase tracking-widest mb-2">Your Prompt</label>
            <textarea
              disabled
              placeholder="Paste your AI prompt here to analyze for injection risks..."
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-[#c9d1d9] placeholder-[#484f58] text-sm resize-none h-28 focus:outline-none cursor-not-allowed"
            />
          </div>
          <a
            href={checkoutUrl}
            className="block w-full text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Unlock Full Analysis — $15/mo
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            ["10+", "Attack Patterns"],
            ["Instant", "Scoring"],
            ["Detailed", "Reports"]
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg py-4">
              <div className="text-[#58a6ff] font-bold text-lg">{val}</div>
              <div className="text-[#8b949e] text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited prompt analyses",
              "10+ injection pattern checks",
              "Vulnerability score per prompt",
              "Detailed attack vector reports",
              "Priority email support"
            ].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "What is prompt injection?",
              "Prompt injection is an attack where malicious input manipulates an AI model into ignoring its instructions or leaking sensitive data. It's one of the top risks in AI-powered applications."
            ],
            [
              "How does the scoring work?",
              "We match your prompt against a curated database of known injection patterns and heuristics, then assign a risk score from 0–100 with a breakdown of each detected vector."
            ],
            [
              "Who is this for?",
              "AI product developers, red teams, and security engineers who want to quickly audit prompts before deploying them in production systems."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2 text-sm">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} Prompt Injection Tester. All rights reserved.
      </footer>
    </main>
  );
}
