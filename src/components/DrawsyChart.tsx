import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  hour: string;
  index: number;
  value: number;
}

const data01: DataPoint[] = [
  { hour: "12a", index: 1, value: 170 },
  { hour: "1a", index: 1, value: 180 },
  { hour: "2a", index: 1, value: 150 },
  { hour: "3a", index: 1, value: 120 },
  { hour: "4a", index: 1, value: 200 },
  { hour: "5a", index: 1, value: 300 },
  { hour: "6a", index: 1, value: 400 },
  { hour: "7a", index: 1, value: 200 },
  { hour: "8a", index: 1, value: 100 },
  { hour: "9a", index: 1, value: 150 },
  { hour: "10a", index: 1, value: 160 },
  { hour: "11a", index: 1, value: 170 },
  { hour: "12p", index: 1, value: 180 },
  { hour: "1p", index: 1, value: 144 },
  { hour: "2p", index: 1, value: 166 },
  { hour: "3p", index: 1, value: 145 },
  { hour: "4p", index: 1, value: 150 },
  { hour: "5p", index: 1, value: 170 },
  { hour: "6p", index: 1, value: 180 },
  { hour: "7p", index: 1, value: 165 },
  { hour: "8p", index: 1, value: 130 },
  { hour: "9p", index: 1, value: 140 },
  { hour: "10p", index: 1, value: 170 },
  { hour: "11p", index: 1, value: 180 },
];

const data02: DataPoint[] = [
  { hour: "12a", index: 1, value: 160 },
  { hour: "1a", index: 1, value: 180 },
  { hour: "2a", index: 1, value: 150 },
  { hour: "3a", index: 1, value: 120 },
  { hour: "4a", index: 1, value: 200 },
  { hour: "5a", index: 1, value: 300 },
  { hour: "6a", index: 1, value: 100 },
  { hour: "7a", index: 1, value: 200 },
  { hour: "8a", index: 1, value: 100 },
  { hour: "9a", index: 1, value: 150 },
  { hour: "10a", index: 1, value: 160 },
  { hour: "11a", index: 1, value: 160 },
  { hour: "12p", index: 1, value: 180 },
  { hour: "1p", index: 1, value: 144 },
  { hour: "2p", index: 1, value: 166 },
  { hour: "3p", index: 1, value: 145 },
  { hour: "4p", index: 1, value: 150 },
  { hour: "5p", index: 1, value: 160 },
  { hour: "6p", index: 1, value: 180 },
  { hour: "7p", index: 1, value: 165 },
  { hour: "8p", index: 1, value: 130 },
  { hour: "9p", index: 1, value: 140 },
  { hour: "10p", index: 1, value: 160 },
  { hour: "11p", index: 1, value: 180 },
];

// 최대값 계산
const parseDomain = (): [number, number] => [
  0,
  Math.max(...data01.map((d) => d.value), ...data02.map((d) => d.value)),
];

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ payload: DataPoint }>;
}

const DrawsyChart: React.FC = () => {
  const domain = parseDomain();
  const range: [number, number] = [16, 225];

  const renderTooltip = ({ active, payload }: TooltipProps) => {
    if (active && payload && payload.length > 0) {
      const data = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #999",
            padding: 10,
          }}
        >
          <p>{data.hour}</p>
          <p>value: {data.value}</p>
        </div>
      );
    }
    return null;
  };

  const daysData = [
    { label: "Sunday", data: data01 },
    { label: "Monday", data: data02 },
    { label: "Tuesday", data: data01 },
    { label: "Wednesday", data: data02 },
    { label: "Thursday", data: data01 },
    { label: "Friday", data: data02 },
    { label: "Saturday", data: data01 },
  ];

  return (
    <div style={{ width: "100%" }}>
      {daysData.map((day, idx) => (
        <ResponsiveContainer key={idx} width="100%" height={60}>
          <ScatterChart
            margin={{
              top: 10,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <XAxis
              type="category"
              dataKey="hour"
              interval={0}
              tick={{ fontSize: 0 }}
              tickLine={{ transform: "translate(0, -6)" }}
            />
            <YAxis
              type="number"
              dataKey="index"
              height={10}
              width={80}
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: day.label, position: "insideRight" }}
            />
            <ZAxis
              type="number"
              dataKey="value"
              domain={domain}
              range={range}
            />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              wrapperStyle={{ zIndex: 100 }}
              content={renderTooltip}
            />
            <Scatter data={day.data} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      ))}
    </div>
  );
};

export default DrawsyChart;
