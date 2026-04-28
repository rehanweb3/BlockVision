import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Navigation links data
const navLinks = [
    "Blockchain",
    "Transactions",
    "Blocks",
    "Tokens",
    "Statistics",
];

// Transaction data - all rows are identical as per the original code
const transactions = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    txnHash: "0x99e4...6ae2",
    method: "UpdateDataFeedsValuesPartial",
    from: "0xd56D...6Ca6",
    to: "0x99e4...6ae2",
    age: "26 mins 34 secs ago",
    amount: "10,000,000",
    gasFee: "0.001ATH",
}));

const rectangleDecorations = Array.from({ length: 24 });

// Address badge component for reuse
const AddressBadge = ({ address }: { address: string }) => (
    <div className="relative w-auto lg:w-[130px] h-[26px] bg-[#ffffff12] rounded flex items-center px-2 gap-2 hover:bg-[#ffffff20] transition-colors cursor-pointer">
        <img
            className="w-4 h-4 flex-shrink-0"
            alt="address icon"
            src="/figmaAssets/i0ftf3jcnc8mmriumot-1.svg"
        />
        <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal] truncate uppercase">
            {address}
        </span>
        <img
            className="w-3.5 h-3.5 flex-shrink-0 ml-auto opacity-60 hover:opacity-100"
            alt="copy"
            src="/figmaAssets/7b8yf903kp7mmrir8vx-1.svg"
        />
    </div>
);

export const Txn = (): JSX.Element => {
    return (
        <div className="bg-[#0e100f] w-full min-h-screen [font-family:'Satoshi-Regular',Helvetica]">
            {/* Header / Navigation Bar */}
            <header className="w-full bg-[#1f201e] h-auto lg:h-[255px] relative overflow-hidden pb-8 lg:pb-0">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-[49px]">
                    {/* Top nav row */}
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
                        <button className="w-[188px] h-[45px] bg-white rounded-[108px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] hover:bg-gray-100 transition-colors">
                            Connect Wallet
                        </button>
                    </div>

                    {/* Page title + search row */}
                    <div className="flex flex-col lg:flex-row items-center justify-between mt-12 lg:mt-[85px] gap-6 lg:gap-0">
                        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-[32px] lg:text-[40px] tracking-[0] leading-[normal]">
                            Transactions
                        </h1>

                        {/* Search bar */}
                        <div className="relative w-full max-w-[501px] h-12">
                            <div className="w-full h-12 bg-[#f6f6f5] rounded-[108px] border border-solid border-[#0e100f]" />
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

            {/* Main content */}
            <main className="max-w-[1440px] mx-auto px-4 lg:px-[21px] py-[24px]">
                {/* Table card */}
                <Card className="w-full bg-[#1f201e] rounded-2xl border border-solid border-[#2e2e2d] shadow-shadow overflow-x-auto lg:overflow-hidden">

                    {/* Table Container with standard padding */}
                    <CardContent className="p-2.5">
                        {/* Table header bar (Standardized) */}
                        <div className="relative w-full h-[47px] bg-[#363735] rounded-[10px] mb-[14px] flex items-center overflow-hidden">
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

                            {/* Title / Count */}
                            <span className="relative z-10 ml-6 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] flex-1">
                                140,392,874 Txns Found
                            </span>

                            {/* View More (Optional, keeping it consistent with reference sections if needed, but here it's just a count) */}
                        </div>

                        {/* Table Content Area */}
                        <div className="min-w-[1240px] lg:min-w-0 px-2.5">
                            {/* Column headers */}
                            <div className="w-full h-[30px] rounded-lg border-[0.6px] border-solid border-[#beb7c4] grid grid-cols-[1.5fr_1.5fr_1.2fr_1.2fr_1.2fr_0.5fr_1.2fr_0.8fr] gap-4 items-center px-4 mb-2">
                                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal] uppercase">
                                    TXN HASH
                                </span>
                                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal] uppercase text-center">
                                    METHOD
                                </span>
                                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal] uppercase">
                                    FROM
                                </span>
                                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal] uppercase">
                                    TO
                                </span>
                                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal] uppercase">
                                    AGE
                                </span>
                                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal] uppercase text-center">
                                    STATUS
                                </span>
                                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal] uppercase">
                                    AMOUNT
                                </span>
                                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal] uppercase">
                                    Gas Fee
                                </span>
                            </div>

                            {/* Transaction rows with dividers */}
                            <div className="flex flex-col pb-4">
                                {transactions.map((txn) => (
                                    <div
                                        key={txn.id}
                                        className="w-full min-h-[50px] grid grid-cols-[1.5fr_1.5fr_1.2fr_1.2fr_1.2fr_0.5fr_1.2fr_0.8fr] gap-4 items-center px-4 border-b border-[#2e2e2d] last:border-0 hover:bg-[#ffffff05] transition-colors"
                                    >
                                        {/* TXN HASH */}
                                        <div className="flex justify-start">
                                            <AddressBadge address={txn.txnHash} />
                                        </div>

                                        {/* METHOD */}
                                        <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal] truncate text-center">
                                            {txn.method}
                                        </div>

                                        {/* FROM */}
                                        <div className="flex justify-start">
                                            <AddressBadge address={txn.from} />
                                        </div>

                                        {/* TO */}
                                        <div className="flex justify-start">
                                            <AddressBadge address={txn.to} />
                                        </div>

                                        {/* AGE */}
                                        <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal]">
                                            {txn.age}
                                        </div>

                                        {/* STATUS */}
                                        <div className="flex justify-center">
                                            <img
                                                className="w-4 h-4"
                                                alt="status"
                                                src="/figmaAssets/prg5vm87r5mmrj57oo-1.svg"
                                            />
                                        </div>

                                        {/* AMOUNT */}
                                        <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal]">
                                            {txn.amount}
                                        </div>

                                        {/* GAS FEE */}
                                        <div className="flex items-center gap-1">
                                            <img
                                                className="w-4 h-4 flex-shrink-0"
                                                alt="gas fee icon"
                                                src="/figmaAssets/xrlwu14txvnmmrj8244-1.svg"
                                            />
                                            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal] truncate">
                                                {txn.gasFee}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};
