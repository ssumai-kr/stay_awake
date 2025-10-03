import { useMemo } from "react";

interface SystemCardProps {
  faceRecognitionRate?: number;
  heartRateMeasurementRate?: number;
  alarmOperationRate?: number;
}

function getColorByRate(rate: number) {
  // 0% → 빨강 (#ef4444), 100% → 초록 (#22c55e)
  // 중간 값은 보간
  const r = Math.round(239 - (239 - 34) * (rate / 100)); // 239 → 34
  const g = Math.round(68 + (197 - 68) * (rate / 100)); // 68 → 197
  const b = Math.round(68 + (94 - 68) * (rate / 100)); // 68 → 94
  return `rgb(${r}, ${g}, ${b})`;
}

function ProgressBar({ rate = 0 }: { rate?: number }) {
  return (
    <div className="w-[140px] md:w-[200px] h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full transition-all duration-500"
        style={{
          width: `${rate}%`,
          backgroundColor: getColorByRate(rate),
        }}
      />
    </div>
  );
}

export default function SystemCard({
  faceRecognitionRate = 0,
  heartRateMeasurementRate = 0,
  alarmOperationRate = 0,
}: SystemCardProps) {
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  return (
    <div className="w-[1136px] h-auto bg-white rounded-[10px] p-4 shadow-md">
      <div className="flex gap-4 items-center mb-[10px]">
        <h3 className="text-[18px] font-bold text-black mb-[15px]">
          시스템 성능 지표
        </h3>
        <div className="text-[14px] text-gray-500 mb-[15px]">{today}</div>
      </div>
      <div className="flex flex-col gap-[15px]">
        {/* 얼굴 인식 성공률 */}
        <div className="flex items-center justify-between text-[14px]">
          <span className="text-[#697077]">얼굴 인식 성공률</span>
          <div className="flex items-center gap-2">
            <span className="text-black font-[700]">
              {faceRecognitionRate}%
            </span>
            <ProgressBar rate={faceRecognitionRate} />
          </div>
        </div>

        {/* 심박수 측정 성공률 */}
        <div className="flex items-center justify-between text-[14px]">
          <span className="text-[#697077]">심박수 측정 성공률</span>
          <div className="flex items-center gap-2">
            <span className="text-black font-[700]">
              {heartRateMeasurementRate}%
            </span>
            <ProgressBar rate={heartRateMeasurementRate} />
          </div>
        </div>

        {/* 알람 작동 성공률 */}
        <div className="flex items-center justify-between text-[14px]">
          <span className="text-[#697077]">알람 작동 성공률</span>
          <div className="flex items-center gap-2">
            <span className="text-black font-[700]">{alarmOperationRate}%</span>
            <ProgressBar rate={alarmOperationRate} />
          </div>
        </div>
      </div>
    </div>
  );
}
