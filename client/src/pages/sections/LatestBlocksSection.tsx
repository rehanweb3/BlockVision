import { Card, CardContent } from "@/components/ui/card";

// Y-axis labels data
const yAxisLabels = ["60K", "60K", "60K", "60K", "60K", "60K"];

// Rectangle decorations in the header bar (13 items)
const rectangleDecorations = Array.from({ length: 13 });

export const LatestBlocksSection = (): JSX.Element => {
  return (
    <div className="w-full shadow-shadow">
      <Card className="bg-white rounded-2xl border border-solid border-[#5b616e33] overflow-hidden">
        <CardContent className="p-2.5">
          {/* Header bar */}
          <div className="relative w-full h-[47px] bg-[#eef0f3] rounded-[10px] mb-[14px] flex items-center">
            {/* Rectangle decorations overlaid on header */}
            <div className="absolute inset-0 flex flex-row overflow-hidden rounded-[10px]">
              {rectangleDecorations.map((_, index) => (
                <img
                  key={`rect-${index}`}
                  className="w-[50px] h-[47px] flex-shrink-0"
                  alt="Rectangle"
                  src="/figmaAssets/rectangle-14.svg"
                />
              ))}
            </div>

            {/* Title */}
            <span className="relative z-10 ml-6 [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-base tracking-[0] leading-[normal] flex-1">
              Daily Transactions
            </span>

            {/* View More link */}
            <div className="relative z-10 flex items-center gap-1 mr-4">
              <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-base tracking-[0] leading-[normal]">
                View More
              </span>
              <img
                className="w-4 h-4"
                alt="Fywtlodsmmqps"
                src="/figmaAssets/fy4wt6lo3dsmmq21p7s-1.svg"
              />
            </div>
          </div>

          {/* Chart area with border */}
          <div
            className="relative w-full bg-white rounded-2xl border border-solid border-[#5b616e33] overflow-hidden"
            style={{ minHeight: "360px" }}
          >
            {/* Y-axis labels + chart content */}
            <div
              className="flex flex-row w-full h-full"
              style={{ minHeight: "360px" }}
            >
              {/* Y-axis labels column */}
              <div className="flex flex-col justify-between py-4 pl-2 pr-1 w-[52px] flex-shrink-0">
                {yAxisLabels.map((label, index) => (
                  <span
                    key={`y-label-${index}`}
                    className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#5b616e] text-xs tracking-[0] leading-none -translate-y-1/2"
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* Chart content area */}
              <div className="relative flex-1 flex flex-col justify-between py-4">
                {/* Horizontal grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <img
                      key={`line-${index}`}
                      className="w-full h-px"
                      alt="Line"
                      src="/figmaAssets/line-4.svg"
                    />
                  ))}
                </div>

                {/* Line chart image */}
                <img
                  className="absolute top-[34px] left-[13px] right-0 w-[calc(100%-13px)] h-[253px] object-fill"
                  alt="Line chart"
                  src="/figmaAssets/line-7-1.png"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
