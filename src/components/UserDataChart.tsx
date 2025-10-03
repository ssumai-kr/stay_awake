import { useUserDataWithDates } from "@/Data/MockData";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import React from "react";

function UserDataChartComponent() {
  const userDataWithDates = useUserDataWithDates();

  console.log("📊 UserDataChart 렌더링!", new Date().toLocaleTimeString());

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={userDataWithDates}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="ALL"
            stroke="#FF4F4F"
            activeDot={{ r: 8 }}
            isAnimationActive={true} // 애니메이션은 한 번만
          />
          <Line type="monotone" dataKey="Connect_Camera" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Connect_Watch" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// ✅ React.memo 적용
const UserDataChart = React.memo(UserDataChartComponent);

export default UserDataChart;
