import dataTemas from './venn-data.json';
import VennDiagram from './VennDiagram';

function Books() {
  return (
    <div className="p-4"> 
      <VennDiagram data={dataTemas} />
    </div>
  );
}

export default Books;
