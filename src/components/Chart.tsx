import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { useTotalPopulation } from '../lib/hooks'

type ChartProps = {
  code: number
}

export function Chart({ code }: ChartProps) {
  const { population } = useTotalPopulation(code)
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={600}
        height={400}
        data={population ?? []}
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
