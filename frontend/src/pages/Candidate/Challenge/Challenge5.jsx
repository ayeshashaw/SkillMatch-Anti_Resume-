import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const challenge = {
  id: "5",
  title: "Financial Analysis Challenge",
  description:
    "Analyze company financial statements and create a valuation model with recommendations for potential investors.",
  company: "FinGroup",
  duration: "2-3 hours",
  difficulty: "Hard",
  skills: ["Financial Analysis", "Valuation", "Excel"],
  category: "Finance",
  tools: ["Excel or Google Sheets", "Company financial statements", "Optional: Discounted Cash Flow templates", "Presentation or report format"],
  evaluation: [
    "Accuracy of financial analysis",
    "Soundness of valuation approach",
    "Clarity in investor recommendations",
    "Presentation quality (report or deck)",
    "Use of relevant financial metrics"
  ],
  instructions: `1. Choose a public or fictional company and obtain its key financials.
2. Perform a basic financial analysis (e.g., income statement trends, ratios).
3. Build a simple valuation model (e.g., DCF, comparables).
4. Summarize findings and investor recommendations in a report or slide deck.
5. Submit a link to your spreadsheet and final presentation/report.`,
  tips: [
    "Focus on clarity and logic over complexity in your model.",
    "Use charts to highlight key metrics and trends.",
    "Explain assumptions used in your valuation clearly.",
    "Include both risks and opportunities in your investor outlook.",
    "Structure your final presentation to tell a financial story."
  ]
};

const Challenge5 = () => {
  const [submissionLink, setSubmissionLink] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="flex-grow px-6 py-12 w-full max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">💰 {challenge.title}</h2>
        <p className="text-xl font-semibold">
          Challenge Name: {challenge.title}
        </p>

        <div className="space-y-1">
          <p>
            <strong>⏳ Duration:</strong> {challenge.duration}
          </p>
          <p>
            <strong>🏢 Platform:</strong> {challenge.company}
          </p>
          <p>
            <strong>📁 Category:</strong> {challenge.category}
          </p>
        </div>

        <section>
          <h3 className="text-lg font-semibold mb-2">📝 Challenge Brief:</h3>
          <p className="whitespace-pre-line">{challenge.description}</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">🧪 The Task:</h3>
          <p className="whitespace-pre-line">
            Perform a full-cycle financial evaluation of a company and deliver an investor-ready summary. Your work should:
            - Analyze key financial data.
            - Include a simple but thoughtful valuation.
            - Lead to actionable investor recommendations.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">🛠 Tools Provided:</h3>
          <ul className="list-disc pl-6">
            {challenge.tools.map((tool, i) => (
              <li key={i}>{tool}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">📊 Evaluation Criteria:</h3>
          <ul className="list-disc pl-6">
            {challenge.evaluation.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">📌 Instructions:</h3>
          <p className="whitespace-pre-line">{challenge.instructions}</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">💡 Pro Tips:</h3>
          <ul className="list-disc pl-6 text-sm text-gray-700">
            {challenge.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <label htmlFor="submission" className="block font-medium mb-2">
            🔗 Submission Link:
          </label>
          <input
            id="submission"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
            placeholder="Paste your project link here..."
            value={submissionLink}
            onChange={(e) => setSubmissionLink(e.target.value)}
          />
          <Button className="mt-4">Submit Challenge</Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Challenge5;
