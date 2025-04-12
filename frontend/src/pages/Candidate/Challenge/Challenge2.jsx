import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const challenge = {
  id: "2",
  title: "Marketing Analytics Challenge",
  description: "Analyze a dataset of marketing campaign results and create actionable recommendations to improve performance.",
  company: "GrowthLabs",
  duration: "1-2 hours",
  difficulty: "Easy",
  skills: ["Data Analysis", "Marketing", "Excel"],
  category: "Marketing",
  tools: ["Excel or Google Sheets", "Marketing dataset", "Charts/Graphs", "Optional: Python or R for deeper insights"],
  evaluation: [
    "Clarity and insightfulness of analysis",
    "Use of relevant charts/graphs",
    "Actionable recommendations",
    "Presentation/structure of findings"
  ],
  instructions: `1. Download the provided dataset.
2. Analyze key performance indicators (e.g., CTR, conversion rate, ROI).
3. Identify trends, anomalies, or opportunities for optimization.
4. Create a summary report or slide deck with insights and recommendations.
5. Submit your analysis via a shared link (e.g., Google Drive, Dropbox, etc.).`,
  tips: [
    "Focus on clarity over complexity.",
    "Use visuals (charts, graphs) to support your findings.",
    "Think like a marketer—tie data insights to actions.",
    "Be concise but thorough in your explanations.",
    "Label everything clearly (axis, titles, etc.)."
  ]
};

const Challenge2 = () => {
  const [submissionLink, setSubmissionLink] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="flex-grow px-6 py-12 w-full max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">📈 {challenge.title}</h2>
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
          <p className="whitespace-pre-line">Analyze the dataset and provide a clear summary of insights and performance metrics. Make sure to include:
          - Visuals to support your analysis.
          - Recommendations that could help improve future campaigns.
          - A well-organized summary or presentation deck.</p>
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

export default Challenge2;
