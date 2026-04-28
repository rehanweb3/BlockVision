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
    <div className="w-full shadow-shadow">
      <Card className="bg-[#1f201e] border border-solid border-[#2e2e2d] rounded-2xl">
        <CardContent className="p-0 py-4 px-[25px] flex flex-col gap-0">
          {/* Extra Data Row */}
          <div className="flex items-center gap-4 py-3">
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[13px] leading-normal min-w-[210px]">
              Extra Data:
            </span>
            <div className="flex-1 bg-[#aba5b14f] rounded-[10px] px-6 py-[14px]">
              <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-[13px] leading-normal break-all">
                0x0000000000000000000000000000000000000000000000000000000000000000
              </span>
            </div>
          </div>

          <Separator className="bg-[#2e2e2d] ml-[210px]" />

          {/* Hash and Parent Hash Rows */}
          {hashRows.map((row, index) => (
            <div key={index}>
              <div className="flex items-center gap-4 py-3">
                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[13px] leading-normal min-w-[210px]">
                  {row.label}
                </span>
                <div className="flex items-center gap-2">
                  <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-[13px] leading-normal">
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
                <Separator className="bg-[#2e2e2d] ml-[210px]" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
