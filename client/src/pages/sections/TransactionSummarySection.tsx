import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import blockies from "ethereum-blockies-base64";

const transactionRows = [
  {
    label: "Transaction Hash:",
    content: "hash",
  },
  {
    label: "Block:",
    content: "block",
  },
  {
    label: "Status and Method:",
    content: "status",
  },
  {
    label: "Timestamp:",
    content: "timestamp",
  },
];

export const TransactionSummarySection = (): JSX.Element => {
  return (
    <div className="w-full">
      <Card className="w-full bg-white border border-solid border-[#5b616e33] rounded-2xl overflow-hidden">
        <CardContent className="px-6 py-0">
          {/* Transaction Hash Row */}
          <div className="flex flex-col md:flex-row md:items-start py-[14px] gap-2 md:gap-4">
            <span className="[font-family:'Inter',sans-serif] font-medium text-[#5b616e] md:text-[#0a0b0d] text-[13px] leading-normal w-full md:w-[210px] shrink-0">
              Transaction Hash:
            </span>
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <img
                  className="w-4 h-4 flex-shrink-0 rounded-full"
                  alt="address blockie"
                  src={blockies("0xd65fdbbbdadd9519d98ff26c8f1fbc717809eea8c8ba30f588d58207b4491d17")}
              />
              <span className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-[13px] leading-normal truncate">
                0xd65fdbbbdadd9519d98ff26c8f1fbc717809eea8c8ba30f588d58207b4491d17
              </span>
              <img
                className="w-3.5 h-3.5 shrink-0 opacity-60 hover:opacity-100 cursor-pointer transition-opacity"
                alt="copy"
                src="/figmaAssets/7b8yf903kp7mmrir8vx-1.svg"
              />
            </div>
          </div>
          <Separator className="bg-[#5b616e33]" />

          {/* Block Row */}
          <div className="flex flex-col md:flex-row md:items-start py-[14px] gap-2 md:gap-4">
            <span className="[font-family:'Inter',sans-serif] font-medium text-[#5b616e] md:text-[#0a0b0d] text-[13px] leading-normal w-full md:w-[210px] shrink-0">
              Block:
            </span>
            <span className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-[13px] leading-normal">
              #18939775
            </span>
          </div>
          <Separator className="bg-[#5b616e33]" />

          {/* Status and Method Row */}
          <div className="flex flex-col md:flex-row md:items-start py-[14px] gap-2 md:gap-4">
            <span className="[font-family:'Inter',sans-serif] font-medium text-[#5b616e] md:text-[#0a0b0d] text-[13px] leading-normal w-full md:w-[210px] shrink-0">
              Status and Method:
            </span>
            <div className="flex items-center gap-2">
              <img
                className="w-4 h-4 shrink-0"
                alt="Prgvmrmmrjoo"
                src="/figmaAssets/prg5vm87r5mmrj57oo-1.svg"
              />
              <span className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-[13px] leading-normal">
                Success
              </span>
              <div className="relative flex items-center justify-center bg-[#eef0f3] rounded px-2 py-[1px]">
                <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-[10px] leading-normal">
                  Transfer
                </span>
              </div>
            </div>
          </div>
          <Separator className="bg-[#5b616e33]" />

          {/* Timestamp Row */}
          <div className="flex flex-col md:flex-row md:items-start py-[14px] gap-2 md:gap-4">
            <span className="[font-family:'Inter',sans-serif] font-medium text-[#5b616e] md:text-[#0a0b0d] text-[13px] leading-normal w-full md:w-[210px] shrink-0">
              Timestamp:
            </span>
            <span className="[font-family:'Inter',sans-serif] font-normal text-[#0a0b0d] text-[13px] leading-normal">
              12 mins 50 secs ago{" "}
              <span className="[font-family:'Inter',sans-serif] font-normal text-[#5b616e]">
                (Mar-15-2026 02:36:55 AM)
              </span>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
