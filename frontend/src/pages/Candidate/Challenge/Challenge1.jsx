import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const challenge = {
  id:1,
  title: "Frontend Development Challenge",
  description: "Build a responsive landing page using React and Tailwind CSS with specific requirements for layout and functionality.",
  company: "TechCorp",
  duration: "2-3 hours",
  difficulty: "Medium",
  skills: ["React", "Tailwind CSS", "Responsive Design"],
  category: "Development",
  tools: ["React", "Tailwind CSS", "Vite or Create React App", "GitHub for submission"],
  evaluation: [
    "Responsiveness across devices",
    "Code quality and structure",
    "Use of reusable components",
    "Accessibility practices",
    "Visual design and creativity"
  ],
  instructions: `1. Fork the provided GitHub repository (or create your own).
2. Build a landing page with at least three sections: Hero, Features, and Footer.
3. Use only React and Tailwind CSS for styling.
4. Make sure the layout works on mobile, tablet, and desktop screens.
5. Push your final code to GitHub and share the link.`,
  tips: [
    "Start with a mobile-first approach.",
    "Use semantic HTML tags for accessibility.",
    "Break the UI into small reusable components.",
    "Test responsiveness using browser dev tools.",
    "Keep your code clean and well-commented."
  ]
};

const Challenge1 = () => {
  const [submissionLink, setSubmissionLink] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="flex-grow px-6 py-12 w-full max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">🎯 {challenge.title}</h2>
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
          <p className="whitespace-pre-line">Build a responsive page with at least 3 sections (e.g., Hero, Features, Footer).
          - Use React components effectively to structure the UI.
          - Apply Tailwind CSS for styling and responsiveness.</p>
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

export default Challenge1;
