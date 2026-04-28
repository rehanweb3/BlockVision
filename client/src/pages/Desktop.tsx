import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ActivityChartsSection } from "./sections/ActivityChartsSection";
import { LatestBlocksSection } from "./sections/LatestBlocksSection";
import { LatestTransactionsSection } from "./sections/LatestTransactionsSection";
import { SearchBarSection } from "./sections/SearchBarSection";
import { StatisticsCardsSection } from "./sections/StatisticsCardsSection";
import { SummaryStatsSection } from "./sections/SummaryStatsSection";

// Navigation links data
const navLinks = [
  { label: "Blockchain" },
  { label: "Transactions" },
  { label: "Blocks" },
  { label: "Tokens" },
  { label: "Statistics" },
];

export const Desktop = (): JSX.Element => {
  const [activeNav, setActiveNav] = useState<string>("Blockchain");

  return (
    <div className="bg-[#0e100f] w-full min-h-screen flex flex-col overflow-x-hidden">
      {/* Header / Navbar */}
      <header className="w-full bg-[#1f201e] px-4 md:px-6">
        <div className="w-full flex flex-wrap items-center justify-between min-h-[88px] py-4 gap-4">
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

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 md:gap-[73px]">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setActiveNav(link.label)}
                className={`[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity ${activeNav === link.label ? "opacity-100" : "opacity-70"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Connect Wallet Button */}
          <Button
            className="h-[40px] w-[160px] py-[11px] bg-white text-black rounded-[108px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-base hover:bg-gray-100"
            variant="outline"
          >
            Connect Wallet
          </Button>
        </div>

        {/* Hero Title */}
        <div className="w-full flex flex-col items-center pb-8 pt-4">
          <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal] mb-6">
            AtherChain Blockchain
          </h1>

          {/* SearchIcon Bar in Hero */}
          <div className="relative w-full flex items-center justify-center">
            <div className="relative w-full max-w-[997px] min-h-16 flex items-center">
              <div className="w-full h-16 bg-[#f6f6f5] rounded-[108px] border border-solid border-[#0e100f] flex items-center pl-[43px] pr-2">
                <span className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#8e8e8e] text-base tracking-[0] leading-[normal] flex-1">
                  Search by Address, Transaction, Block, Token
                </span>
                <button className="bg-[#1f201e] hover:bg-black transition-colors rounded-full w-[120px] h-12 flex items-center justify-center text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                  >
                    <path
                      d="M20 20L16.05 16.05M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex flex-col px-4 md:px-6 gap-6 py-8">
        {/* Summary Stats Section - full width */}
        <section className="w-full">
          <SummaryStatsSection />
        </section>

        {/* SearchIcon Bar Section - full width */}
        <section className="w-full">
          <SearchBarSection />
        </section>

        {/* Latest Transactions + Latest Blocks - two columns */}
        <section className="w-full">
          <div className="flex flex-col lg:flex-row w-full gap-6">
            <div className="flex-1 min-w-0">
              <LatestTransactionsSection />
            </div>
            <div className="flex-1 min-w-0">
              <LatestBlocksSection />
            </div>
          </div>
        </section>

        {/* Statistics Cards + Activity Charts - two columns */}
        <section className="w-full">
          <div className="flex flex-col lg:flex-row w-full gap-6">
            <div className="flex-1 min-w-0">
              <StatisticsCardsSection />
            </div>
            <div className="flex-1 min-w-0">
              <ActivityChartsSection />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
