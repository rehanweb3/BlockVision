import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const transactionRows = [
  {
    label: "From:",
    value: "0x6f49a8F621353f12378d0046E7d7e4b9B249DC9e",
    hasIcon: true,
  },
  {
    label: "To:",
    value: "0x6f49a8F621353f12378d0046E7d7e4b9B249DC9e",
    hasIcon: true,
  },
  {
    label: "Value",
    value: "1000ATH",
    hasIcon: false,
  },
  {
    label: "Transaction Fee:",
    value: "0ATH",
    hasIcon: false,
  },
];

export const TransactionStatusSection = (): JSX.Element => {
  return (
    <div className="w-full flex justify-center shadow-shadow">
      <Card className="w-full bg-white rounded-2xl border border-solid border-[#5b616e33]">
        <CardContent className="px-6 py-0">
          {transactionRows.map((row, index) => (
            <div key={index}>
              <div className="flex flex-row items-center py-[18px] gap-4">
                <span className="w-[200px] min-w-[120px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-[13px] tracking-[0] leading-[normal]">
                  {row.label}
                </span>
                <div className="flex flex-row items-center gap-2">
                  <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#0a0b0d] text-[13px] tracking-[0] leading-[normal]">
                    {row.value}
                  </span>
                  {row.hasIcon && (
                    <img
                      className="w-3 h-3"
                      alt="Element"
                      src="/figmaAssets/7b8yf903kp7mmrir8vx-1.svg"
                    />
                  )}
                </div>
              </div>
              {index < transactionRows.length - 1 && (
                <Separator className="bg-[#5b616e33]" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
