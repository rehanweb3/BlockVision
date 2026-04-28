import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Data for each fee detail row
const feeRows = [
  {
    label: "Gas Limit (Gas Used):",
    value: (
      <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#0a0b0d] text-[13px]">
        0
      </span>
    ),
  },
  {
    label: "Gas Price:",
    value: (
      <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#0a0b0d] text-[13px]">
        0 Gwei
      </span>
    ),
  },
  {
    label: "Gas Fees:",
    value: (
      <span className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#0a0b0d] text-[13px]">
        Base:{" "}
        <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold">
          100Gwei
        </span>
      </span>
    ),
  },
  {
    label: "Burnt & Txn Savings Fees:",
    value: (
      <span className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#0a0b0d] text-[13px]">
        Burnt
        <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold">
          : 0ATH
        </span>
      </span>
    ),
  },
];

export const TransactionFeeDetailsSection = (): JSX.Element => {
  return (
    <div className="w-full shadow-shadow">
      <Card className="w-full bg-white rounded-2xl border border-solid border-[#5b616e33]">
        <CardContent className="px-6 py-0">
          {feeRows.map((row, index) => (
            <div key={index}>
              {/* Row with label and value */}
              <div className="flex flex-row items-start py-[14px] gap-4">
                <div className="w-[200px] shrink-0 [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-[13px] tracking-[0] leading-normal">
                  {row.label}
                </div>
                <div className="flex-1 [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#0a0b0d] text-[13px] tracking-[0] leading-normal">
                  {row.value}
                </div>
              </div>
              {/* Separator below each row except the last */}
              {index < feeRows.length - 1 && (
                <Separator className="bg-[#5b616e33]" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
