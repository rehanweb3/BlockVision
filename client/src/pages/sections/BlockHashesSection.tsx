import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/* Data for the block detail rows */
const blockHashRows = [
  {
    label: "Fee Recipient:",
    value: "0x6f49a8F621353f12378d0046E7d7e4b9B249DC9e",
    icon: "/figmaAssets/7b8yf903kp7mmrir8vx-1.svg",
  },
  {
    label: "Gas Used",
    value: "954,068",
    icon: null,
  },
  {
    label: "Gas Limit:",
    value: "200,000,000",
    icon: null,
  },
];

export const BlockHashesSection = (): JSX.Element => {
  return (
    <div className="w-full flex justify-center">
      <Card className="w-full bg-white rounded-2xl border border-solid border-[#5b616e33] shadow-none">
        <CardContent className="px-6 py-0">
          {blockHashRows.map((row, index) => (
            <div key={index} className="flex flex-col">
              {/* Row content */}
              <div className="flex flex-row items-center py-[14px] gap-4">
                {/* Label */}
                <span className="w-[210px] shrink-0 [font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-[13px] tracking-[0] leading-[normal]">
                  {row.label}
                </span>
                {/* Value with optional icon */}
                <div className="flex flex-row items-center gap-2">
                  <span className="[font-family:'Inter',sans-serif] font-bold text-[#0a0b0d] text-[13px] tracking-[0] leading-[normal]">
                    {row.value}
                  </span>
                  {row.icon && (
                    <img className="w-3 h-3" alt="Element" src={row.icon} />
                  )}
                </div>
              </div>
              {/* Separator line below each row */}
              <Separator className="bg-[#5b616e33]" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
