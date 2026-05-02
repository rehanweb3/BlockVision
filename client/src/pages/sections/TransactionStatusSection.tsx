import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import blockies from "ethereum-blockies-base64";

const transactionRows = [
  {
    label: "From:",
    value: "0x6f49a8F6....249DC9e",
    hasIcon: true,
  },
  {
    label: "To:",
    value: "0x6f49a8F6....249DC9e",
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
    <div className="w-full flex justify-center">
      <Card className="w-full bg-white rounded-2xl border border-solid border-[#5b616e33] p-0 shadow-none">
        <CardContent className="px-6 py-0">
          {transactionRows.map((row, index) => (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:items-center items-start py-[18px] gap-2 md:gap-4">
                <span className="w-full md:w-[200px] md:min-w-[120px] [font-family:'Inter',sans-serif] font-medium text-[#5b616e] md:text-[#0a0b0d] text-[13px] tracking-[0] leading-[normal]">
                  {row.label}
                </span>
                <div className="flex flex-row items-center gap-2">
                  {(row.label === "From:" || row.label === "To:") && (
                    <img
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      alt="blockie"
                      src={blockies(row.value)}
                    />
                  )}
                  <span className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-[13px] tracking-[0] leading-[normal]">
                    {row.value}
                  </span>
                  {row.hasIcon && (
                    <img
                      className="w-3.5 h-3.5 flex-shrink-0 opacity-60 hover:opacity-100 cursor-pointer transition-opacity"
                      alt="copy"
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
