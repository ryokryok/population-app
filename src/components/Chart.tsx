import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

type ChartProps = {
  data: { value: number; year: number }[]
}

export function Chart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 30,
          bottom: 30,
        }}
      >
        <CartesianGrid stroke={'#ccc'} max={2000000000} />
        <XAxis dataKey={'year'} />
        <YAxis />
        <Line type={'monotone'} dataKey={'value'} stroke="#8884d8" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )
}
