import { Chart } from 'react-google-charts';

export const data = [
  [
    'Elements',
    'Density',
    { role: 'style' },
    {
      sourceColumn: 0,
      role: 'annotation',
      type: 'string',
      calc: 'stringify'
    }
  ],
  ['Copper', 8.94, 'color: red; border-radius: 10px;', 'Testing'],
  ['Silver', 10.49, 'silver', null],
  ['Gold', 19.3, 'gold', null],
  ['Platinum', 21.45, 'color: #e5e4e2', null]
];

export const options = {
  title: 'Density of Precious Metals, in g/cm^3',
  width: 600,
  height: 400,
  bar: { groupWidth: '45%', rx: 200, ry: 10 },
  legend: { position: 'none', rx: 200, ry: 10 },
  bars: 'vertical'
};

function HorizontalBarChart() {
  return (
    <>
      <h1>HorizontalBarChart</h1>
      <Chart chartType="BarChart" width="100%" height="400px" data={data} options={options} />
    </>
  );
}

export default HorizontalBarChart;
