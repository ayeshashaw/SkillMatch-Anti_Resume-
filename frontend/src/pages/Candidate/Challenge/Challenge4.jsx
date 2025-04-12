import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const challenge = {
  id: "4",
  title: "Backend API Challenge",
  description: "Create a RESTful API with Node.js that handles user authentication and basic CRUD operations for a resource.",
  company: "ServerTech",
  duration: "3-4 hours",
  difficulty: "Hard",
  skills: ["Node.js", "REST APIs", "Authentication"],
  category: "Development",
  tools: ["Node.js", "Express.js", "Postman", "MongoDB or any database", "Optional: JWT for auth"],
  evaluation: [
    "Correct implementation of RESTful routes",
    "Secure and functional authentication",
    "Proper error handling and validation",
    "Code readability and structure",
    "API documentation (e.g., Postman collection or README)"
  ],
  instructions: `1. Create a Node.js API with Express that includes authentication (signup/login).
2. Build CRUD routes for a resource (e.g., posts, tasks, notes).
3. Use a database (MongoDB, PostgreSQL, etc.) to persist data.
4. Secure routes using JWT or session-based authentication.
5. Document your API (via Postman or a README file).
6. Submit a GitHub repo link or live backend URL if hosted.`,
  tips: [
    "Structure your code using a modular approach (routes, controllers, services).",
    "Use environment variables for sensitive data.",
    "Test routes thoroughly with tools like Postman.",
    "Make sure to handle errors and edge cases properly.",
    "Add comments to clarify logic where needed."
  ]
};

const Challenge4 = () => {
  const [submissionLink, setSubmissionLink] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="flex-grow px-6 py-12 w-full max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">🛠️ {challenge.title}</h2>
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
            Build a secure and functional RESTful API using Node.js and Express. Be sure to:
            - Include user authentication (JWT or session-based).
            - Implement full CRUD operations.
            - Persist data with a database.
            - Document your API for others to use and test.
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

export default Challenge4;
