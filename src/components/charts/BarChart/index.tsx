import { Chart, ReactGoogleChartEvent } from 'react-google-charts';

const chartEvents: ReactGoogleChartEvent[] = [
  {
    eventName: 'statechange',
    callback({ chartWrapper }) {
      console.log('Selected ', chartWrapper.getChart().getSelection());
    }
  }
];

export const data = [
  ['Element', 'Density', { role: 'style' }],
  ['Copper', 8.94, '#b87333'], // RGB value
  ['Silver', 10.49, 'silver; opacity: 0.5'], // English color name
  ['Gold', 19.3, 'gold'],
  ['Platinum', 21.45, 'color: #e5e4e2'] // CSS-style declaration
];

export const options = {
  chart: {
    title: 'Company Performance',
    subtitle: 'Sales, Expenses, and Profit: 2014-2017'
  },
  width: 600,
  height: 400,
  bar: { groupWidth: '45%', rx: 200, ry: 10 },
  legend: { position: 'none', rx: 200, ry: 10 }
};

function BarChart() {
  return (
    <>
      <h1>BarChart</h1>
      <Chart
        chartType="ColumnChart"
        height="400px"
        data={data}
        options={options}
        chartEvents={chartEvents}
      />
    </>
  );
}

export default BarChart;
