import React, { useRef } from "react";
import { useToolData } from "../../../context/ToolDataContext";
import { Download, FileText } from "lucide-react"; // icons for better UI
import html2pdf from "html2pdf.js";

const LibraryDashboardPage = () => {
  const { toolData } = useToolData();
  const reportRef = useRef(null); // reference to the printable content

  const handleExportPDF = () => {
    const element = reportRef.current;
    html2pdf()
      .set({ margin: 10, filename: 'ProblemSolvingReport.pdf', html2canvas: { scale: 2 } })
      .from(element)
      .save();
  };

  const Section = ({ title, color, icon: Icon, data }) => (
    <section className={`p-6 bg-${color}-50 border border-${color}-300 rounded-lg shadow`}>
      <div className="flex items-center space-x-3 mb-4">
        <Icon className={`w-6 h-6 text-${color}-600`} />
        <h2 className={`text-2xl font-bold text-${color}-600`}>{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="p-4 border rounded-lg bg-white">
            <h3 className="font-semibold capitalize text-gray-800">{key}</h3>
            <p className="mt-2 text-gray-700 whitespace-pre-wrap">
              {value || <span className="italic text-gray-400">Sin información</span>}
            </p>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-800">📚 Resumen de Herramientas</h1>
        <button
          onClick={handleExportPDF}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          <Download className="w-5 h-5 mr-2" /> Exportar a PDF
        </button>
      </div>

      {/* Printable Content */}
      <div ref={reportRef} className="space-y-8">
        {/* FODA Section */}
        <Section
          title="Análisis FODA"
          color="blue"
          icon={FileText}
          data={toolData.foda}
        />

        {/* Six Hats Section */}
        <Section
          title="Seis Sombreros para Pensar"
          color="red"
          icon={FileText}
          data={toolData.sixHats}
        />

        {/* CATWDA Section */}
        <Section
          title="CATWDA"
          color="green"
          icon={FileText}
          data={toolData.catwda}
        />
      </div>
    </div>
  );
};

export default LibraryDashboardPage;
