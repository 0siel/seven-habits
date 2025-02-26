import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Renders a fishbone-style chart for all causes and their percentages.
 * 
 * @param {string} problemName   - The name of the problem
 * @param {Object[]} causes      - Array of objects [{ name, score }, ...]
 * @param {Function} prevStep    - Handler to go back to Step 3
 */
export default function CauseDiagram({ problemName, causes, prevStep }) {

  const navigate = useNavigate();

  if (!causes || causes.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">No Causes Available</h2>
        <button className="bg-gray-500 text-white px-4 py-2" onClick={prevStep}>
          Back
        </button>
      </div>
    );
  }

  // 1) Calculate total and each cause's percentage
  const totalScore = causes.reduce((sum, c) => sum + c.score, 0);
  const causeData = causes.map((c) => ({
    ...c,
    percentage: ((c.score / totalScore) * 100).toFixed(1), // e.g. "25.0"
  }));

  // 2) We’ll split them roughly in half for top/bottom fishbone “bones”
  const half = Math.ceil(causeData.length / 2);
  const topCauses = causeData.slice(0, half);
  const bottomCauses = causeData.slice(half);

  // 3) Some geometry constants for the SVG
  const svgWidth = 800;
  const svgHeight = 400;
  const spineY = svgHeight / 2; // Main horizontal line in the middle

  // How far to space each cause
  const topSpacing = svgWidth / (topCauses.length + 1);
  const bottomSpacing = svgWidth / (bottomCauses.length + 1);

  // 4) Layout the top/bottom “bones.”
  //    We’ll produce an array of objects like { x1, y1, x2, y2, causeName, percentage }
  //    so we can draw lines and text in the right positions.
  const topBones = topCauses.map((cause, i) => {
    const x = topSpacing * (i + 1); // distribute from left to right
    const y = spineY - 60 - i * 20; // go upward for each cause
    return {
      line: {
        // line from main spine to cause
        x1: x,
        y1: spineY,
        x2: x,
        y2: y + 30,
      },
      box: {
        x: x - 60,
        y: y, // place a rect above the line
      },
      ...cause,
    };
  });

  const bottomBones = bottomCauses.map((cause, i) => {
    const x = bottomSpacing * (i + 1);
    const y = spineY + 60 + i * 20; // go downward
    return {
      line: {
        x1: x,
        y1: spineY,
        x2: x,
        y2: y - 30,
      },
      box: {
        x: x - 60,
        y: y - 50,
      },
      ...cause,
    };
  });

  // 5) Render the SVG with lines, rectangles, and text.
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">{problemName}</h2>
      <p className="text-gray-500 italic mb-4">
        Desglose de causas y porcentajes
      </p>

      <div className="relative border rounded-lg shadow-lg p-4 bg-white">
        <svg
          width={svgWidth}
          height={svgHeight}
          className="block mx-auto"
          style={{ maxWidth: "100%" }}
        >
          {/* Main horizontal spine */}
          <line
            x1={50}
            y1={spineY}
            x2={svgWidth - 100}
            y2={spineY}
            stroke="#374151" /* Tailwind slate-700 */
            strokeWidth="4"
          />

          {/* Problem Name on the right end */}
          <text
            x={svgWidth - 80}
            y={spineY - 10}
            fill="#374151"
            fontWeight="bold"
          >
            {problemName || "Problem Name"}
          </text>

          {/* TOP bones */}
          {topBones.map((bone, idx) => (
            <React.Fragment key={`top-${idx}`}>
              {/* Line to cause */}
              <line
                x1={bone.line.x1}
                y1={bone.line.y1}
                x2={bone.line.x2}
                y2={bone.line.y2}
                stroke="#2563EB" /* Tailwind blue-600 */
                strokeWidth="2"
              />
              {/* Cause box */}
              <rect
                x={bone.box.x}
                y={bone.box.y}
                width="120"
                height="50"
                rx="8"
                fill="#3B82F6" /* Tailwind blue-500 */
              />
              {/* Cause text (name) */}
              <text
                x={bone.box.x + 10}
                y={bone.box.y + 24}
                fill="#FFF"
                fontWeight="500"
              >
                {bone.name}
              </text>
              {/* Percentage text (right side) */}
              <text
                x={bone.box.x + 80}
                y={bone.box.y + 40}
                fill="#FFF"
                fontWeight="500"
                textAnchor="end"
              >
                {bone.percentage}%
              </text>
            </React.Fragment>
          ))}

          {/* BOTTOM bones */}
          {bottomBones.map((bone, idx) => (
            <React.Fragment key={`bot-${idx}`}>
              <line
                x1={bone.line.x1}
                y1={bone.line.y1}
                x2={bone.line.x2}
                y2={bone.line.y2}
                stroke="#2563EB"
                strokeWidth="2"
              />
              <rect
                x={bone.box.x}
                y={bone.box.y}
                width="120"
                height="50"
                rx="8"
                fill="#3B82F6"
              />
              <text
                x={bone.box.x + 10}
                y={bone.box.y + 24}
                fill="#FFF"
                fontWeight="500"
              >
                {bone.name}
              </text>
              <text
                x={bone.box.x + 80}
                y={bone.box.y + 40}
                fill="#FFF"
                fontWeight="500"
                textAnchor="end"
              >
                {bone.percentage}%
              </text>
            </React.Fragment>
          ))}
        </svg>
      </div>

      <button
        onClick={prevStep}
        className="bg-gray-500 text-white px-4 py-2 w-full max-w-sm"
      >
        Back
      </button>
      {/* Preview/Next <-- / -->  buttons*/}
      
    </div>
  );
}
