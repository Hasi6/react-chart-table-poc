import { PieChart } from '@mui/x-charts/PieChart';

function PieChartComponent() {
  return (
    <>
      <h1>PieChart</h1>
      <PieChart
        height={500}
        width={400}
        series={[
          {
            data: [
              { value: 10, color: 'red', label: 'Red 10' },
              { value: 10, color: 'orange' },
              { value: 30, color: 'pink' }
            ],
            innerRadius: 80,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            cx: 150,
            cy: 150
          }
        ]}
      />
    </>
  );
}

export default PieChartComponent;
