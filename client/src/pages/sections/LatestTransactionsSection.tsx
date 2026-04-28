import { Card, CardContent } from "@/components/ui/card";

// Y-axis labels for the chart
const yAxisLabels = ["60K", "60K", "60K", "60K", "60K", "60K"];

// Rectangle overlay images for the header bar (striped pattern)
const rectangleCount = 13;

export const LatestTransactionsSection = (): JSX.Element => {
  return (
    <div className="relative w-full shadow-shadow">
      {/* Main card container */}
      <Card className="w-full bg-[#1f201e] rounded-2xl border border-solid border-[#2e2e2d] p-0">
        <CardContent className="p-2.5">
          {/* Inner content wrapper */}
          <div className="relative w-full">
            {/* Header bar */}
            <div className="relative w-full h-[47px] bg-[#363735] rounded-[10px] overflow-hidden flex items-center">
              {/* Striped rectangle overlays */}
              {Array.from({ length: rectangleCount }).map((_, index) => (
                <img
                  key={`rect-${index}`}
                  className="absolute top-0 h-[47px] w-[50px]"
                  style={{ left: `${15 + index * 47.6}px` }}
                  alt="Rectangle"
                  src="/figmaAssets/rectangle-14.svg"
                />
              ))}

              {/* Title */}
              <span className="absolute left-6 z-10 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                Daily Active Accounts
              </span>

              {/* View More link */}
              <div className="absolute right-[51px] z-10 flex items-center gap-1">
                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                  View More
                </span>
                <img
                  className="w-4 h-4"
                  alt="Arrow icon"
                  src="/figmaAssets/fy4wt6lo3dsmmq21p7s-1.svg"
                />
              </div>
            </div>

            {/* Chart area container */}
            <div
              className="relative w-full mt-[14px] bg-[#1f201e] rounded-2xl border border-solid border-[#2e2e2d]"
              style={{ minHeight: "360px" }}
            >
              {/* Y-axis labels */}
              <div
                className="absolute left-[8px] top-[10px] flex flex-col justify-between"
                style={{ height: "272px" }}
              >
                {yAxisLabels.map((label, index) => (
                  <span
                    key={`y-label-${index}`}
                    className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#73736f] text-xs tracking-[0] leading-none -translate-y-1/2"
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* Chart lines and graph area */}
              <div
                className="absolute top-[10px] left-[68px] right-[10px]"
                style={{ height: "272px" }}
              >
                {/* Horizontal grid lines */}
                <div className="flex flex-col justify-between h-full">
                  <img
                    className="w-full h-px"
                    alt="Line"
                    src="/figmaAssets/line-4.svg"
                  />
                  <img
                    className="w-full h-px"
                    alt="Line"
                    src="/figmaAssets/line-4.svg"
                  />
                  <img
                    className="w-full h-px"
                    alt="Line"
                    src="/figmaAssets/line-4.svg"
                  />
                  <img
                    className="w-full h-px"
                    alt="Line"
                    src="/figmaAssets/line-4.svg"
                  />
                  <img
                    className="w-full h-px"
                    alt="Line"
                    src="/figmaAssets/line-4.svg"
                  />
                  <img
                    className="w-full h-px"
                    alt="Line"
                    src="/figmaAssets/line-4.svg"
                  />
                </div>

                {/* Line chart image */}
                <img
                  className="absolute top-[24px] left-[13px] right-0 w-[calc(100%-13px)] h-[253px]"
                  alt="Chart line"
                  src="/figmaAssets/line-7.png"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
