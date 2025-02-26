import { useState } from "react";
import Definition from "./Definition";
import Assignment from "./Assignment";
import Visualization from "./Visualization";
import CauseDiagram from "./CauseDiagram";

export default function ProblemSolver() {
  const [step, setStep] = useState(1);
  const [problemName, setProblemName] = useState("");
  const [causes, setCauses] = useState([]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {step === 1 && (
        <Definition
          problemName={problemName}
          setProblemName={setProblemName}
          causes={causes}
          setCauses={setCauses}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Assignment
          causes={causes}
          setCauses={setCauses}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Visualization
          causes={causes}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      )}
      {step === 4 && (
        <CauseDiagram
          problemName={problemName}
          causes={causes}
          prevStep={prevStep}
        />
      )}
    </div>
  );
}
