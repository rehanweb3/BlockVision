import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Data for hash rows (Hash and Parent Hash share the same value in the original)
const hashRows = [
  {
    label: "Hash:",
    value: "0x563b72a97a3be4de1a0d0d8e06e445bf09bb161b1a9f8a228de60b1330f8b132",
    showIcon: true,
  },
  {
    label: "Parent Hash:",
    value: "0x563b72a97a3be4de1a0d0d8e06e445bf09bb161b1a9f8a228de60b1330f8b132",
    showIcon: true,
  },
];

export const BlockSummarySection = (): JSX.Element => {
  return (
    <div className="w-full">
      <Card className="w-full bg-white rounded-2xl border border-solid border-[#5b616e33] p-0 shadow-none">
        <CardContent className="p-0 py-4 px-[25px] flex flex-col gap-0">
          {/* Extra Data Row */}
          <div className="flex items-center gap-4 py-3">
            <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-[13px] leading-normal min-w-[210px]">
              Extra Data:
            </span>
            <div className="flex-1 bg-[#5b616e33] rounded-[10px] px-6 py-[14px]">
              <span className="[font-family:'Inter',sans-serif] font-bold text-[#0a0b0d] text-[13px] leading-normal break-all">
                0x0000000000000000000000000000000000000000000000000000000000000000
              </span>
            </div>
          </div>

          <Separator className="bg-[#5b616e33] ml-[210px]" />

          {/* Hash and Parent Hash Rows */}
          {hashRows.map((row, index) => (
            <div key={index}>
              <div className="flex items-center gap-4 py-3">
                <span className="[font-family:'Inter',sans-serif] font-medium text-[#0a0b0d] text-[13px] leading-normal min-w-[210px]">
                  {row.label}
                </span>
                <div className="flex items-center gap-2">
                  <span className="[font-family:'Inter',sans-serif] font-bold text-[#0a0b0d] text-[13px] leading-normal">
                    {row.value}
                  </span>
                  {row.showIcon && (
                    <img
                      className="w-3 h-3 flex-shrink-0"
                      alt="Element"
                      src="/figmaAssets/7b8yf903kp7mmrir8vx-1.svg"
                    />
                  )}
                </div>
              </div>
              {index < hashRows.length - 1 && (
                <Separator className="bg-[#5b616e33] ml-[210px]" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
