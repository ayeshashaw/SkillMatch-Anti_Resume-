import React from "react";
import { useParams } from "react-router-dom";
import { challengeComponents } from "./Challenge/index.jsx"; // path to the index.js

const ChallengeDetails = () => {
  const { id } = useParams();
  const challengeComponent = challengeComponents[id];

  if (!challengeComponent) {
    return (
      <div className="text-center mt-12">
        <h1 className="text-2xl font-bold">Challenge not found</h1>
        <p className="text-gray-600">Please check the URL or go back.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      {challengeComponent}
    </div>
  );
};

export default ChallengeDetails;
