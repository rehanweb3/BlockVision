import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Data for the block detail rows
const blockDetails = [
  {
    label: "Block Height:",
    value: (
      <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-[13px]">
        10,000
      </span>
    ),
  },
  {
    label: "Timestamp:",
    value: (
      <span className="[font-family:'Satoshi-Bold',Helvetica] font-normal text-white text-[13px]">
        <span className="font-bold">5 secs ago </span>
        <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium">
          (Mar-15-2026 03:14:06 AM)
        </span>
      </span>
    ),
  },
  {
    label: "Proposed by:",
    value: (
      <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-[13px]">
        Block Validate by Miner
      </span>
    ),
  },
  {
    label: "Transactions:",
    value: (
      <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-[13px]">
        Total 6 transactions
      </span>
    ),
  },
];

export const TransactionsListSection = (): JSX.Element => {
  return (
    <div className="w-full flex justify-center shadow-shadow">
      <Card className="w-full bg-[#1f201e] rounded-2xl border border-solid border-[#2e2e2d] text-white">
        <CardContent className="px-6 py-0">
          {blockDetails.map((row, index) => (
            <div key={index}>
              <div className="flex items-center py-[14px] gap-4">
                {/* Label */}
                <div className="w-[220px] shrink-0 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[13px] leading-normal tracking-[0]">
                  {row.label}
                </div>
                {/* Value */}
                <div className="flex-1 text-[13px] leading-normal tracking-[0]">
                  {row.value}
                </div>
              </div>
              {/* Separator line after each row except the last */}
              {index < blockDetails.length - 1 && (
                <Separator className="bg-[#2e2e2d]" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
