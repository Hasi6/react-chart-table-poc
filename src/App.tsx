import HorizontalBarChart from '@/components/charts/HorizontalBarChart';
import BarChart from '@/components/charts/BarChart';
import PieChartComponent from '@/components/charts/PieChart';
import TableComponent from '@/components/Table';

function App() {
  return (
    <>
      <TableComponent />
      <HorizontalBarChart />
      <BarChart />
      <PieChartComponent />
    </>
  );
}

export default App;
