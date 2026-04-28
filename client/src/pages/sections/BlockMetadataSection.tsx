// Transaction row data - all 8 rows share the same data per the image
const transactionRows = [
  {
    txnHash: "0x99e4...6ae2",
    method: "UpdateDataFeedsValuesPartial",
    from: "0xd56D...6Ca6",
    to: "0x99e4...6ae2",
    age: "26 mins 34 secs ago",
    amount: "10,000,000",
    gasFee: "0.001ATH",
  },
  {
    txnHash: "0x99e4...6ae2",
    method: "UpdateDataFeedsValuesPartial",
    from: "0xd56D...6Ca6",
    to: "0x99e4...6ae2",
    age: "26 mins 34 secs ago",
    amount: "10,000,000",
    gasFee: "0.001ATH",
  },
  {
    txnHash: "0x99e4...6ae2",
    method: "UpdateDataFeedsValuesPartial",
    from: "0xd56D...6Ca6",
    to: "0x99e4...6ae2",
    age: "26 mins 34 secs ago",
    amount: "10,000,000",
    gasFee: "0.001ATH",
  },
  {
    txnHash: "0x99e4...6ae2",
    method: "UpdateDataFeedsValuesPartial",
    from: "0xd56D...6Ca6",
    to: "0x99e4...6ae2",
    age: "26 mins 34 secs ago",
    amount: "10,000,000",
    gasFee: "0.001ATH",
  },
  {
    txnHash: "0x99e4...6ae2",
    method: "UpdateDataFeedsValuesPartial",
    from: "0xd56D...6Ca6",
    to: "0x99e4...6ae2",
    age: "26 mins 34 secs ago",
    amount: "10,000,000",
    gasFee: "0.001ATH",
  },
  {
    txnHash: "0x99e4...6ae2",
    method: "UpdateDataFeedsValuesPartial",
    from: "0xd56D...6Ca6",
    to: "0x99e4...6ae2",
    age: "26 mins 34 secs ago",
    amount: "10,000,000",
    gasFee: "0.001ATH",
  },
  {
    txnHash: "0x99e4...6ae2",
    method: "UpdateDataFeedsValuesPartial",
    from: "0xd56D...6Ca6",
    to: "0x99e4...6ae2",
    age: "26 mins 34 secs ago",
    amount: "10,000,000",
    gasFee: "0.001ATH",
  },
  {
    txnHash: "0x99e4...6ae2",
    method: "UpdateDataFeedsValuesPartial",
    from: "0xd56D...6Ca6",
    to: "0x99e4...6ae2",
    age: "26 mins 34 secs ago",
    amount: "10,000,000",
    gasFee: "0.001ATH",
  },
];

// Address badge component used for TXN HASH, FROM, TO columns
const AddressBadge = ({ address }: { address: string }) => (
  <div className="relative w-[121px] h-[21px] bg-[#ffffff12] rounded flex items-center">
    <img
      className="absolute top-[3px] left-[7px] w-4 h-4"
      alt="Iftfjcncmmriumot"
      src="/figmaAssets/i0ftf3jcnc8mmriumot-1.svg"
    />
    <span className="absolute top-[3px] left-[30px] w-[65px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[10px] tracking-[0] leading-[normal] truncate">
      {address}
    </span>
    <img
      className="absolute top-1 left-[102px] w-3 h-3"
      alt="Element"
      src="/figmaAssets/7b8yf903kp7mmrir8vx-1.svg"
    />
  </div>
);

export const BlockMetadataSection = (): JSX.Element => {
  return (
    <section className="w-full shadow-shadow">
      {/* Outer container with dark background and border */}
      <div className="w-full bg-[#1f201e] rounded-2xl border border-solid border-[#2e2e2d] overflow-hidden">
        {/* Top decorative bar with title */}
        <div className="relative w-full">
          <img
            className="w-full h-[47px] object-cover"
            alt="Group"
            src="/figmaAssets/group-7.png"
          />
          {/* Title overlaid on the top bar */}
          <div className="absolute top-0 left-0 w-full h-[47px] flex items-center px-[39px]">
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
              140,392,874Txns Found
            </span>
          </div>
        </div>

        {/* Table header row */}
        <div className="mx-3.5 mt-[14px] mb-0">
          <div className="w-full h-[30px] rounded-lg border-[0.6px] border-solid border-[#beb7c4] flex items-center px-3.5">
            <div className="flex items-center w-full">
              {/* TXN HASH */}
              <div className="w-[148px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[10px] tracking-[0] leading-[normal] shrink-0">
                TXN HASH
              </div>
              {/* METHOD */}
              <div className="w-[130px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[10px] tracking-[0] leading-[normal] shrink-0 ml-[119px]">
                METHOD
              </div>
              {/* FROM */}
              <div className="w-[87px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[10px] tracking-[0] leading-[normal] shrink-0 ml-[106px]">
                FROM
              </div>
              {/* TO */}
              <div className="w-[42px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[10px] tracking-[0] leading-[normal] shrink-0 ml-[66px]">
                TO
              </div>
              {/* AGE */}
              <div className="w-16 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[10px] tracking-[0] leading-[normal] shrink-0 ml-[83px]">
                AGE
              </div>
              {/* STATUS */}
              <div className="w-[109px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[10px] tracking-[0] leading-[normal] shrink-0 ml-[101px]">
                STATUS
              </div>
              {/* AMOUNT */}
              <div className="w-[133px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[10px] tracking-[0] leading-[normal] shrink-0">
                AMOUNT
              </div>
              {/* Gas Fee */}
              <div className="w-[39px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[10px] tracking-[0] leading-[normal] shrink-0">
                Gas Fee
              </div>
            </div>
          </div>
        </div>

        {/* Transaction rows */}
        <div className="flex flex-col mt-1 pb-4">
          {transactionRows.map((row, index) => (
            <div
              key={index}
              className="mx-1.5 h-[31px] flex items-center mt-[17px]"
            >
              {/* TXN HASH */}
              <div className="ml-3 shrink-0">
                <AddressBadge address={row.txnHash} />
              </div>

              {/* METHOD */}
              <div className="ml-[100px] w-[142px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal] shrink-0">
                {row.method}
              </div>

              {/* FROM */}
              <div className="ml-[92px] shrink-0">
                <AddressBadge address={row.from} />
              </div>

              {/* TO */}
              <div className="ml-[69px] shrink-0">
                <AddressBadge address={row.to} />
              </div>

              {/* AGE */}
              <div className="ml-[38px] w-[95px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal] shrink-0">
                {row.age}
              </div>

              {/* STATUS icon */}
              <div className="ml-[116px] shrink-0">
                <img
                  className="w-4 h-4"
                  alt="Prgvmrmmrjoo"
                  src="/figmaAssets/prg5vm87r5mmrj57oo-1.svg"
                />
              </div>

              {/* AMOUNT */}
              <div className="ml-[101px] w-[58px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal] shrink-0">
                {row.amount}
              </div>

              {/* Gas Fee */}
              <div className="ml-[67px] flex items-center w-16 shrink-0">
                <img
                  className="w-4 h-4"
                  alt="Xrlwutxvnmmrj"
                  src="/figmaAssets/xrlwu14txvnmmrj8244-1.svg"
                />
                <span className="w-[46px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-[10px] tracking-[0] leading-[normal]">
                  {row.gasFee}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
