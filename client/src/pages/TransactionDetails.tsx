import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TransactionFeeDetailsSection } from "./sections/TransactionFeeDetailsSection";
import { TransactionStatusSection } from "./sections/TransactionStatusSection";
import { TransactionSummarySection } from "./sections/TransactionSummarySection";

// Navigation links data (matching Transactions/Blocks)
const navLinks = [
    "Blockchain",
    "Transactions",
    "Blocks",
    "Tokens",
    "Statistics",
];

// Tab data
const tabs = [
    { label: "Overview" },
    { label: "Internal Txns" },
    { label: "Logs (1)" },
];

// Reusable Address Badge (matching standard)
const AddressBadge = ({ address }: { address: string }) => (
    <div className="relative w-auto lg:w-[130px] h-[26px] bg-[#eef0f3] rounded flex items-center px-2 gap-2 hover:bg-[#5b616e33] transition-colors cursor-pointer">
        <img
            className="w-4 h-4 flex-shrink-0"
            alt="hash icon"
            src="/figmaAssets/i0ftf3jcnc8mmriumot-1.svg"
        />
        <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#0a0b0d] text-[10px] tracking-[0] leading-[normal] truncate uppercase">
            {address}
        </span>
        <img
            className="w-3.5 h-3.5 flex-shrink-0 ml-auto opacity-60 hover:opacity-100"
            alt="copy"
            src="/figmaAssets/7b8yf903kp7mmrir8vx-1.svg"
        />
    </div>
);

export const TxnDetails = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState("Overview");

    return (
        <div className="bg-white w-full min-h-screen flex flex-col [font-family:'Satoshi-Regular',Helvetica]">
            {/* Header / Nav area (Refined) */}
            <header className="w-full bg-[#0a0b0d] h-auto lg:h-[255px] relative overflow-hidden pb-8 lg:pb-0">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-[49px]">
                    {/* Top nav bar */}
                    <div className="flex flex-col lg:flex-row items-center justify-between pt-[27px] gap-6 lg:gap-0">
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

                        {/* Nav links */}
                        <nav className="flex flex-wrap justify-center items-center gap-6 lg:gap-[73px]">
                            {navLinks.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] hover:opacity-80 transition-opacity"
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>

                        {/* Connect Wallet button */}
                        <button className="w-[188px] h-[45px] bg-[#0052ff] rounded-[108px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] hover:bg-[#578bfa] transition-colors">
                            Connect Wallet
                        </button>
                    </div>

                    {/* Page title + search row */}
                    <div className="flex flex-col lg:flex-row items-center justify-between mt-12 lg:mt-[65px] gap-6 lg:gap-0">
                        {/* Left: Title + address badge */}
                        <div className="flex flex-col gap-2">
                            <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-[32px] lg:text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                                Transaction Details
                            </h1>
                            <AddressBadge address="0x99e4...6ae2" />
                        </div>

                        {/* Right: Search bar */}
                        <div className="relative w-full max-w-[501px] h-12">
                            <div className="w-full h-12 bg-[#eef0f3] rounded-[108px] border border-solid border-[#0a0b0d]" />
                            <span className="absolute top-[13px] left-[34px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal] pointer-events-none">
                                Search by Address, Transaction, Block, Token
                            </span>
                            <img
                                className="absolute top-2 right-0 w-[67px] h-8"
                                alt="Search"
                                src="/figmaAssets/search.png"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content area */}
            <main className="max-w-[1440px] mx-auto w-full px-4 lg:px-[21px] py-[24px]">
                {/* Tab navigation */}
                <div className="flex items-center gap-[9px] mb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.label}
                            onClick={() => setActiveTab(tab.label)}
                            className={`h-[35px] px-[22px] rounded-[10px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[13px] tracking-[0] leading-[normal] transition-colors ${activeTab === tab.label
                                ? "bg-[#0a0b0d] text-white"
                                : "bg-[#eef0f3] text-[#0a0b0d] hover:bg-[#5b616e33]"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Sections with gaps */}
                <div className="flex flex-col w-full gap-6">
                    <TransactionSummarySection />
                    <TransactionStatusSection />
                    <TransactionFeeDetailsSection />
                </div>
            </main>
        </div>
    );
};
