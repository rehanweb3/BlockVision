import { Card, CardContent } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

// Chart data for Daily Transactions
const chartData = [
  { day: "Mon", transactions: 850000 },
  { day: "Tue", transactions: 1200000 },
  { day: "Wed", transactions: 980000 },
  { day: "Thu", transactions: 1550000 },
  { day: "Fri", transactions: 1100000 },
  { day: "Sat", transactions: 1750000 },
  { day: "Sun", transactions: 1300000 },
];

const chartConfig = {
  transactions: {
    label: "Transactions",
    color: "#0052ff",
  },
} satisfies ChartConfig;

// Rectangle decorations in the header bar (13 items)
const rectangleDecorations = Array.from({ length: 13 });

export const LatestBlocksSection = (): JSX.Element => {
  return (
    <div className="w-full">
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
            <span className="relative z-10 ml-6 [font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-base tracking-[0] leading-[normal] flex-1">
              Daily Transactions
            </span>

            {/* View More link */}
            <div className="relative z-10 flex items-center gap-1 mr-4">
              <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-base tracking-[0] leading-[normal]">
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
          <div className="w-full overflow-x-auto custom-scrollbar">
            <div
              className="relative min-w-[600px] bg-white rounded-2xl border border-solid border-[#5b616e33] overflow-hidden p-4"
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
                    dataKey="transactions"
                    type="natural"
                    fill="#0052ff"
                    fillOpacity={0.1}
                    stroke="#0052ff"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
