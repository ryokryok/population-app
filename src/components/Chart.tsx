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
        <CartesianGrid stroke={'#ccc'} />
        <XAxis
          dataKey={'year'}
          label={{ value: '年度', offset: -10, position: 'insideBottom' }}
          padding={{
            left: 30,
          }}
        />
        <YAxis
          domain={[0, 15000000]}
          label={{
            value: '人口',
            angle: -90,
            position: 'insideBottomLeft',
          }}
          padding={{
            top: 30,
          }}
          tickSize={10}
          tickCount={5}
        />

        <Line type={'monotone'} dataKey={'value'} stroke="#8884d8" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  )
}
