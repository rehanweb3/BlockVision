import { Card, CardContent } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

// Chart data for Daily Active Accounts
const chartData = [
  { day: "Mon", accounts: 450000 },
  { day: "Tue", accounts: 1100000 },
  { day: "Wed", accounts: 780000 },
  { day: "Thu", accounts: 1450000 },
  { day: "Fri", accounts: 900000 },
  { day: "Sat", accounts: 1850000 },
  { day: "Sun", accounts: 1200000 },
];

const chartConfig = {
  accounts: {
    label: "Active Accounts",
    color: "#45e3d0",
  },
} satisfies ChartConfig;

// Rectangle overlay images for the header bar (striped pattern)
const rectangleCount = 13;

export const LatestTransactionsSection = (): JSX.Element => {
  return (
    <div className="relative w-full">
      {/* Main card container */}
      <Card className="w-full bg-white rounded-2xl border border-solid border-[#5b616e33] p-0">
        <CardContent className="p-2.5">
          {/* Inner content wrapper */}
          <div className="relative w-full">
            {/* Header bar */}
            <div className="relative w-full h-[47px] bg-[#eef0f3] rounded-[10px] overflow-hidden flex items-center">
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
              <span className="absolute left-6 z-10 [font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-base tracking-[0] leading-[normal]">
                Daily Active Accounts
              </span>

              {/* View More link */}
              <div className="absolute right-[51px] z-10 flex items-center gap-1">
                <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-base tracking-[0] leading-[normal]">
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
            <div className="w-full overflow-x-auto custom-scrollbar">
              <div
                className="relative min-w-[600px] mt-[14px] bg-white rounded-2xl border border-solid border-[#5b616e33] p-4"
                style={{ minHeight: "360px" }}
              >
                <ChartContainer config={chartConfig} className="h-[320px] w-full">
                  <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 0,
                      right: 12,
                      top: 10,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#eef0f3" />
                    <XAxis
                      dataKey="day"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tick={{
                        fill: "#5b616e",
                        fontSize: 12,
                        style: { fontFamily: "Satoshi-Medium, Helvetica" }
                      }}
                      textAnchor="middle"
                      tickFormatter={(value) => value}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={0}
                      width={40}
                      tick={{
                        fill: "#5b616e",
                        fontSize: 12,
                        style: { fontFamily: "Satoshi-Medium, Helvetica" }
                      }}
                      ticks={[550000, 1100000, 1650000]}
                      tickFormatter={(value) => {
                        if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
                        if (value >= 1000) return `${value / 1000}K`;
                        return value;
                      }}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="line" />}
                    />
                    <Area
                      dataKey="accounts"
                      type="natural"
                      fill="#45e3d0"
                      fillOpacity={0.1}
                      stroke="#45e3d0"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
