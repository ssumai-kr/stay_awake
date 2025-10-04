import DrawsyChart from "@/components/DrawsyChart";
import HeartRateChart from "@/components/HeartRateChart";

export default function DataSet() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center mt-4 mb-4">
        <div>졸음 감지 빈도</div>
        <div className="flex-1 justify-center flex w-full">
          <div className="w-[1136px] h-auto bg-white rounded-[10px] p-4 shadow-md">
            <DrawsyChart />
          </div>
        </div>
        <div>심박수 Rate</div>
        <div className="flex-1 justify-center flex w-full">
          <div className="w-[1136px] h-auto bg-white rounded-[10px] p-4 shadow-md">
            <HeartRateChart />
          </div>
        </div>
      </div>
    </>
  );
}
