import React from 'react'
import { useToolData } from '../../../context/ToolDataContext'

export default function LibraryDashboard() {
  const { toolData } = useToolData()

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold text-center">Resumen de Herramientas</h2>

      {/* FODA Section */}
      <div className="p-4 border rounded-lg shadow bg-gray-50">
        <h3 className="text-xl font-semibold">FODA</h3>
        <pre className="text-sm">{JSON.stringify(toolData.foda, null, 2)}</pre>
      </div>

      {/* Six Hats Section */}
      <div className="p-4 border rounded-lg shadow bg-gray-50">
        <h3 className="text-xl font-semibold">Seis Sombreros</h3>
        <pre className="text-sm">{JSON.stringify(toolData.sixHats, null, 2)}</pre>
      </div>

      {/* CATWDA Section */}
      <div className="p-4 border rounded-lg shadow bg-gray-50">
        <h3 className="text-xl font-semibold">CATWDA</h3>
        <pre className="text-sm">{JSON.stringify(toolData.catwda, null, 2)}</pre>
      </div>
    </div>
  )
}
