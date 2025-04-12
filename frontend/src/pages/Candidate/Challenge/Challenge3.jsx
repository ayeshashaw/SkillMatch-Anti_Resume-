import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const challenge = {
  id: "3",
  title: "UX Research Challenge",
  description: "Design and conduct a small usability test for a mobile application feature and present your findings.",
  company: "DesignHub",
  duration: "2-3 hours",
  difficulty: "Medium",
  skills: ["UX Research", "Usability Testing", "Presentation"],
  category: "Design",
  tools: ["Figma or any prototyping tool", "Notion/Google Docs for notes", "Presentation software (e.g., Google Slides)", "Optional: video recording tool"],
  evaluation: [
    "Clarity of research objectives",
    "Quality of usability test design",
    "Insightfulness of findings",
    "Presentation and structure of the report",
    "Actionable recommendations based on insights"
  ],
  instructions: `1. Select a mobile feature (real or fictional) to test.
2. Recruit 2-3 users for a short usability session (can be informal).
3. Observe and document user interactions and challenges.
4. Summarize key findings, patterns, and usability issues.
5. Present your results in a short report or slide deck.`,
  tips: [
    "Keep the usability session focused—15–20 mins is plenty.",
    "Ask open-ended questions, avoid leading the user.",
    "Look for patterns rather than isolated comments.",
    "Clearly link your observations to recommendations.",
    "Use visuals (screenshots, quotes, charts) to support insights."
  ]
};

const Challenge3 = () => {
  const [submissionLink, setSubmissionLink] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="flex-grow px-6 py-12 w-full max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">🔍 {challenge.title}</h2>
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
            Conduct a brief usability test for a mobile feature and deliver a structured summary of your research. Be sure to:
            - Define clear objectives.
            - Observe real user interaction.
            - Summarize key pain points and behaviors.
            - Offer actionable UX recommendations.
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

export default Challenge3;
