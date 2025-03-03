import { useState } from "react";
import Foda from "./Foda";
import SixHats from "./SixHats";
import CATWDA from "./CATWDA";
import ProblemSolver from "./ProblemSolver";
import Pigmalion from "./library/Pigmalion";
import { useNavigate } from "react-router-dom";


export default function NavHandler() {

  const navigate = useNavigate();
  const [index, setIndex] = useState(1);

  const nextStep = () => setIndex(step + 1);
  const prevStep = () => setIndex(step - 1);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {step === 1 && (
        <Foda
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <SixHats
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <CATWDA
          nextStep={nextStep}
          prevStep={prevStep}
        />
        
      )}
      {step === 4 && (
        <ProblemSolver
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 5 && (
        <Pigmalion
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 6 && (
        navigate("/author")
      )}
        

    </div>
  );
}
