import makeBlockie from "ethereum-blockies-base64";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Rectangle decorations in the header bar (13 items)
const rectangleDecorations = Array.from({ length: 13 });

// Transaction data array for looping
const transactions = [
  {
    id: 1,
    txHash: "0xfc28...5b90",
    txUrl:
      "https://monadvision.com/tx/0xfc28526a472cea6b9e5f37ab86e9164e7cfe7e530a18b5391a88445d30805b90",
    time: "1 sec ago",
    fromAddress: "0x021F...2dcf",
    fromUrl:
      "https://monadvision.com/address/0x021FE6275f4205F36f690C0102461DD760372dcf",
    toAddress: "0x021F...2dcf",
    toUrl:
      "https://monadvision.com/address/0x021FE6275f4205F36f690C0102461DD760372dcf",
    amount: "10ATH",
    icon: "/figmaAssets/vec-15.png",
  },
  {
    id: 2,
    txHash: "0xfc28...5b90",
    txUrl:
      "https://monadvision.com/tx/0xfc28526a472cea6b9e5f37ab86e9164e7cfe7e530a18b5391a88445d30805b90",
    time: "1 sec ago",
    fromAddress: "0x021F...2dcf",
    fromUrl:
      "https://monadvision.com/address/0x021FE6275f4205F36f690C0102461DD760372dcf",
    toAddress: "0x021F...2dcf",
    toUrl:
      "https://monadvision.com/address/0x021FE6275f4205F36f690C0102461DD760372dcf",
    amount: "10ATH",
    icon: "/figmaAssets/vec-14.png",
  },
  {
    id: 3,
    txHash: "0xfc28...5b90",
    txUrl:
      "https://monadvision.com/tx/0xfc28526a472cea6b9e5f37ab86e9164e7cfe7e530a18b5391a88445d30805b90",
    time: "1 sec ago",
    fromAddress: "0x021F...2dcf",
    fromUrl:
      "https://monadvision.com/address/0x021FE6275f4205F36f690C0102461DD760372dcf",
    toAddress: "0x021F...2dcf",
    toUrl:
      "https://monadvision.com/address/0x021FE6275f4205F36f690C0102461DD760372dcf",
    amount: "10ATH",
    icon: "/figmaAssets/vec-13.png",
  },
  {
    id: 4,
    txHash: "0xfc28...5b90",
    txUrl:
      "https://monadvision.com/tx/0xfc28526a472cea6b9e5f37ab86e9164e7cfe7e530a18b5391a88445d30805b90",
    time: "1 sec ago",
    fromAddress: "0x021F...2dcf",
    fromUrl:
      "https://monadvision.com/address/0x021FE6275f4205F36f690C0102461DD760372dcf",
    toAddress: "0x021F...2dcf",
    toUrl:
      "https://monadvision.com/address/0x021FE6275f4205F36f690C0102461DD760372dcf",
    amount: "10ATH",
    icon: "/figmaAssets/vec-12.png",
  },
  {
    id: 5,
    txHash: "0xfc28...5b90",
    txUrl:
      "https://monadvision.com/tx/0xfc28526a472cea6b9e5f37ab86e9164e7cfe7e530a18b5391a88445d30805b90",
    time: "1 sec ago",
    fromAddress: "0x021F...2dcf",
    fromUrl:
      "https://monadvision.com/address/0x021FE6275f4205F36f690C0102461DD760372dcf",
    toAddress: "0x021F...2dcf",
    toUrl:
      "https://monadvision.com/address/0x021FE6275f4205F36f690C0102461DD760372dcf",
    amount: "10ATH",
    icon: "/figmaAssets/vec-11.png",
  },
  {
    id: 6,
    txHash: "0xfc28...5b90",
    txUrl:
      "https://monadvision.com/tx/0xfc28526a472cea6b9e5f37ab86e9164e7cfe7e530a18b5391a88445d30805b90",
    time: "1 sec ago",
    fromAddress: "0x021F...2dcf",
    fromUrl:
      "https://monadvision.com/address/0x021FE6275f4205F36f690C0102461DD760372dcf",
    toAddress: "0x021F...2dcf",
    toUrl:
      "https://monadvision.com/address/0x021FE6275f4205F36f690C0102461DD760372dcf",
    amount: "10ATH",
    icon: "/figmaAssets/vec-10.png",
  },
];

export const ActivityChartsSection = (): JSX.Element => {
  return (
    <div className="w-full h-full shadow-shadow">
      <Card className="bg-white rounded-2xl border border-solid border-[#5b616e33] w-full h-full">
        <CardContent className="p-2.5">
          {/* Header bar (Standardized) */}
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
              Daily Transactions
            </span>

            {/* View More link */}
            <div className="relative z-10 flex items-center gap-1 mr-4">
              <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-base tracking-[0] leading-[normal]">
                View More
              </span>
              <img
                className="w-4 h-4"
                alt="Arrow"
                src="/figmaAssets/fy4wt6lo3dsmmq21p7s-1.svg"
              />
            </div>
          </div>

          <div className="flex flex-col px-2 pb-2">
            {transactions.map((tx, index) => (
              <div key={tx.id}>
                {/* Transaction row (Standardized with Grid) */}
                <div className="grid grid-cols-12 items-center w-full min-h-[64px] py-1 gap-2">
                  {/* Icon + tx hash + time */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img className="w-10 h-10 shrink-0" alt="Vec" src={tx.icon} />
                    <div className="flex flex-col gap-0.5">
                      <a
                        className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] underline truncate max-w-[120px]"
                        href={tx.txUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {tx.txHash}
                      </a>
                      <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal]">
                        {tx.time}
                      </span>
                    </div>
                  </div>

                  {/* From / To */}
                  <div className="col-span-12 md:col-span-5 flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#5b616e] text-xs tracking-[0] leading-[normal] w-[35px]">
                        From
                      </span>
                      <div className="flex items-center gap-1.5 flex-1 min-w-0">
                        <div className="w-5 h-5 flex-shrink-0 bg-[#eef0f3] rounded-full overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            alt="Avatar"
                            src={makeBlockie(tx.fromAddress)}
                          />
                        </div>
                        <a
                          className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] underline truncate"
                          href={tx.fromUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {tx.fromAddress}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#5b616e] text-xs tracking-[0] leading-[normal] w-[35px]">
                        To
                      </span>
                      <div className="flex items-center gap-1.5 flex-1 min-w-0">
                        <div className="w-5 h-5 flex-shrink-0 bg-[#eef0f3] rounded-full overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            alt="Avatar"
                            src={makeBlockie(tx.toAddress)}
                          />
                        </div>
                        <a
                          className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal] underline truncate"
                          href={tx.toUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {tx.toAddress}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="col-span-3 flex flex-col gap-0.5 text-right">
                    <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#5b616e] text-xs tracking-[0] leading-[normal]">
                      Amount
                    </span>
                    <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-xs tracking-[0] leading-[normal]">
                      {tx.amount}
                    </span>
                  </div>
                </div>

                {/* Separator between rows, not after last */}
                {index < transactions.length - 1 && (
                  <Separator className="bg-[#5b616e33]" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
