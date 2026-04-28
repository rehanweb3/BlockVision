import { Card, CardContent } from "@/components/ui/card";

const rectangleDecorations = Array.from({ length: 13 });

const blockData = [
  {
    id: "#1234",
    time: "1 sec ago",
    validator: "0x0000...0000",
    txn: "200Txn",
    icon: "/figmaAssets/vec-4.png",
  },
  {
    id: "#1234",
    time: "1 sec ago",
    validator: "0x0000...0000",
    txn: "200Txn",
    icon: "/figmaAssets/vec-5.png",
  },
  {
    id: "#1234",
    time: "1 sec ago",
    validator: "0x0000...0000",
    txn: "200Txn",
    icon: "/figmaAssets/vec-6.png",
  },
  {
    id: "#1234",
    time: "1 sec ago",
    validator: "0x0000...0000",
    txn: "200Txn",
    icon: "/figmaAssets/vec-7.png",
  },
  {
    id: "#1234",
    time: "1 sec ago",
    validator: "0x0000...0000",
    txn: "200Txn",
    icon: "/figmaAssets/vec-8.png",
  },
  {
    id: "#1234",
    time: "1 sec ago",
    validator: "0x0000...0000",
    txn: "200Txn",
    icon: "/figmaAssets/vec-9.png",
  },
];

export const StatisticsCardsSection = (): JSX.Element => {
  return (
    <div className="w-full h-full shadow-shadow">
      <Card className="bg-white rounded-2xl border border-solid border-[#5b616e33] overflow-hidden h-full">
        <CardContent className="p-2.5">

          {/* Header bar (Same as Daily Transactions) */}
          <div className="relative w-full h-[47px] bg-[#eef0f3] rounded-[10px] mb-[14px] flex items-center">

            {/* Rectangle decorations */}
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
            <span className="relative z-10 ml-6 [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-base tracking-[0] leading-[normal] flex-1">
              Latest Blocks
            </span>

            {/* View More */}
            <div className="relative z-10 flex items-center gap-1 mr-4">
              <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-base tracking-[0] leading-[normal]">
                View More
              </span>
              <img
                className="w-4 h-4"
                alt="View more arrow"
                src="/figmaAssets/fy4wt6lo3dsmmq21p7s-1.svg"
              />
            </div>

          </div>

          {/* Blocks List */}
          <div className="flex flex-col px-2 pb-2">

            {blockData.map((block, index) => (
              <div
                key={index}
                className="grid grid-cols-12 items-center w-full min-h-[64px] py-1 border-b border-[#5b616e33] last:border-0"
              >

                {/* Icon + Block ID + Time */}
                <div className="col-span-4 flex items-center gap-3">

                  <img
                    className="w-10 h-10 shrink-0"
                    alt="Vec"
                    src={block.icon}
                  />

                  <div className="flex flex-col gap-0.5">

                    <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal]">
                      {block.id}
                    </span>

                    <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal]">
                      {block.time}
                    </span>

                  </div>

                </div>

                {/* Proposed by Validator */}
                <div className="col-span-5 flex flex-col gap-0.5">

                  <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#5b616e] text-xs tracking-[0] leading-[normal]">
                    Proposed by Validator
                  </span>

                  <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal]">
                    {block.validator}
                  </span>

                </div>

                {/* Total Txn */}
                <div className="col-span-3 flex flex-col gap-0.5 text-right">

                  <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#5b616e] text-xs tracking-[0] leading-[normal]">
                    Total Txn
                  </span>

                  <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal]">
                    {block.txn}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </CardContent>
      </Card>
    </div>
  );
};