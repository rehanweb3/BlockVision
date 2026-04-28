import makeBlockie from "ethereum-blockies-base64";

// Account data for the top accounts list
const rectangleCount = 33;
const topAccountsData = [
  {
    rank: "Top 1",
    number: "Number : 01",
    walletAddress: "0x0000...0000",
    totalBalance: "2,000,00ATH",
    transactions: "15",
    firstSeen: "108 d 7 hrs ago",
    lastSeen: "28 d 9 hrs ago",
    iconSrc: makeBlockie("0x0000...0000"),
  },
  {
    rank: "Top 2",
    number: "Number : 02",
    walletAddress: "0x1234...5678",
    totalBalance: "200000ATH",
    transactions: "15",
    firstSeen: "108 d 7 hrs ago",
    lastSeen: "28 d 9 hrs ago",
    iconSrc: makeBlockie("0x1234...5678"),
  },
  {
    rank: "Top 3",
    number: "Number : 03",
    walletAddress: "0xabcd...efgh",
    totalBalance: "200000ATH",
    transactions: "15",
    firstSeen: "108 d 7 hrs ago",
    lastSeen: "28 d 9 hrs ago",
    iconSrc: makeBlockie("0xabcd...efgh"),
  },
  {
    rank: "Top 4",
    number: "Number : 04",
    walletAddress: "0x9876...5432",
    totalBalance: "200000ATH",
    transactions: "15",
    firstSeen: "108 d 7 hrs ago",
    lastSeen: "28 d 9 hrs ago",
    iconSrc: makeBlockie("0x9876...5432"),
  },
  {
    rank: "Top 5",
    number: "Number : 05",
    walletAddress: "0xaaaa...bbbb",
    totalBalance: "200000ATH",
    transactions: "15",
    firstSeen: "108 d 7 hrs ago",
    lastSeen: "28 d 9 hrs ago",
    iconSrc: makeBlockie("0xaaaa...bbbb"),
  },
  {
    rank: "Top 6",
    number: "Number : 06",
    walletAddress: "0xcccc...dddd",
    totalBalance: "200000ATH",
    transactions: "15",
    firstSeen: "108 d 7 hrs ago",
    lastSeen: "28 d 9 hrs ago",
    iconSrc: makeBlockie("0xcccc...dddd"),
  },
];

export const SearchBarSection = (): JSX.Element => {
  return (
    <div className="w-full shadow-shadow">
      {/* Main card container */}
      <div className="w-full bg-[#1f201e] rounded-2xl border border-solid border-[#2e2e2d] overflow-hidden p-2.5">
        {/* Header section (Standardized) */}
        <div className="relative w-full h-[47px] bg-[#363735] rounded-[10px] overflow-hidden flex items-center mb-[14px]">
          {/* Striped rectangle overlays */}
          {Array.from({ length: rectangleCount }).map((_, index) => (
            <img
              key={`rect-${index}`}
              className="absolute top-0 h-[47px] w-[50px]"
              style={{ left: `${15 + index * 47.6}px` }}
              alt="Rectangle"
              src="/figmaAssets/rectangle-14.svg"
            />
          ))}

          {/* Title */}
          <span className="absolute left-6 z-10 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
            Top Accounts
          </span>

          {/* View More link */}
          <div className="absolute right-[51px] z-10 flex items-center gap-1">
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
              View More
            </span>
            <img
              className="w-4 h-4"
              alt="Arrow icon"
              src="/figmaAssets/fy4wt6lo3dsmmq21p7s-1.svg"
            />
          </div>
        </div>

        {/* Account rows */}
        <div className="flex flex-col px-2 pb-2">
          {topAccountsData.map((account, index) => (
            <div key={index} className="grid grid-cols-12 items-center w-full min-h-[64px] py-1 border-b border-[#2e2e2d] last:border-0">
              {/* Left: Avatar + Rank info */}
              <div className="col-span-2 flex items-center gap-3">
                <div className="w-10 h-10 flex-shrink-0 bg-[#2a2b29] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Group"
                    src={account.iconSrc}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs [font-family:'Satoshi-Medium',Helvetica] font-medium text-white tracking-[0] leading-[normal] truncate">
                    {account.rank}
                  </span>
                  <span className="text-[10px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#beb7c4] tracking-[0] leading-[normal]">
                    {account.number}
                  </span>
                </div>
              </div>

              {/* Wallet Address */}
              <div className="col-span-2 flex flex-col gap-0.5">
                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#beb7c4] text-xs tracking-[0] leading-[normal]">
                  Wallet Address
                </span>
                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal] truncate pr-2">
                  {account.walletAddress}
                </span>
              </div>

              {/* Total Balance */}
              <div className="col-span-2 flex flex-col gap-0.5">
                <span className="text-xs [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#beb7c4] tracking-[0] leading-[normal]">
                  Total Balance
                </span>
                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  {account.totalBalance}
                </span>
              </div>

              {/* Transactions */}
              <div className="col-span-2 flex flex-col gap-0.5">
                <span className="text-xs [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#beb7c4] tracking-[0] leading-[normal]">
                  Transactions
                </span>
                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  {account.transactions}
                </span>
              </div>

              {/* First Seen */}
              <div className="col-span-2 flex flex-col gap-0.5">
                <span className="text-xs [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#beb7c4] tracking-[0] leading-[normal]">
                  First Seen
                </span>
                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  {account.firstSeen}
                </span>
              </div>

              {/* Last Seen */}
              <div className="col-span-2 flex flex-col gap-0.5 text-right">
                <span className="text-xs [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#beb7c4] tracking-[0] leading-[normal]">
                  Last Seen
                </span>
                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal]">
                  {account.lastSeen}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
