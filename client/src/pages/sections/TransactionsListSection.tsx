import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Data for the block detail rows
const blockDetails = [
  {
    label: "Block Height:",
    value: (
      <span className="[font-family:'Inter',sans-serif] font-bold text-[#0a0b0d] text-[13px]">
        10,000
      </span>
    ),
  },
  {
    label: "Timestamp:",
    value: (
      <span className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-[13px]">
        <span className="font-bold">5 secs ago </span>
        <span className="[font-family:'Inter',sans-serif] font-medium">
          (Mar-15-2026 03:14:06 AM)
        </span>
      </span>
    ),
  },
  {
    label: "Proposed by:",
    value: (
      <span className="[font-family:'Inter',sans-serif] font-bold text-[#0a0b0d] text-[13px]">
        Block Validate by Miner
      </span>
    ),
  },
  {
    label: "Transactions:",
    value: (
      <span className="[font-family:'Inter',sans-serif] font-bold text-[#0a0b0d] text-[13px]">
        Total 6 transactions
      </span>
    ),
  },
];

export const TransactionsListSection = (): JSX.Element => {
  return (
    <div className="w-full flex justify-center">
      <Card className="w-full max-w-[1200px] bg-white rounded-2xl border border-solid border-[#5b616e33] p-0 shadow-none">
        <CardContent className="px-6 py-0">
          {blockDetails.map((row, index) => (
            <div key={index}>
              <div className="flex items-center py-[14px] gap-4">
                {/* Label */}
                <div className="w-[220px] shrink-0 [font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-[13px] leading-normal tracking-[0]">
                  {row.label}
                </div>
                {/* Value */}
                <div className="flex-1 text-[13px] leading-normal tracking-[0]">
                  {row.value}
                </div>
              </div>
              {/* Separator line after each row except the last */}
              {index < blockDetails.length - 1 && (
                <Separator className="bg-[#5b616e33]" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
