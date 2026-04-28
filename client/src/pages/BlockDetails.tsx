import { Button } from "@/components/ui/button";
import { BlockHashesSection } from "./sections/BlockHashesSection";
import { BlockMetadataSection } from "./sections/BlockMetadataSection";
import { BlockSummarySection } from "./sections/BlockSummarySection";
import { TransactionsListSection } from "./sections/TransactionsListSection";

// Navigation menu items
const navItems = [
  { label: "Blockchain" },
  { label: "Transactions" },
  { label: "Blocks" },
  { label: "Tokens" },
  { label: "Statistics" },
];

export const BlockDetails = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[1440px] min-h-screen flex flex-col">
      {/* Header / Navbar */}
      <header className="w-full bg-[#0a0b0d] flex flex-col">
        {/* Top nav row */}
        <div className="w-full flex items-center justify-between px-[49px] py-[27px]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              className="w-[53px] h-[53px] object-cover"
              alt="Blackmode"
              src="/figmaAssets/blackmode-1.png"
            />
            <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[normal]">
              AtherScan
            </span>
          </div>

          {/* Navigation links */}
          <nav className="flex items-center gap-[73px]">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Connect Wallet button */}
          <Button
            className="w-[188px] h-[45px] bg-[#0052ff] text-white rounded-[108px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-base tracking-[0] leading-[normal] hover:bg-[#578bfa] border-none transition-colors"
            variant="outline"
          >
            Connect Wallet
          </Button>
        </div>

        {/* Block Details title + Search bar row */}
        <div className="w-full flex items-center justify-between px-[49px] pb-[27px]">
          {/* Block Details title */}
          <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
            Block Details
          </h1>

          {/* Search bar */}
          <div className="relative w-[501px] h-12">
            <div className="absolute inset-0 bg-[#eef0f3] rounded-[108px] border border-solid border-[#0a0b0d]" />
            <span className="absolute top-[13px] left-[34px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal] pointer-events-none">
              Search by Address, Transaction, Block, Token
            </span>
            <img
              className="absolute top-2 right-2 w-[67px] h-8"
              alt="Search"
              src="/figmaAssets/search.png"
            />
          </div>
        </div>
      </header>

      {/* Main content sections */}
      <main className="w-full flex flex-col">
        <TransactionsListSection />
        <BlockHashesSection />
        <BlockSummarySection />
        <BlockMetadataSection />
      </main>
    </div>
  );
};
