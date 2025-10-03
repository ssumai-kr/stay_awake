import { useMemo } from 'react';
import ErrorPieChart from './ErrorPieChart';

export default function ErrorPieCard() {
  const weekRange = useMemo(() => {
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() - 6);

    const format = (date: Date) => date.toISOString().split("T")[0];

    return `${format(start)} ~ ${format(today)}`;
  }, []);

  return (
    <div className="w-[1136px] h-auto bg-white rounded-[10px] p-4 shadow-md">
      <div className="flex gap-4 items-center mb-[10px]">
        <h3 className="text-[18px] font-bold text-black mb-[15px]">
          에러 분포
        </h3>
        <div className="text-[14px] text-gray-500 mb-[15px]">{weekRange}</div>
      </div>
      <ErrorPieChart />
    </div>
  );
}
